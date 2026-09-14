import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { defaultLocale, locales, type Locale } from './config';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headersList = await headers();
  
  let locale: Locale = defaultLocale;
  
  const cookieLocale = cookieStore.get('locale')?.value as Locale | undefined;
  if (cookieLocale && locales.includes(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const acceptLanguage = headersList.get('accept-language');
    if (acceptLanguage?.includes('ar')) {
      locale = 'ar';
    }
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
