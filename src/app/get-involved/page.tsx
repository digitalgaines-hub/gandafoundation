import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';
import GetInvolvedForm from './GetInvolvedForm';

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Find ways to support behavioral health in the Bluegrass region through volunteering, partnerships, and spreading awareness.',
};

const cards = [
  {
    title: 'Volunteer',
    desc: 'Lend your time and skills to support our programs and events. We welcome volunteers from all backgrounds.',
    link: { href: '/contact', label: 'Interested? Contact us' },
  },
  {
    title: 'Partner',
    desc: 'Schools, businesses, and community organizations can partner with G&A Foundation to bring behavioral health resources to those who need them most.',
    link: { href: '/contact', label: 'Become a Partner' },
  },
  {
    title: 'Spread the Word',
    desc: 'Help us raise awareness about mental health and substance abuse services in our region. Follow us, share our mission, and start conversations that matter.',
    link: null,
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center hero-gradient" style={{ minHeight: '40vh' }}>
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="relative z-10 text-center text-white px-4 py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-lg sm:text-xl text-white/90">
            There are many ways to support behavioral health in the Bluegrass
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <ScrollAnimation key={card.title}>
              <div className="bg-brand-light rounded-2xl p-8 h-full flex flex-col border border-gray-100">
                <h3 className="text-xl font-bold text-brand-dark mb-4">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{card.desc}</p>
                {card.link && (
                  <Link href={card.link.href} className="text-brand-blue font-semibold text-sm hover:underline">
                    {card.link.label} &rarr;
                  </Link>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-4 bg-brand-light">
        <div className="mx-auto max-w-xl">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-brand-dark text-center mb-10">
              Tell Us How You Want to Help
            </h2>
            <GetInvolvedForm />
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
