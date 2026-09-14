'use client';

import { useTranslations } from 'next-intl';

interface DisclaimerBannerProps {
  compact?: boolean;
}

export function DisclaimerBanner({ compact = false }: DisclaimerBannerProps) {
  const t = useTranslations('disclaimer');

  if (compact) {
    return (
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center">
        <p className="text-sm text-amber-800 font-medium">
          ⚠️ {t('shortMessage')}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 border-b-2 border-amber-300 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <svg 
              className="h-6 w-6 text-amber-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wide">
              {t('title')}
            </h3>
            <p className="mt-1 text-sm text-amber-700">
              {t('message')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
