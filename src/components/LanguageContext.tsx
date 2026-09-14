'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Locale, defaultLocale, getTranslations } from '@/lib/i18n';

interface TranslationType {
  nav: { home: string; portfolio: string; contact: string };
  hero: { title: string; subtitle: string; cta: string; contact: string };
  pricing: { title: string; subtitle: string; price: string; period: string; features: readonly string[]; cta: string };
  portfolio: { title: string; subtitle: string; viewProfile: string; allClients: string };
  profile: { about: string; services: string; websitePreview: string; contactBusiness: string; contactNote: string; backToPortfolio: string };
  contact: { title: string; subtitle: string; whatsapp: string; email: string };
  footer: { rights: string; poweredBy: string };
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationType;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const t = getTranslations(locale) as TranslationType;
  const isRTL = locale === 'ar';

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
