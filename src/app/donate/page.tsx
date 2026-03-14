import type { Metadata } from 'next';
import ScrollAnimation from '@/components/ScrollAnimation';
import DonateForm from './DonateForm';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support G&A Foundation\'s mission to expand access to mental health and substance abuse services in the Bluegrass region.',
};

const impacts = [
  { amount: '$50', desc: 'Funds one student counseling session' },
  { amount: '$250', desc: 'Provides a month of school-based mental health services' },
  { amount: '$1,000', desc: 'Sponsors a community Mental Health First Aid training' },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center hero-gradient" style={{ minHeight: '40vh' }}>
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="relative z-10 text-center text-white px-4 py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Your generosity helps us expand access to mental health and substance abuse
            services for those who need it most.
          </p>
        </div>
      </section>

      {/* Online Giving */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-xl">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100 text-center">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Online Giving Coming Soon</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are finalizing our online giving platform. Leave your email below
                and we will notify you as soon as online donations are available.
              </p>
              <DonateForm />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Give by Mail */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="mx-auto max-w-xl">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Give by Mail</h3>
              <p className="text-gray-600 mb-3">
                Checks may be made payable to G&amp;A Foundation and mailed to:
              </p>
              <address className="not-italic text-gray-700 font-medium">
                G&amp;A Foundation<br />
                244 W Irvine Street<br />
                Richmond, KY 40475
              </address>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Your Impact */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Your Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {impacts.map((item) => (
                <div key={item.amount} className="text-center p-8 rounded-2xl bg-brand-light border border-gray-100">
                  <div className="text-4xl font-bold text-brand-green mb-3">{item.amount}</div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Tax Info */}
      <section className="py-12 px-4 bg-brand-light">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-gray-500 text-sm">
            G&amp;A Foundation is a 501(c)(3) nonprofit organization (EIN: 41-4460409).
            Your contribution is tax-deductible to the fullest extent allowed by law.
          </p>
        </div>
      </section>
    </>
  );
}
