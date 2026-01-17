import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-secondary-400 mb-6 max-w-md">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 rounded-lg text-secondary-400 hover:text-white hover:bg-secondary-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 rounded-lg text-secondary-400 hover:text-white hover:bg-secondary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 rounded-lg text-secondary-400 hover:text-white hover:bg-secondary-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-2 bg-secondary-800 rounded-lg text-secondary-400 hover:text-white hover:bg-secondary-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-secondary-400">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>{SITE_CONFIG.location}</li>
              <li className="pt-2">
                <a
                  href={SITE_CONFIG.social.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Hire me on Fiverr
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-500 text-sm">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-secondary-500 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
