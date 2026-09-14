'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export function LanguageToggle() {
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="px-4 py-2 text-sm font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors disabled:opacity-50"
    >
      {isPending ? '...' : t('languageToggle')}
    </button>
  );
}
