export interface ClientService {
  en: string;
  ar: string;
}

export interface ClientProfile {
  id: string;
  slug: string;
  businessName: {
    en: string;
    ar: string;
  };
  category: {
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
  about: {
    en: string;
    ar: string;
  };
  services: ClientService[];
  websiteColor: string;
  accentColor: string;
  whatsappPlaceholder: string;
}

export const demoClients: ClientProfile[] = [
  {
    id: 'demo-dental',
    slug: 'demo-dental-care-kuwait',
    businessName: {
      en: 'Demo Dental Care Kuwait',
      ar: 'عيادة ديمو لطب الأسنان الكويت',
    },
    category: {
      en: 'Dental Clinic',
      ar: 'عيادة أسنان',
    },
    city: {
      en: 'Kuwait City',
      ar: 'مدينة الكويت',
    },
    tagline: {
      en: 'Your smile, our priority',
      ar: 'ابتسامتك، أولويتنا',
    },
    about: {
      en: 'Demo Dental Care Kuwait is a premier dental clinic offering comprehensive dental services with state-of-the-art technology. Our team of experienced dentists is committed to providing gentle, personalized care in a comfortable environment.',
      ar: 'عيادة ديمو لطب الأسنان الكويت هي عيادة أسنان رائدة تقدم خدمات طب أسنان شاملة بأحدث التقنيات. فريقنا من أطباء الأسنان ذوي الخبرة ملتزم بتقديم رعاية لطيفة ومخصصة في بيئة مريحة.',
    },
    services: [
      { en: 'General Dentistry', ar: 'طب الأسنان العام' },
      { en: 'Teeth Whitening', ar: 'تبييض الأسنان' },
      { en: 'Dental Implants', ar: 'زراعة الأسنان' },
      { en: 'Orthodontics', ar: 'تقويم الأسنان' },
      { en: 'Pediatric Dentistry', ar: 'طب أسنان الأطفال' },
    ],
    websiteColor: '#0ea5e9',
    accentColor: '#0284c7',
    whatsappPlaceholder: '96512345678',
  },
  {
    id: 'demo-medical',
    slug: 'demo-family-medical-center',
    businessName: {
      en: 'Demo Family Medical Center',
      ar: 'مركز ديمو الطبي للعائلة',
    },
    category: {
      en: 'General Medical Clinic',
      ar: 'عيادة طبية عامة',
    },
    city: {
      en: 'Salmiya',
      ar: 'السالمية',
    },
    tagline: {
      en: 'Caring for your family\'s health',
      ar: 'نعتني بصحة عائلتك',
    },
    about: {
      en: 'Demo Family Medical Center provides comprehensive healthcare services for the entire family. From routine checkups to specialized consultations, we offer personalized medical care with a focus on preventive health and wellness.',
      ar: 'يقدم مركز ديمو الطبي للعائلة خدمات رعاية صحية شاملة لجميع أفراد الأسرة. من الفحوصات الروتينية إلى الاستشارات المتخصصة، نقدم رعاية طبية مخصصة مع التركيز على الصحة الوقائية والعافية.',
    },
    services: [
      { en: 'General Consultations', ar: 'استشارات عامة' },
      { en: 'Pediatric Care', ar: 'رعاية الأطفال' },
      { en: 'Women\'s Health', ar: 'صحة المرأة' },
      { en: 'Laboratory Services', ar: 'خدمات المختبر' },
      { en: 'Vaccination', ar: 'التطعيمات' },
    ],
    websiteColor: '#10b981',
    accentColor: '#059669',
    whatsappPlaceholder: '96512345679',
  },
  {
    id: 'demo-derma',
    slug: 'demo-skin-wellness-clinic',
    businessName: {
      en: 'Demo Skin Wellness Clinic',
      ar: 'عيادة ديمو للعناية بالبشرة',
    },
    category: {
      en: 'Dermatology Specialty',
      ar: 'تخصص جلدية',
    },
    city: {
      en: 'Hawalli',
      ar: 'حولي',
    },
    tagline: {
      en: 'Healthy skin, confident you',
      ar: 'بشرة صحية، ثقة أكبر',
    },
    about: {
      en: 'Demo Skin Wellness Clinic specializes in comprehensive dermatological care and aesthetic treatments. Our board-certified dermatologists use the latest techniques to address skin conditions and help you achieve radiant, healthy skin.',
      ar: 'تتخصص عيادة ديمو للعناية بالبشرة في الرعاية الجلدية الشاملة والعلاجات التجميلية. أطباء الجلدية المعتمدون لدينا يستخدمون أحدث التقنيات لعلاج الحالات الجلدية ومساعدتك على الحصول على بشرة مشرقة وصحية.',
    },
    services: [
      { en: 'Acne Treatment', ar: 'علاج حب الشباب' },
      { en: 'Laser Therapy', ar: 'العلاج بالليزر' },
      { en: 'Anti-Aging Treatments', ar: 'علاجات مكافحة الشيخوخة' },
      { en: 'Skin Cancer Screening', ar: 'فحص سرطان الجلد' },
      { en: 'Cosmetic Dermatology', ar: 'الجلدية التجميلية' },
    ],
    websiteColor: '#f472b6',
    accentColor: '#ec4899',
    whatsappPlaceholder: '96512345680',
  },
];

export function getClientBySlug(slug: string): ClientProfile | undefined {
  return demoClients.find(client => client.slug === slug);
}

export function getAllClientSlugs(): string[] {
  return demoClients.map(client => client.slug);
}
