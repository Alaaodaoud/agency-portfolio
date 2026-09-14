export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      tagline: "Professional Websites for Your Business",
      headline: "Launch Your Business Online",
      subheadline: "for just $25/month",
      description: "We create modern, mobile-friendly websites for clinics and local businesses. Professional design, fast delivery, and ongoing WhatsApp support included.",
      cta: "Get Started Today",
      ctaSecondary: "View Our Work",
    },
    features: {
      title: "Everything You Need",
      subtitle: "Launch your professional website with confidence",
      items: [
        {
          title: "Modern Design",
          description: "Clean, professional layouts that build trust with your customers",
        },
        {
          title: "Mobile-First",
          description: "Your site looks perfect on phones, tablets, and computers",
        },
        {
          title: "Fast & Secure",
          description: "Lightning-fast loading times with built-in security",
        },
        {
          title: "WhatsApp Support",
          description: "Direct support via WhatsApp whenever you need help",
        },
        {
          title: "Global Reach",
          description: "Serving businesses in Kuwait and worldwide",
        },
        {
          title: "No Hidden Fees",
          description: "One simple price with everything included",
        },
      ],
    },
    cta: {
      title: "Ready to Grow Your Business?",
      description: "Join hundreds of satisfied clients who trust us with their online presence.",
      button: "Contact Us on WhatsApp",
    },
    portfolio: {
      title: "Our Portfolio",
      subtitle: "Sample templates designed for healthcare and local businesses",
      viewDemo: "View Demo",
      templates: [
        {
          name: "Dental Clinic",
          description: "Modern, clean design perfect for dental practices. Features appointment booking, services showcase, and patient testimonials.",
          features: ["Online Booking", "Services Gallery", "Patient Reviews", "Contact Form"],
        },
        {
          name: "General Medical Clinic",
          description: "Professional template for family doctors and general practitioners. Emphasizes trust, expertise, and patient care.",
          features: ["Doctor Profiles", "Services List", "Location Map", "Emergency Contact"],
        },
        {
          name: "Specialty Clinic",
          description: "Elegant design for specialized medical practices. Highlights expertise and advanced treatments.",
          features: ["Treatment Showcase", "Before/After Gallery", "Team Section", "FAQ Section"],
        },
      ],
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "One plan. Everything included. No surprises.",
      price: "$25",
      period: "/month",
      description: "Professional website for your business",
      features: [
        "Custom professional design",
        "Mobile-responsive layout",
        "Fast hosting included",
        "SSL security certificate",
        "Basic SEO optimization",
        "WhatsApp support",
        "Monthly updates (up to 2)",
        "Domain setup assistance",
      ],
      cta: "Get Started",
      guarantee: "No long-term contracts. Cancel anytime.",
      setupNote: "One-time setup fee may apply for custom requirements",
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Ready to get your business online? We're here to help.",
      whatsapp: "Chat on WhatsApp",
      whatsappDescription: "Quick response • Available daily • Arabic & English",
      email: "Email Us",
      emailAddress: "hello@alaawebagency.com",
      location: "Based in Kuwait • Serving clients worldwide",
    },
    footer: {
      tagline: "Professional websites for growing businesses",
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      portfolio: "أعمالنا",
      pricing: "الأسعار",
      contact: "تواصل معنا",
    },
    hero: {
      tagline: "مواقع احترافية لأعمالك",
      headline: "أطلق عملك على الإنترنت",
      subheadline: "بـ 25$ شهرياً فقط",
      description: "نصمم مواقع عصرية ومتجاوبة للعيادات والأعمال المحلية. تصميم احترافي، تسليم سريع، ودعم مستمر عبر واتساب.",
      cta: "ابدأ اليوم",
      ctaSecondary: "شاهد أعمالنا",
    },
    features: {
      title: "كل ما تحتاجه",
      subtitle: "أطلق موقعك الاحترافي بثقة",
      items: [
        {
          title: "تصميم عصري",
          description: "تصاميم أنيقة واحترافية تبني الثقة مع عملائك",
        },
        {
          title: "متجاوب مع الجوال",
          description: "موقعك يظهر بشكل مثالي على الهواتف والأجهزة اللوحية والحاسوب",
        },
        {
          title: "سريع وآمن",
          description: "سرعة تحميل عالية مع حماية مدمجة",
        },
        {
          title: "دعم واتساب",
          description: "دعم مباشر عبر واتساب متى احتجت المساعدة",
        },
        {
          title: "تغطية عالمية",
          description: "نخدم الأعمال في الكويت وحول العالم",
        },
        {
          title: "بدون رسوم خفية",
          description: "سعر واحد شامل لكل شيء",
        },
      ],
    },
    cta: {
      title: "جاهز لتنمية أعمالك؟",
      description: "انضم إلى مئات العملاء الراضين الذين يثقون بنا لتواجدهم الإلكتروني.",
      button: "تواصل معنا عبر واتساب",
    },
    portfolio: {
      title: "أعمالنا",
      subtitle: "نماذج مصممة للقطاع الصحي والأعمال المحلية",
      viewDemo: "عرض النموذج",
      templates: [
        {
          name: "عيادة أسنان",
          description: "تصميم عصري وأنيق مثالي لعيادات الأسنان. يتضمن حجز المواعيد، عرض الخدمات، وآراء المرضى.",
          features: ["حجز إلكتروني", "معرض الخدمات", "تقييمات المرضى", "نموذج التواصل"],
        },
        {
          name: "عيادة طبية عامة",
          description: "قالب احترافي لأطباء الأسرة والطب العام. يركز على الثقة والخبرة والرعاية.",
          features: ["ملفات الأطباء", "قائمة الخدمات", "خريطة الموقع", "اتصال الطوارئ"],
        },
        {
          name: "عيادة تخصصية",
          description: "تصميم أنيق للعيادات التخصصية. يبرز الخبرة والعلاجات المتقدمة.",
          features: ["عرض العلاجات", "معرض قبل/بعد", "قسم الفريق", "الأسئلة الشائعة"],
        },
      ],
    },
    pricing: {
      title: "أسعار واضحة وبسيطة",
      subtitle: "خطة واحدة. كل شيء مشمول. بدون مفاجآت.",
      price: "25$",
      period: "/شهرياً",
      description: "موقع احترافي لعملك",
      features: [
        "تصميم احترافي مخصص",
        "تصميم متجاوب مع الجوال",
        "استضافة سريعة مشمولة",
        "شهادة أمان SSL",
        "تحسين محركات البحث الأساسي",
        "دعم واتساب",
        "تحديثات شهرية (حتى 2)",
        "مساعدة في إعداد النطاق",
      ],
      cta: "ابدأ الآن",
      guarantee: "بدون عقود طويلة. يمكنك الإلغاء في أي وقت.",
      setupNote: "قد يتطلب رسوم إعداد لمرة واحدة للمتطلبات الخاصة",
    },
    contact: {
      title: "لنتحدث",
      subtitle: "جاهز لإطلاق عملك على الإنترنت؟ نحن هنا للمساعدة.",
      whatsapp: "تواصل عبر واتساب",
      whatsappDescription: "رد سريع • متاح يومياً • عربي وإنجليزي",
      email: "راسلنا",
      emailAddress: "hello@alaawebagency.com",
      location: "مقرنا في الكويت • نخدم عملاء حول العالم",
    },
    footer: {
      tagline: "مواقع احترافية للأعمال النامية",
      rights: "جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function isRTL(locale: Locale): boolean {
  return locale === "ar";
}
