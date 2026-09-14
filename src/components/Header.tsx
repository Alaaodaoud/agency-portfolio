'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export function Header() {
  const { locale, setLocale, t, isRTL } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">
              {isRTL ? 'وكالة علاء' : "Alaa's Agency"}
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {t.nav.portfolio}
              </Link>
              <Link
                href="/#contact"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>

            <button
              onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
              className="px-3 py-1.5 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle language"
            >
              {locale === 'en' ? 'عربي' : 'EN'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
