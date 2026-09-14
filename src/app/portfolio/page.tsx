'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { demoClients } from '@/lib/clients';
import { ClientCard } from '@/components/ClientCard';

export default function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-6 transition-colors"
          >
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.nav.home}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.portfolio.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoClients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
}
