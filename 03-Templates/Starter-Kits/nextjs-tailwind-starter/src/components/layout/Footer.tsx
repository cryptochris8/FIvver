import Link from 'next/link';

const footerLinks = {
  company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/careers', label: 'Careers' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
  social: [
    { href: 'https://twitter.com', label: 'Twitter' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://github.com', label: 'GitHub' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary-200 bg-secondary-50">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-secondary-900">
              YourLogo
            </Link>
            <p className="mt-4 text-sm text-secondary-600">
              Building modern web experiences that make a difference.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold text-secondary-900">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-600 hover:text-secondary-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 font-semibold text-secondary-900">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-600 hover:text-secondary-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 font-semibold text-secondary-900">Follow Us</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary-600 hover:text-secondary-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-secondary-200 pt-8 text-center">
          <p className="text-sm text-secondary-600">
            &copy; {currentYear} YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
