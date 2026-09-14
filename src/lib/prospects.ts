/**
 * Prospect Demo Data Structure
 * 
 * This file defines the structure for personalized demo sites created for
 * prospective clinic clients. Each prospect demo is generated from publicly
 * available information (Google Maps, Instagram when linked).
 * 
 * IMPORTANT: These are DEMO PREVIEWS only, not official clinic websites.
 * Always clearly label as "Demo preview / اقتراح موقع"
 */

export interface ProspectLookNotes {
  primaryColor: string;
  accentColor: string;
  style: 'modern' | 'classic' | 'minimal' | 'warm' | 'clinical';
  instagramInspiration?: string;
  notes: {
    en: string;
    ar: string;
  };
}

export interface ProspectDemo {
  id: string;
  slug: string;
  businessName: {
    en: string;
    ar: string;
  };
  niche: {
    en: string;
    ar: string;
  };
  city: {
    en: string;
    ar: string;
  };
  tagline: {
    en: string;
    ar: string;
  };
  suggestedServices: Array<{
    en: string;
    ar: string;
  }>;
  lookNotes: ProspectLookNotes;
  googleMapsRef?: string;
  instagramHandle?: string;
  createdFor: string;
  createdAt: string;
}

/**
 * Sample prospect demos for fictional clinics.
 * These serve as examples of how to structure real prospect data.
 * 
 * DO NOT use real clinic names without permission.
 * These are clearly fictional examples for demonstration.
 */
export const sampleProspects: ProspectDemo[] = [
  {
    id: 'prospect-smile-dental',
    slug: 'prospect-smile-dental-hawalli',
    businessName: {
      en: 'Smile Dental Studio',
      ar: 'استوديو سمايل لطب الأسنان',
    },
    niche: {
      en: 'Cosmetic Dentistry',
      ar: 'طب الأسنان التجميلي',
    },
    city: {
      en: 'Hawalli',
      ar: 'حولي',
    },
    tagline: {
      en: 'Your perfect smile starts here',
      ar: 'ابتسامتك المثالية تبدأ هنا',
    },
    suggestedServices: [
      { en: 'Teeth Whitening', ar: 'تبييض الأسنان' },
      { en: 'Veneers', ar: 'قشور الأسنان' },
      { en: 'Smile Makeover', ar: 'تجميل الابتسامة' },
      { en: 'Dental Crowns', ar: 'تيجان الأسنان' },
    ],
    lookNotes: {
      primaryColor: '#6366f1',
      accentColor: '#4f46e5',
      style: 'modern',
      instagramInspiration: '@example_dental',
      notes: {
        en: 'Modern, clean aesthetic with soft purple tones. Instagram shows bright, high-end clinic interior with contemporary furniture. Focus on before/after smile transformations.',
        ar: 'جمالية حديثة ونظيفة بدرجات بنفسجية ناعمة. الإنستغرام يُظهر ديكور عيادة راقي ومعاصر. التركيز على تحولات الابتسامة قبل وبعد.',
      },
    },
    googleMapsRef: 'Example Google Maps listing',
    instagramHandle: '@example_dental',
    createdFor: 'Outreach demo',
    createdAt: '2024-01-15',
  },
  {
    id: 'prospect-wellness-medical',
    slug: 'prospect-wellness-medical-salmiya',
    businessName: {
      en: 'Wellness Family Clinic',
      ar: 'عيادة ويلنس العائلية',
    },
    niche: {
      en: 'Family Medicine',
      ar: 'طب الأسرة',
    },
    city: {
      en: 'Salmiya',
      ar: 'السالمية',
    },
    tagline: {
      en: 'Caring for your whole family',
      ar: 'نعتني بعائلتك بأكملها',
    },
    suggestedServices: [
      { en: 'General Checkups', ar: 'الفحوصات العامة' },
      { en: 'Pediatric Care', ar: 'رعاية الأطفال' },
      { en: 'Vaccinations', ar: 'التطعيمات' },
      { en: 'Health Screenings', ar: 'الفحوصات الصحية' },
      { en: 'Chronic Disease Management', ar: 'إدارة الأمراض المزمنة' },
    ],
    lookNotes: {
      primaryColor: '#14b8a6',
      accentColor: '#0d9488',
      style: 'warm',
      notes: {
        en: 'Warm, welcoming teal tones. Family-friendly imagery. Google Maps shows accessible location with parking. Emphasize trust and long-term care relationships.',
        ar: 'درجات تركوازية دافئة ومرحبة. صور مناسبة للعائلات. موقع يسهل الوصول إليه مع مواقف سيارات. التأكيد على الثقة والعلاقات طويلة الأمد.',
      },
    },
    googleMapsRef: 'Example Google Maps listing',
    createdFor: 'Outreach demo',
    createdAt: '2024-01-16',
  },
  {
    id: 'prospect-glow-derma',
    slug: 'prospect-glow-derma-kuwait-city',
    businessName: {
      en: 'Glow Dermatology Center',
      ar: 'مركز جلو للجلدية',
    },
    niche: {
      en: 'Dermatology & Aesthetics',
      ar: 'الجلدية والتجميل',
    },
    city: {
      en: 'Kuwait City',
      ar: 'مدينة الكويت',
    },
    tagline: {
      en: 'Reveal your natural radiance',
      ar: 'اكتشفي إشراقتك الطبيعية',
    },
    suggestedServices: [
      { en: 'Laser Treatments', ar: 'علاجات الليزر' },
      { en: 'Botox & Fillers', ar: 'البوتوكس والفيلر' },
      { en: 'Acne Treatment', ar: 'علاج حب الشباب' },
      { en: 'Skin Rejuvenation', ar: 'تجديد البشرة' },
    ],
    lookNotes: {
      primaryColor: '#ec4899',
      accentColor: '#db2777',
      style: 'minimal',
      instagramInspiration: '@example_derma',
      notes: {
        en: 'Elegant pink/rose gold aesthetic. Instagram shows high-quality skin care results, clean treatment rooms. Luxury medical spa vibe. Target audience: women 25-45.',
        ar: 'جمالية أنيقة بألوان وردية وذهبية. الإنستغرام يُظهر نتائج عناية بالبشرة عالية الجودة وغرف علاج نظيفة. أجواء سبا طبي فاخر. الفئة المستهدفة: نساء 25-45.',
      },
    },
    googleMapsRef: 'Example Google Maps listing',
    instagramHandle: '@example_derma',
    createdFor: 'Outreach demo',
    createdAt: '2024-01-17',
  },
];

