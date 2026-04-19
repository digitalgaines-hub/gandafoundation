import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/news', label: 'News' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
  { href: '/crisis-resources', label: 'Crisis Resources' },
];

export default function Footer() {
  return (
    <footer>
      {/* Crisis Banner */}
      <div className="bg-brand-dark text-white py-4 px-4">
        <div className="mx-auto max-w-7xl text-center text-sm sm:text-base font-medium">
          If you or someone you know is in crisis, call or text{' '}
          <a href="tel:988" className="underline font-bold hover:text-brand-green transition-colors">988</a>
          {' '}| SAMHSA Helpline:{' '}
          <a href="tel:1-800-662-4357" className="underline font-bold hover:text-brand-green transition-colors">1-800-662-4357</a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: About */}
          <div>
            <Image
              src="/logo.png"
              alt="G&A Foundation"
              width={140}
              height={42}
              className="h-10 w-auto mb-4 brightness-200"
            />
            <p className="text-sm leading-relaxed mb-3">
              G&A Foundation works to ensure that every person in the Bluegrass
              region has access to quality mental health and substance abuse services.
            </p>
            <p className="text-xs text-gray-500">EIN: 41-4460409</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-sm space-y-2">
              <p>244 W Irvine Street</p>
              <p>Richmond, KY 40475</p>
              <p className="mt-3">
                <a
                  href="mailto:dejon@digitalgaines.com"
                  className="hover:text-brand-blue transition-colors"
                >
                  dejon@digitalgaines.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 text-gray-500 text-xs text-center py-4 px-4 space-y-1">
        <p>
          G&amp;A Foundation Inc. is a tax-exempt organization under Section 501(c)(3) of the
          Internal Revenue Code (EIN: 41-4460409). Contributions are tax-deductible to the
          extent permitted by law.
        </p>
        <p>&copy; 2026 G&amp;A Foundation Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
