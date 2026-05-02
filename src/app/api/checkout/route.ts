import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-04-22.dahlia',
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, customAmount } = body;

    const donationAmount = customAmount
      ? Math.round(parseFloat(customAmount) * 100)
      : amount * 100;

    if (!donationAmount || donationAmount < 100) {
      return NextResponse.json({ error: 'Minimum donation is $1.00' }, { status: 400 });
    }

    if (donationAmount > 99999900) {
      return NextResponse.json({ error: 'Please contact us for large donations' }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation to G&A Foundation',
              description: 'Tax-deductible contribution to support mental health services in Kentucky',
            },
            unit_amount: donationAmount,
          },
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/donate`,
      submit_type: 'donate',
      billing_address_collection: 'required',
      metadata: {
        type: 'donation',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Stripe checkout error:', message);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