export function getProspectBySlug(slug: string): ProspectDemo | undefined {
  return sampleProspects.find(prospect => prospect.slug === slug);
}

export function getAllProspectSlugs(): string[] {
  return sampleProspects.map(prospect => prospect.slug);
}

/**
 * Template for creating a new prospect demo.
 * Copy this and fill in the details from Google Maps / Instagram research.
 */
export const prospectTemplate: ProspectDemo = {
  id: 'prospect-[unique-id]',
  slug: 'prospect-[clinic-name]-[city]',
  businessName: {
    en: '[Clinic Name in English]',
    ar: '[اسم العيادة بالعربية]',
  },
  niche: {
    en: '[Specialty - e.g., Dental, Dermatology, General Medicine]',
    ar: '[التخصص بالعربية]',
  },
  city: {
    en: '[City Name]',
    ar: '[اسم المدينة]',
  },
  tagline: {
    en: '[Short catchy tagline based on their branding]',
    ar: '[شعار قصير وجذاب]',
  },
  suggestedServices: [
    { en: '[Service 1 from Google Maps/IG]', ar: '[الخدمة 1]' },
    { en: '[Service 2]', ar: '[الخدمة 2]' },
    { en: '[Service 3]', ar: '[الخدمة 3]' },
  ],
  lookNotes: {
    primaryColor: '#[hex color from their IG/branding]',
    accentColor: '#[darker shade]',
    style: 'modern', // or 'classic', 'minimal', 'warm', 'clinical'
    instagramInspiration: '@[their_instagram_handle]',
    notes: {
      en: '[Describe their visual style, clinic vibe, target audience based on public info]',
      ar: '[وصف الأسلوب البصري والأجواء والفئة المستهدفة]',
    },
  },
  googleMapsRef: '[Google Maps URL or description]',
  instagramHandle: '@[handle if available]',
  createdFor: '[Lead name or outreach context]',
  createdAt: '[YYYY-MM-DD]',
};
