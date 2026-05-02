import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for your generous donation to G&A Foundation.',
};

export default function DonateSuccessPage() {
  return (
    <>
      <section className="relative flex items-center justify-center hero-gradient" style={{ minHeight: '40vh' }}>
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="relative z-10 text-center text-white px-4 py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Thank You for Your Generosity</h1>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-xl text-center">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Your tax-deductible donation helps expand access to mental health and
              substance abuse services for underserved communities in Kentucky's
              Bluegrass region. A receipt has been sent to your email.
            </p>

            <p className="text-gray-500 text-sm mb-8">
              For your records: G&amp;A Foundation Inc., EIN: 41-4460409
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green/90 transition-all shadow-lg"
              >
                Return to Home
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-brand-blue text-brand-blue font-semibold rounded-full hover:bg-brand-blue hover:text-white transition-all"
              >
                Make Another Donation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
