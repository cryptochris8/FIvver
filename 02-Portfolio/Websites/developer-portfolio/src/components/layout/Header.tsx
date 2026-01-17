'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-secondary-200 bg-white/80 backdrop-blur-lg">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="text-xl font-bold text-secondary-900">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-600 transition-colors hover:text-primary-600 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Social */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-secondary-500 hover:text-secondary-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-secondary-500 hover:text-secondary-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <Link href="/contact">
              <Button size="sm">Hire Me</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-secondary-900" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-secondary-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary-600 transition-colors hover:text-primary-600 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-secondary-200">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Hire Me</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
