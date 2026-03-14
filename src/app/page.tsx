import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';

const stats = [
  { value: '7+', label: 'Years', desc: 'Of behavioral health experience through G&A Counseling' },
  { value: '21', label: 'Staff', desc: 'Dedicated professionals serving Madison County' },
  { value: '3', label: 'Counties', desc: 'And growing across the Bluegrass region' },
];

const programs = [
  {
    icon: (
      <svg className="w-10 h-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: 'School-Based Mental Health',
    summary: 'Placing licensed counselors directly in schools to support students where they already are. Removing barriers of transportation, cost, and stigma.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Substance Abuse Access',
    summary: 'Expanding access to substance abuse treatment, recovery support, and prevention education in underserved areas across Kentucky.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: 'Community Outreach',
    summary: 'Investing in education and awareness to change the conversation around mental health and substance abuse in the Bluegrass region.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white py-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Every Person Deserves Access to Mental Health Care
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            G&amp;A Foundation works to ensure that every person in the Bluegrass
            region has access to quality mental health and substance abuse
            services, regardless of location, income, or circumstance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-dark transition-all"
            >
              Our Programs
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green/90 transition-all shadow-lg"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-8 rounded-2xl bg-brand-light border border-gray-100"
                >
                  <div className="text-5xl font-bold text-brand-blue mb-1">{stat.value}</div>
                  <div className="text-xl font-semibold text-brand-dark mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 px-4 bg-brand-light">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark text-center mb-4">
              Our Focus Areas
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              G&amp;A Foundation focuses on three core areas to expand behavioral health
              access across the Bluegrass region.
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ScrollAnimation key={program.title}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{program.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {program.summary}
                  </p>
                  <Link
                    href="/programs"
                    className="text-brand-blue font-semibold text-sm hover:underline"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
                  About G&amp;A Foundation
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  G&amp;A Foundation was established in 2026 as a 501(c)(3) nonprofit
                  organization affiliated with G&amp;A Counseling, a behavioral health
                  practice that has served the Richmond, Kentucky community for over
                  seven years.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The foundation was created to expand access to mental health and
                  substance abuse services across the Bluegrass region through
                  grant-funded programs, school-based mental health initiatives, and
                  community outreach.
                </p>
                <Link
                  href="/about"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  Read Our Story &rarr;
                </Link>
              </div>
              <div className="hero-gradient rounded-2xl aspect-square max-w-md mx-auto w-full flex items-center justify-center shadow-lg">
                <Image
                  src="/logo.png"
                  alt="G&A Foundation"
                  width={200}
                  height={60}
                  className="w-48 h-auto brightness-200 opacity-80"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 hero-gradient">
        <div className="mx-auto max-w-3xl text-center text-white">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Your support helps us expand access to mental health and substance
              abuse services across the Bluegrass region.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green/90 transition-all shadow-lg"
            >
              Support Our Mission
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
