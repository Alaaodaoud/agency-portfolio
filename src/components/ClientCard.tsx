'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { ClientProfile } from '@/lib/clients';

interface ClientCardProps {
  client: ClientProfile;
}

export function ClientCard({ client }: ClientCardProps) {
  const { locale, t } = useLanguage();

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
      <div
        className="h-32 relative overflow-hidden"
        style={{ backgroundColor: client.websiteColor }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 w-fit">
            <div className="text-white font-semibold text-sm">
              {client.businessName[locale]}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-2.5 py-1 text-xs font-medium rounded-full text-white"
            style={{ backgroundColor: client.accentColor }}
          >
            {client.category[locale]}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {client.city[locale]}
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
          {client.businessName[locale]}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {client.tagline[locale]}
        </p>

        <Link
          href={`/portfolio/${client.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
        >
          {t.portfolio.viewProfile}
          <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
