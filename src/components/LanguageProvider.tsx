"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Locale, defaultLocale, getTranslations, isRTL } from "@/lib/i18n";

type TranslationType = ReturnType<typeof getTranslations>;

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
    document.documentElement.dir = isRTL(newLocale) ? "rtl" : "ltr";
  }, []);

  const t = getTranslations(locale);
  const rtl = isRTL(locale);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRTL: rtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
