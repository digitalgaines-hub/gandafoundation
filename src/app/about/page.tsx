import type { Metadata } from 'next';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about G&A Foundation, our mission, leadership, and values in expanding behavioral health access across the Bluegrass region.',
};

const boardMembers = [
  { name: 'Sara Szymkowiak', initials: 'SS' },
  { name: 'Melissa Barnett', initials: 'MB' },
  { name: 'Claudia Casasola', initials: 'CC' },
];

const values = [
  {
    title: 'Access',
    desc: 'Every person deserves quality behavioral health services, regardless of income, location, or circumstance.',
  },
  {
    title: 'Independence',
    desc: 'Our board and governance maintain full independence to ensure mission-driven decision making.',
  },
  {
    title: 'Transparency',
    desc: 'We are committed to accountability in how we steward community trust and grant funding.',
  },
  {
    title: 'Community',
    desc: 'We meet people where they are, building partnerships that strengthen our region from the ground up.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center hero-gradient" style={{ minHeight: '40vh' }}>
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="relative z-10 text-center text-white px-4 py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About G&amp;A Foundation</h1>
          <p className="text-lg sm:text-xl text-white/90">
            Locally rooted. Community driven. Mission focused.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-3xl">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Our Story</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                G&amp;A Foundation was established in 2026 as a 501(c)(3) nonprofit
                organization affiliated with G&amp;A Counseling, a behavioral health
                practice that has served the Richmond, Kentucky community for over seven
                years.
              </p>
              <p>
                The foundation was created to expand access to mental health and substance
                abuse services across the Bluegrass region through grant-funded programs,
                school-based mental health initiatives, and community outreach. We believe
                in meeting people where they are and removing the barriers that keep
                individuals and families from getting the help they need.
              </p>
              <p>
                With a team of 21 dedicated professionals and years of clinical experience,
                G&amp;A Counseling has built deep roots in Madison County through
                Medicaid-focused, school-based mental health and Targeted Case Management
                (TCM) services. G&amp;A Foundation carries that mission forward by pursuing
                grant funding and community partnerships to reach those who fall through
                the cracks of the existing system.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 bg-brand-light">
        <div className="mx-auto max-w-4xl">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">Our Leadership</h2>
            {/* Executive Director */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm mb-16 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">TG</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">Toni Gaines, LPCC</h3>
                  <p className="text-brand-blue font-medium mb-3">Founder and Executive Director</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Toni Gaines is a Licensed Professional Clinical Counselor and the founder
                    of both G&amp;A Counseling and G&amp;A Foundation. With over seven years of
                    experience leading behavioral health services in Madison County, Toni is
                    dedicated to removing barriers to mental health care across the Bluegrass
                    region.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Board */}
          <ScrollAnimation>
            <h2 className="text-2xl font-bold text-brand-dark mb-3 text-center">Board of Directors</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto text-sm">
              G&amp;A Foundation is governed by an independent Board of Directors committed
              to transparency, accountability, and community impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {boardMembers.map((member) => (
                <div key={member.name} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg font-bold">{member.initials}</span>
                  </div>
                  <h3 className="font-bold text-brand-dark">{member.name}</h3>
                  <p className="text-gray-500 text-sm">Board Member</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="p-8 rounded-2xl bg-brand-light border border-gray-100">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
