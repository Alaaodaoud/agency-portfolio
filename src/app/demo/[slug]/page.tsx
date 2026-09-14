import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import { getClinicBySlug, getAllClinicSlugs } from "@/data/clinics";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { WhatsAppProfileCard } from "@/components/WhatsAppProfileCard";
import { LanguageToggle } from "@/components/LanguageToggle";

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllClinicSlugs().map((slug) => ({ slug }));
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    notFound();
  }

  const tCommon = await getTranslations("common");
  const tProfileCard = await getTranslations("profileCard");
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const name = isArabic ? clinic.nameAr : clinic.nameEn;
  const about = isArabic ? clinic.aboutAr : clinic.aboutEn;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Persistent Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Demo Header */}
      <header
        className="py-4 px-4 border-b"
        style={{ backgroundColor: clinic.primaryColor }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/portfolio"
            className="text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors"
          >
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {isArabic ? "العودة للمعرض" : "Back to Portfolio"}
          </Link>
          <LanguageToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div
            className="rounded-3xl overflow-hidden mb-8"
            style={{ backgroundColor: clinic.primaryColor }}
          >
            <div className="py-16 px-8 text-center text-white">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{name}</h1>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">{about}</p>
            </div>
          </div>

          {/* Services Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {tCommon("ourServices")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clinic.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${clinic.primaryColor}15` }}
                  >
                    <svg
                      className="w-5 h-5"
                      style={{ color: clinic.primaryColor }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {isArabic ? service.nameAr : service.nameEn}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* WhatsApp Profile Card */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {tCommon("contactUs")}
            </h2>
            <WhatsAppProfileCard clinic={clinic} />
          </section>

          {/* Mood/Instagram Note */}
          {clinic.publicIg && (
            <div className="text-center text-sm text-gray-400">
              <p>
                {tProfileCard("moodInspiration")}: @{clinic.publicIg}
              </p>
              <p className="text-xs mt-1">
                {isArabic
                  ? "(ملاحظة: هذا للإلهام البصري فقط — هذا ليس الحساب الرسمي للعيادة)"
                  : "(Note: This is for visual mood inspiration only — this is not the clinic's official account)"}
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Compact Footer Disclaimer */}
      <footer className="py-4 px-4 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          <p className="font-medium text-amber-700 mb-1">
            ⚠️ {isArabic ? "نموذج مقترح" : "Proposed Demo"}
          </p>
          <p>
            {isArabic
              ? "هذا نموذج لأغراض العرض فقط. ليس موقعاً رسمياً."
              : "This is a demo for pitch purposes only. Not an official website."}
          </p>
          <Link
            href="/portfolio"
            className="inline-block mt-3 text-teal-600 hover:text-teal-700 font-medium"
          >
            {isArabic ? "← عرض المزيد من النماذج" : "← View More Demos"}
          </Link>
        </div>
      </footer>
    </div>
  );
}
