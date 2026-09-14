import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { clinicDemos } from "@/data/clinics";

export default async function PortfolioPage() {
  const t = await getTranslations("portfolio");
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
            <p className="text-xl text-teal-100">{t("subtitle")}</p>
          </div>
        </section>

        {/* Demo Note */}
        <section className="bg-amber-50 border-b border-amber-200 py-6 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-amber-800">{t("demoNote")}</p>
            </div>
          </div>
        </section>

        {/* Demo Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinicDemos.map((clinic) => (
                <div
                  key={clinic.slug}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Card Header with Clinic Color */}
                  <div
                    className="h-32 relative"
                    style={{ backgroundColor: clinic.primaryColor }}
                  >
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                        {t("fictional")}
                      </span>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                      <div
                        className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md"
                        style={{ borderColor: clinic.primaryColor, borderWidth: '3px' }}
                      >
                        <svg className="w-8 h-8" style={{ color: clinic.primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-12 px-6 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                      {isArabic ? clinic.nameAr : clinic.nameEn}
                    </h3>
                    <p className="text-gray-600 text-sm text-center mb-4 line-clamp-2">
                      {isArabic ? clinic.aboutAr : clinic.aboutEn}
                    </p>

                    {/* Services Preview */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                      {clinic.services.slice(0, 3).map((service, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: `${clinic.primaryColor}15`,
                            color: clinic.primaryColor,
                          }}
                        >
                          {isArabic ? service.nameAr : service.nameEn}
                        </span>
                      ))}
                      {clinic.services.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{clinic.services.length - 3}
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/demo/${clinic.slug}`}
                      className="block w-full text-center py-3 px-6 rounded-full font-semibold text-white transition-colors"
                      style={{ backgroundColor: clinic.primaryColor }}
                    >
                      {t("viewDemoButton")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
