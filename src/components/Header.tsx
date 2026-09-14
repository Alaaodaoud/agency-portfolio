'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';

interface HeaderProps {
  showNav?: boolean;
}

export function Header({ showNav = true }: HeaderProps) {
  const t = useTranslations('common');

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-semibold text-gray-900">Agency Portfolio</span>
          </Link>

          <div className="flex items-center gap-6">
            {showNav && (
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Home
                </Link>
                <Link href="/portfolio" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Portfolio
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Pricing
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">
                  {t('contactUs')}
                </Link>
              </nav>
            )}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
