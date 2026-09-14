'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { ProspectDemo } from '@/lib/prospects';

interface ProspectCardProps {
  prospect: ProspectDemo;
}

export function ProspectCard({ prospect }: ProspectCardProps) {
  const { locale, t, isRTL } = useLanguage();

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
      {/* Demo Label */}
      <div className="bg-amber-100 dark:bg-amber-900/50 px-4 py-2 flex items-center gap-2">
        <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="text-xs font-medium text-amber-700 dark:text-amber-300">
          {isRTL ? 'اقتراح موقع' : 'Demo Preview'}
        </span>
      </div>

      <div
        className="h-28 relative overflow-hidden"
        style={{ backgroundColor: prospect.lookNotes.primaryColor }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 w-fit">
            <div className="text-white font-semibold text-sm">
              {prospect.businessName[locale]}
            </div>
          </div>
        </div>
        {/* Style badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-black/20 backdrop-blur-sm rounded text-white text-xs capitalize">
            {prospect.lookNotes.style}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-2.5 py-1 text-xs font-medium rounded-full text-white"
            style={{ backgroundColor: prospect.lookNotes.accentColor }}
          >
            {prospect.niche[locale]}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {prospect.city[locale]}
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
          {prospect.businessName[locale]}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {prospect.tagline[locale]}
        </p>

        {/* Services preview */}
        <div className="flex flex-wrap gap-1 mb-4">
          {prospect.suggestedServices.slice(0, 3).map((service, i) => (
            <span
              key={i}
              className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
            >
              {service[locale]}
            </span>
          ))}
          {prospect.suggestedServices.length > 3 && (
            <span className="text-xs px-2 py-0.5 text-gray-400">
              +{prospect.suggestedServices.length - 3}
            </span>
          )}
        </div>

        <Link
          href={`/demo/${prospect.slug}`}
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
