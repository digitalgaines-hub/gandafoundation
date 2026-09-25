import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about G&A Foundation, our mission, leadership, and values in expanding behavioral health access across the Bluegrass region.',
};

type Person = {
  name: string;
  initials: string;
  title: string;
  photo?: string;
  bio?: string[];
};

const staff: Person[] = [
  {
    name: 'Toni Gaines, LPCC',
    initials: 'TG',
    title: 'Executive Director',
    photo: '/images/team/toni-gaines-headshot-portrait.webp',
    bio: [
      'Toni Gaines is a Licensed Professional Clinical Counselor (LPCC) and the founder of G&A Counseling, a behavioral health practice she opened in Richmond in 2017. Over nearly a decade, she has grown the practice into a team of more than 20 professionals providing school-based mental health and targeted case management services to children, families, and adults across Madison County.',
      'Her work in schools and with families who rely on Medicaid has shown her how often location, cost, and circumstance stand between people and the care they need. She founded G&A Foundation to help close those gaps, so that every person in the Bluegrass region can access quality mental health and substance use services.',
      'As Executive Director, Toni leads the Foundation\'s programs and partnerships and works alongside the Board of Directors to expand its reach and make mental health a priority in the community.',
    ],
  },
];

const boardMembers: Person[] = [
  {
    name: 'Sara Szymkowiak',
    initials: 'SS',
    title: 'Board Chair',
    photo: '/images/team/sara-headshot-portrait.webp',
    bio: [
      'Sara has dedicated much of her career to serving children and families in her community. Her experience in education has shaped her belief in the importance of advocacy, collaboration, and building strong support systems for individuals in every stage of life.',
      'In addition to G&A Foundation, Sara currently serves on three other nonprofit boards: Thompson Scholars Foundation, Parent Teacher Association (PTA), and Site-based Decision Making (SBDM) Council. Through these roles she continues to advocate for students, families, education, and community well-being.',
      'Sara is honored to serve as the Chair of G&A Foundation and is passionate about helping the organization expand its impact and make mental health a priority within the community.',
    ],
  },
  { name: 'Melissa Barnett', initials: 'MB', title: 'Board Member' },
  { name: 'Claudia Casasola', initials: 'CC', title: 'Board Member' },
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

/** 4:5 headshot, or a neutral brand-blue initials avatar when no photo exists. */
function Portrait({ person, className = '' }: { person: Person; className?: string }) {
  return (
    <div className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-brand-blue ${className}`}>
      {person.photo ? (
        <Image
          src={person.photo}
          alt={`Headshot of ${person.name}, ${person.title}`}
          fill
          sizes="(min-width: 640px) 320px, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
          <span className="text-4xl font-bold text-white">{person.initials}</span>
        </div>
      )}
    </div>
  );
}

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
                practice that has served the Richmond, Kentucky community since 2017.
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
        <div className="mx-auto max-w-5xl">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-brand-dark mb-3 text-center">Our Leadership</h2>
            <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto text-sm">
              G&amp;A Foundation is governed by an independent Board of Directors committed
              to transparency, accountability, and community impact. Foundation staff lead
              the organization&apos;s day to day programs and operations.
            </p>
          </ScrollAnimation>

          {/* Board */}
          <ScrollAnimation>
            <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center">Board of Directors</h3>
            <div className="mb-20 grid grid-cols-1 items-start gap-6 sm:grid-cols-3">
              {boardMembers.map((member) => (
                <div key={member.name} className="rounded-2xl bg-white p-6 shadow-sm">
                  <Portrait person={member} className="mb-5" />
                  <h4 className="font-bold text-brand-dark">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.title}</p>
                  {member.bio ? (
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
                      {member.bio.map((para) => (
                        <p key={para.slice(0, 40)}>{para}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Staff */}
          <ScrollAnimation>
            <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center">Foundation Staff</h3>
            <div className="space-y-8">
              {staff.map((person) => (
                <div
                  key={person.name}
                  className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                    <div className="mx-auto w-40 flex-shrink-0 sm:mx-0 sm:w-48">
                      <Portrait person={person} />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl font-bold text-brand-dark">{person.name}</h4>
                      <p className="mb-3 font-medium text-brand-blue">{person.title}</p>
                      <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                        {person.bio?.map((para) => (
                          <p key={para.slice(0, 40)}>{para}</p>
                        ))}
                      </div>
                    </div>
                  </div>
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
