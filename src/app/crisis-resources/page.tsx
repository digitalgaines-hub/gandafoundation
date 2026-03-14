import type { Metadata } from 'next';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Crisis Resources',
  description: 'Find crisis resources and helplines for mental health and substance abuse support. You are not alone.',
};

const resources = [
  {
    title: '988 Suicide and Crisis Lifeline',
    action: 'Call or text 988',
    href: 'tel:988',
    availability: 'Available 24/7',
    desc: 'Provides free and confidential support for people in distress, prevention and crisis resources.',
  },
  {
    title: 'SAMHSA National Helpline',
    action: '1-800-662-4357',
    href: 'tel:1-800-662-4357',
    availability: 'Available 24/7, 365 days a year',
    desc: 'Free, confidential, 24/7, treatment referral and information service for individuals and families facing mental health and substance use disorders.',
  },
  {
    title: 'Crisis Text Line',
    action: 'Text HOME to 741741',
    href: 'sms:741741&body=HOME',
    availability: 'Available 24/7',
    desc: 'Free crisis counseling via text message.',
  },
];

const kyResources = [
  { label: 'Kentucky 988', detail: 'Call or text 988', href: 'tel:988' },
  { label: 'KY Cabinet for Health and Family Services', detail: '1-800-372-2973', href: 'tel:1-800-372-2973' },
  { label: 'Local Madison County Resources', detail: 'Contact your local community mental health center for area-specific services', href: null },
];

export default function CrisisResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center hero-gradient" style={{ minHeight: '40vh' }}>
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="relative z-10 text-center text-white px-4 py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Crisis Resources</h1>
          <p className="text-lg sm:text-xl text-white/90">
            If you or someone you know needs help, please reach out. You are not alone.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-3xl space-y-8">
          {resources.map((r) => (
            <ScrollAnimation key={r.title}>
              <div className="bg-brand-light rounded-2xl p-8 border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2">{r.title}</h2>
                <a
                  href={r.href}
                  className="inline-block text-2xl sm:text-3xl font-bold text-brand-blue hover:text-brand-blue/80 transition-colors mb-2"
                >
                  {r.action}
                </a>
                <p className="text-brand-green font-semibold text-sm mb-3">{r.availability}</p>
                <p className="text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Kentucky-Specific */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="mx-auto max-w-3xl">
          <ScrollAnimation>
            <h2 className="text-2xl font-bold text-brand-dark mb-8">Kentucky-Specific Resources</h2>
            <div className="space-y-4">
              {kyResources.map((r) => (
                <div key={r.label} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-brand-dark mb-1">{r.label}</h3>
                  {r.href ? (
                    <a href={r.href} className="text-brand-blue font-semibold hover:underline">
                      {r.detail}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{r.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 px-4 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Important:</strong> If you are experiencing a medical emergency, please call{' '}
              <a href="tel:911" className="text-red-600 font-bold hover:underline">911</a>{' '}
              immediately. The resources listed above are for crisis support and referrals.
              G&amp;A Foundation does not provide direct crisis intervention services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
