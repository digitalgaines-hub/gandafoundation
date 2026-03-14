import type { Metadata } from 'next';
import ScrollAnimation from '@/components/ScrollAnimation';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact G&A Foundation. We would love to hear from you about behavioral health services in the Bluegrass region.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center hero-gradient" style={{ minHeight: '40vh' }}>
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="relative z-10 text-center text-white px-4 py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-white/90">We would love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

              {/* Info */}
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Contact Information</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <address className="not-italic text-gray-600">
                      244 W Irvine Street<br />
                      Richmond, KY 40475
                    </address>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <a href="mailto:dejon@digitalgaines.com" className="text-gray-600 hover:text-brand-blue transition-colors">
                      dejon@digitalgaines.com
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <iframe
                    title="G&A Foundation location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.854!2d-84.2947!3d37.7487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8842f1a0e1234567%3A0x1234567890abcdef!2s244+W+Irvine+St%2C+Richmond%2C+KY+40475!5e0!3m2!1sen!2sus!4v1709830000000"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
