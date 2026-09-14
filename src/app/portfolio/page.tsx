"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

type DemoTemplate = "dental" | "general" | "specialty";

function TemplateCard({
  template,
  index,
  isActive,
  onClick,
}: {
  template: {
    name: string;
    description: string;
    features: string[];
  };
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const { t, isRTL } = useLanguage();
  
  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-emerald-500 to-teal-500",
    "from-purple-500 to-pink-500",
  ];

  const icons = [
    // Dental
    <svg key="dental" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // General Medical
    <svg key="medical" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
    // Specialty
    <svg key="specialty" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
  ];

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
        isActive
          ? "border-primary-500 bg-primary-50 shadow-lg"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
      }`}
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[index]} text-white flex items-center justify-center mb-4`}>
        {icons[index]}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
      <p className="text-gray-600 mb-4 text-sm">{template.description}</p>
      <div className="flex flex-wrap gap-2">
        {template.features.map((feature, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}

function DemoPreview({ activeTemplate }: { activeTemplate: DemoTemplate }) {
  const { isRTL } = useLanguage();

  const previews = {
    dental: <DentalClinicDemo />,
    general: <GeneralClinicDemo />,
    specialty: <SpecialtyClinicDemo />,
  };

  return (
    <div className="bg-gray-100 rounded-2xl p-4 overflow-hidden">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-gray-50 px-4 py-3 border-b flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-500 text-center">
              www.yourclinic.com
            </div>
          </div>
        </div>
        {/* Preview content */}
        <div className="h-[500px] overflow-y-auto">
          {previews[activeTemplate]}
        </div>
      </div>
    </div>
  );
}

function DentalClinicDemo() {
  const { isRTL } = useLanguage();
  
  return (
    <div className="font-sans">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-6 py-12 text-center">
        <h1 className="text-2xl font-bold mb-2">
          {isRTL ? "عيادة الابتسامة المشرقة" : "Bright Smile Dental"}
        </h1>
        <p className="text-blue-100 mb-4 text-sm">
          {isRTL ? "ابتسامتك، اهتمامنا" : "Your smile is our priority"}
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full text-sm font-medium">
          {isRTL ? "احجز موعدك" : "Book Appointment"}
        </button>
      </div>
      
      {/* Services */}
      <div className="px-6 py-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          {isRTL ? "خدماتنا" : "Our Services"}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            isRTL ? "تبييض الأسنان" : "Teeth Whitening",
            isRTL ? "تقويم الأسنان" : "Orthodontics",
            isRTL ? "زراعة الأسنان" : "Dental Implants",
            isRTL ? "علاج الجذور" : "Root Canal",
          ].map((service, i) => (
            <div key={i} className="bg-blue-50 p-3 rounded-lg text-center">
              <span className="text-sm text-gray-700">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-gray-50 px-6 py-8">
        <div className="flex items-center gap-1 justify-center mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 text-sm text-center italic">
          &ldquo;{isRTL ? "خدمة ممتازة وطاقم ودود جداً!" : "Excellent service and very friendly staff!"}&rdquo;
        </p>
        <p className="text-gray-500 text-xs text-center mt-2">- {isRTL ? "أحمد م." : "Ahmed M."}</p>
      </div>

      {/* Contact */}
      <div className="px-6 py-6 text-center">
        <button className="w-full bg-green-500 text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {isRTL ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
        </button>
      </div>
    </div>
  );
}

function GeneralClinicDemo() {
  const { isRTL } = useLanguage();
  
  return (
    <div className="font-sans">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white px-6 py-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold">{isRTL ? "عيادة الرعاية الصحية" : "HealthCare Clinic"}</h1>
            <p className="text-emerald-100 text-sm">{isRTL ? "صحتك أولاً" : "Your health comes first"}</p>
          </div>
        </div>
        <button className="bg-white text-emerald-600 px-6 py-2 rounded-full text-sm font-medium">
          {isRTL ? "احجز استشارة" : "Book Consultation"}
        </button>
      </div>
      
      {/* Doctors */}
      <div className="px-6 py-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {isRTL ? "فريقنا الطبي" : "Our Medical Team"}
        </h2>
        <div className="space-y-3">
          {[
            { name: isRTL ? "د. سارة أحمد" : "Dr. Sarah Ahmed", spec: isRTL ? "طب عام" : "General Medicine" },
            { name: isRTL ? "د. خالد محمد" : "Dr. Khalid Mohammed", spec: isRTL ? "طب أطفال" : "Pediatrics" },
          ].map((doc, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-medium text-sm">{doc.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                <p className="text-gray-500 text-xs">{doc.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-emerald-50 px-6 py-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          {isRTL ? "خدماتنا" : "Services"}
        </h2>
        <ul className="space-y-2 text-sm">
          {[
            isRTL ? "✓ الفحص الدوري" : "✓ Regular Checkups",
            isRTL ? "✓ التطعيمات" : "✓ Vaccinations",
            isRTL ? "✓ التحاليل المخبرية" : "✓ Lab Tests",
            isRTL ? "✓ الطوارئ" : "✓ Emergency Care",
          ].map((service, i) => (
            <li key={i} className="text-gray-700">{service}</li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="px-6 py-6 text-center">
        <p className="text-gray-600 text-sm mb-3">
          {isRTL ? "🚨 خط الطوارئ: متاح 24/7" : "🚨 Emergency Line: Available 24/7"}
        </p>
        <button className="w-full bg-green-500 text-white py-3 rounded-lg text-sm font-medium">
          {isRTL ? "اتصل الآن" : "Call Now"}
        </button>
      </div>
    </div>
  );
}

function SpecialtyClinicDemo() {
  const { isRTL } = useLanguage();
  
  return (
    <div className="font-sans">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white px-6 py-12 text-center">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">
          {isRTL ? "مركز التجميل المتقدم" : "Advanced Aesthetics Center"}
        </h1>
        <p className="text-purple-100 text-sm mb-4">
          {isRTL ? "جمالك، علمنا" : "Your beauty, our science"}
        </p>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full text-sm font-medium">
          {isRTL ? "استشارة مجانية" : "Free Consultation"}
        </button>
      </div>
      
      {/* Treatments */}
      <div className="px-6 py-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          {isRTL ? "علاجاتنا" : "Our Treatments"}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "💉", name: isRTL ? "البوتوكس" : "Botox" },
            { icon: "✨", name: isRTL ? "فيلر" : "Fillers" },
            { icon: "🔬", name: isRTL ? "ليزر" : "Laser" },
            { icon: "💆", name: isRTL ? "تجديد البشرة" : "Skin Renewal" },
          ].map((treatment, i) => (
            <div key={i} className="bg-purple-50 p-4 rounded-xl text-center">
              <span className="text-2xl mb-2 block">{treatment.icon}</span>
              <span className="text-sm text-gray-700 font-medium">{treatment.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Before/After */}
      <div className="bg-gray-50 px-6 py-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 text-center">
          {isRTL ? "قبل وبعد" : "Before & After"}
        </h2>
        <div className="flex gap-2">
          <div className="flex-1 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
            {isRTL ? "قبل" : "Before"}
          </div>
          <div className="flex-1 h-24 bg-purple-200 rounded-lg flex items-center justify-center text-purple-600 text-xs">
            {isRTL ? "بعد" : "After"}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="px-6 py-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          {isRTL ? "أسئلة شائعة" : "FAQ"}
        </h2>
        <div className="space-y-2">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="font-medium text-gray-900 text-sm">
              {isRTL ? "هل العلاج آمن؟" : "Is the treatment safe?"}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {isRTL ? "نعم، جميع إجراءاتنا معتمدة ومجربة" : "Yes, all our procedures are certified and tested"}
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="px-6 py-6">
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg text-sm font-medium">
          {isRTL ? "احجز استشارتك المجانية" : "Book Free Consultation"}
        </button>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const { t, isRTL } = useLanguage();
  const [activeTemplate, setActiveTemplate] = useState<DemoTemplate>("dental");

  const templateKeys: DemoTemplate[] = ["dental", "general", "specialty"];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.portfolio.title}
          </h1>
          <p className="text-lg text-gray-600">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Template cards */}
          <div className="space-y-4">
            {t.portfolio.templates.map((template, index) => (
              <TemplateCard
                key={index}
                template={template}
                index={index}
                isActive={templateKeys[index] === activeTemplate}
                onClick={() => setActiveTemplate(templateKeys[index])}
              />
            ))}
          </div>

          {/* Preview */}
          <div className="lg:sticky lg:top-24">
            <DemoPreview activeTemplate={activeTemplate} />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            {isRTL 
              ? "أعجبك ما رأيت؟ نصمم موقعاً مخصصاً لعملك"
              : "Like what you see? We'll create a custom site for your business"}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
          >
            {isRTL ? "ابدأ الآن" : "Get Started"}
          </Link>
        </div>
      </div>
    </div>
  );
}
