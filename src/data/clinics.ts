export interface ClinicService {
  nameEn: string;
  nameAr: string;
}

export interface ClinicDemo {
  slug: string;
  nameEn: string;
  nameAr: string;
  aboutEn: string;
  aboutAr: string;
  services: ClinicService[];
  mood: 'modern-minimal' | 'warm-family' | 'clinical-trust' | 'vibrant-pediatric';
  primaryColor: string;
  accentColor: string;
  publicIg?: string;
}

export const clinicDemos: ClinicDemo[] = [
  {
    slug: 'family-care-demo',
    nameEn: 'Family Care Clinic',
    nameAr: 'عيادة رعاية العائلة',
    aboutEn: 'A trusted neighborhood family practice providing comprehensive healthcare for all ages. We focus on preventive care, chronic disease management, and building lasting relationships with our patients.',
    aboutAr: 'عيادة عائلية موثوقة في الحي توفر رعاية صحية شاملة لجميع الأعمار. نركز على الرعاية الوقائية وإدارة الأمراض المزمنة وبناء علاقات دائمة مع مرضانا.',
    services: [
      { nameEn: 'General Check-ups', nameAr: 'الفحوصات العامة' },
      { nameEn: 'Vaccinations', nameAr: 'التطعيمات' },
      { nameEn: 'Chronic Disease Management', nameAr: 'إدارة الأمراض المزمنة' },
      { nameEn: 'Pediatric Care', nameAr: 'رعاية الأطفال' },
      { nameEn: 'Women\'s Health', nameAr: 'صحة المرأة' }
    ],
    mood: 'warm-family',
    primaryColor: '#0d9488',
    accentColor: '#14b8a6'
  },
  {
    slug: 'specialist-center-demo',
    nameEn: 'Modern Specialist Center',
    nameAr: 'مركز التخصصات الحديث',
    aboutEn: 'A state-of-the-art multi-specialty medical center offering advanced diagnostic and treatment services. Our team of experienced specialists uses the latest medical technology to deliver exceptional patient care.',
    aboutAr: 'مركز طبي متعدد التخصصات على أحدث طراز يقدم خدمات تشخيصية وعلاجية متقدمة. يستخدم فريقنا من المتخصصين ذوي الخبرة أحدث التقنيات الطبية لتقديم رعاية استثنائية للمرضى.',
    services: [
      { nameEn: 'Dermatology', nameAr: 'الأمراض الجلدية' },
      { nameEn: 'Internal Medicine', nameAr: 'الطب الباطني' },
      { nameEn: 'Cardiology', nameAr: 'أمراض القلب' },
      { nameEn: 'Laboratory Services', nameAr: 'خدمات المختبر' }
    ],
    mood: 'modern-minimal',
    primaryColor: '#0891b2',
    accentColor: '#06b6d4'
  },
  {
    slug: 'dental-smile-demo',
    nameEn: 'Bright Smile Dental',
    nameAr: 'عيادة الابتسامة المشرقة لطب الأسنان',
    aboutEn: 'Creating beautiful, healthy smiles for the whole family. From routine cleanings to cosmetic dentistry, we provide gentle, comprehensive dental care in a comfortable environment.',
    aboutAr: 'نصنع ابتسامات جميلة وصحية للعائلة بأكملها. من التنظيف الروتيني إلى طب الأسنان التجميلي، نقدم رعاية أسنان شاملة ولطيفة في بيئة مريحة.',
    services: [
      { nameEn: 'Dental Check-ups & Cleaning', nameAr: 'فحوصات وتنظيف الأسنان' },
      { nameEn: 'Teeth Whitening', nameAr: 'تبييض الأسنان' },
      { nameEn: 'Orthodontics', nameAr: 'تقويم الأسنان' },
      { nameEn: 'Dental Implants', nameAr: 'زراعة الأسنان' },
      { nameEn: 'Pediatric Dentistry', nameAr: 'طب أسنان الأطفال' }
    ],
    mood: 'clinical-trust',
    primaryColor: '#0d9488',
    accentColor: '#5eead4',
    publicIg: 'sample_dental_inspiration'
  }
];

export function getClinicBySlug(slug: string): ClinicDemo | undefined {
  return clinicDemos.find(clinic => clinic.slug === slug);
}

export function getAllClinicSlugs(): string[] {
  return clinicDemos.map(clinic => clinic.slug);
}
