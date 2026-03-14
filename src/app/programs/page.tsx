import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Learn about G&A Foundation programs: school-based mental health, substance abuse access, and community outreach across the Bluegrass region.',
};

const programs = [
  {
    title: 'School-Based Mental Health',
    icon: (
      <svg className="w-12 h-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    paragraphs: [
      'Many students in the Bluegrass region lack access to mental health services outside of school. G&A Foundation works to place licensed counselors directly in schools, ensuring students can receive support where they already are, without the barriers of transportation, cost, or stigma that keep so many families from seeking help.',
      'Our school-based programs focus on early identification and intervention, equipping students with coping skills and emotional resilience while providing a safe space to process challenges ranging from anxiety and depression to trauma and substance exposure.',
    ],
  },
  {
    title: 'Substance Abuse Access',
    icon: (
      <svg className="w-12 h-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    paragraphs: [
      'Substance abuse continues to devastate communities across Kentucky, and the Bluegrass region is no exception. G&A Foundation is committed to expanding access to substance abuse treatment, recovery support, and prevention education, particularly in areas where services are limited or nonexistent.',
      'We partner with local providers and community organizations to connect individuals and families with the care they need, reduce wait times for treatment, and support long-term recovery through wraparound services.',
    ],
  },
  {
    title: 'Community Outreach and Education',
    icon: (
      <svg className="w-12 h-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    paragraphs: [
      'Stigma and lack of awareness remain two of the greatest barriers to behavioral health care. G&A Foundation invests in community outreach and education to change the conversation around mental health and substance abuse in the Bluegrass region.',
      'Our outreach efforts include Mental Health First Aid training, community awareness events, partnerships with local organizations, and resource distribution to ensure that every person in our service area knows where to turn when they or someone they love needs help.',
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center hero-gradient" style={{ minHeight: '40vh' }}>
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="relative z-10 text-center text-white px-4 py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg sm:text-xl text-white/90">
            Expanding access to behavioral health services across the Bluegrass
          </p>
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, i) => (
        <section
          key={program.title}
          className={`py-20 px-4 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-light'}`}
        >
          <div className="mx-auto max-w-3xl">
            <ScrollAnimation>
              <div className="mb-6">{program.icon}</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
                {program.title}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {program.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>
      ))}

      {/* Partner CTA */}
      <section className="py-20 px-4 hero-gradient">
        <div className="mx-auto max-w-3xl text-center text-white">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner With Us</h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Are you a school, organization, or community group interested in
              bringing behavioral health services to your community? We want to
              hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-brand-dark font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
