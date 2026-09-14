export type Locale = 'en' | 'ar';

export const defaultLocale: Locale = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    hero: {
      title: 'Professional Websites for Gulf Businesses',
      subtitle: 'Modern, bilingual websites for clinics and small businesses in Kuwait',
      cta: 'View Our Work',
      contact: 'Contact Us',
    },
    pricing: {
      title: 'Simple Pricing',
      subtitle: 'Everything you need to establish your online presence',
      price: '$25',
      period: '/month',
      features: [
        'Professional website design',
        'Arabic & English bilingual support',
        'Mobile responsive design',
        'WhatsApp integration',
        'Basic SEO optimization',
        'Ongoing support',
      ],
      cta: 'Get Started',
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Websites we\'ve built for businesses in the Gulf region',
      viewProfile: 'View Profile',
      allClients: 'All Clients',
    },
    profile: {
      about: 'About',
      services: 'Services',
      websitePreview: 'Website Preview',
      contactBusiness: 'Contact This Business',
      contactNote: 'This is a demo profile. For inquiries about getting your own website, contact us.',
      backToPortfolio: 'Back to Portfolio',
    },
    contact: {
      title: 'Get Your Website Today',
      subtitle: 'Contact us via WhatsApp or email to get started',
      whatsapp: 'Chat on WhatsApp',
      email: 'Send Email',
    },
    footer: {
      rights: 'All rights reserved',
      poweredBy: 'Built with care in Kuwait',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      portfolio: 'أعمالنا',
      contact: 'تواصل معنا',
    },
    hero: {
      title: 'مواقع احترافية للشركات الخليجية',
      subtitle: 'مواقع حديثة ثنائية اللغة للعيادات والأعمال الصغيرة في الكويت',
      cta: 'شاهد أعمالنا',
      contact: 'تواصل معنا',
    },
    pricing: {
      title: 'أسعار بسيطة',
      subtitle: 'كل ما تحتاجه لتأسيس تواجدك الإلكتروني',
      price: '$25',
      period: '/شهرياً',
      features: [
        'تصميم موقع احترافي',
        'دعم ثنائي اللغة عربي وإنجليزي',
        'تصميم متجاوب مع الجوال',
        'تكامل واتساب',
        'تحسين محركات البحث الأساسي',
        'دعم مستمر',
      ],
      cta: 'ابدأ الآن',
    },
    portfolio: {
      title: 'أعمالنا',
      subtitle: 'مواقع قمنا ببنائها لشركات في منطقة الخليج',
      viewProfile: 'عرض الملف',
      allClients: 'جميع العملاء',
    },
    profile: {
      about: 'نبذة عنا',
      services: 'خدماتنا',
      websitePreview: 'معاينة الموقع',
      contactBusiness: 'تواصل مع هذا النشاط',
      contactNote: 'هذا ملف تجريبي. للاستفسار عن الحصول على موقعك الخاص، تواصل معنا.',
      backToPortfolio: 'العودة للأعمال',
    },
    contact: {
      title: 'احصل على موقعك اليوم',
      subtitle: 'تواصل معنا عبر واتساب أو البريد الإلكتروني للبدء',
      whatsapp: 'دردشة واتساب',
      email: 'إرسال بريد',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة',
      poweredBy: 'صنع بعناية في الكويت',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
