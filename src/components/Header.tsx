"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const { locale, setLocale, t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-gray-900">
              {isRTL ? "علاء للويب" : "Alaa Web"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-600 border border-gray-200 rounded-full hover:border-primary-300 transition-all"
            >
              {locale === "en" ? "العربية" : "English"}
            </button>
            <Link
              href="/contact"
              className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              {isRTL ? "تواصل معنا" : "Get Started"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-primary-600 transition-colors font-medium px-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 px-2 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setLocale(locale === "en" ? "ar" : "en")}
                  className="px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-full"
                >
                  {locale === "en" ? "العربية" : "English"}
                </button>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium"
                >
                  {isRTL ? "تواصل معنا" : "Get Started"}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
