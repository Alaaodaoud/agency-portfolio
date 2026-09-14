'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { ProspectDemo } from '@/lib/prospects';
import { DemoBanner } from '@/components/DemoBanner';
import { ClinicFeatures } from '@/components/ClinicFeatures';
import { AGENCY_CONTACT } from '@/lib/constants';

interface ProspectDemoContentProps {
  prospect: ProspectDemo;
}

export function ProspectDemoContent({ prospect }: ProspectDemoContentProps) {
  const { t, locale, isRTL } = useLanguage();

  return (
    <div>
      {/* Prominent Demo Banner */}
      <DemoBanner />

      <div className="py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-8 transition-colors"
          >
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.demo.backToDemo}
          </Link>

          {/* Inline Demo Notice */}
          <div className="mb-8">
            <DemoBanner variant="inline" />
          </div>

          {/* Client Header */}
          <div
            className="rounded-2xl overflow-hidden mb-8"
            style={{ backgroundColor: prospect.lookNotes.primaryColor }}
          >
            <div className="relative py-12 sm:py-16 px-6 sm:px-10">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              
              {/* Demo Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-400 text-amber-900 rounded-full text-sm font-bold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {isRTL ? 'اقتراح موقع' : 'DEMO'}
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium w-fit">
                    {prospect.niche[locale]}
                  </span>
                  <span className="text-white/80 text-sm">
                    {prospect.city[locale]}
                  </span>
                  <span className="px-2 py-0.5 bg-black/20 rounded text-white text-xs capitalize">
                    {prospect.lookNotes.style} {isRTL ? 'تصميم' : 'style'}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {prospect.businessName[locale]}
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  {prospect.tagline[locale]}
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Design Notes Section */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${prospect.lookNotes.primaryColor}20` }}
                  >
                    <svg className="w-4 h-4" style={{ color: prospect.lookNotes.primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                  </div>
                  {t.demo.lookNotes}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t.demo.lookNotesDesc}</p>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {prospect.lookNotes.notes[locale]}
                  </p>
                </div>

                {/* Color Palette */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    {isRTL ? 'لوحة الألوان المقترحة' : 'Suggested Color Palette'}
                  </h3>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-10 h-10 rounded-lg shadow-sm"
                        style={{ backgroundColor: prospect.lookNotes.primaryColor }}
                      />
                      <span className="text-xs text-gray-500">{prospect.lookNotes.primaryColor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-10 h-10 rounded-lg shadow-sm"
                        style={{ backgroundColor: prospect.lookNotes.accentColor }}
                      />
                      <span className="text-xs text-gray-500">{prospect.lookNotes.accentColor}</span>
                    </div>
                  </div>
                </div>

                {/* Source Info */}
                {(prospect.instagramHandle || prospect.googleMapsRef) && (
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isRTL ? 'مصادر البحث:' : 'Research sources:'}
                      {prospect.googleMapsRef && <span className="mx-2">📍 Google Maps</span>}
                      {prospect.instagramHandle && <span>📸 Instagram {prospect.instagramHandle}</span>}
                    </p>
                  </div>
                )}
              </section>

              {/* Services Section */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${prospect.lookNotes.primaryColor}20` }}
                  >
                    <svg className="w-4 h-4" style={{ color: prospect.lookNotes.primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {t.demo.suggestedServices}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {prospect.suggestedServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${prospect.lookNotes.primaryColor}15` }}
                      >
                        <svg className="w-5 h-5" style={{ color: prospect.lookNotes.primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {service[locale]}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Website Preview Section */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${prospect.lookNotes.primaryColor}20` }}
                  >
                    <svg className="w-4 h-4" style={{ color: prospect.lookNotes.primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {t.profile.websitePreview}
                </h2>
                
                {/* Mock Website Frames */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Hero Mock */}
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white">
                    <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
                          {prospect.slug}.com
                        </div>
                      </div>
                    </div>
                    <div className="h-52">
                      <div
                        className="h-28 flex items-center justify-center relative"
                        style={{ backgroundColor: prospect.lookNotes.primaryColor }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                        <div className="relative text-center text-white px-4">
                          <h3 className="font-bold text-lg mb-1">{prospect.businessName[locale]}</h3>
                          <p className="text-sm opacity-90">{prospect.tagline[locale]}</p>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded w-3/4" />
                          <div className="h-2 bg-gray-200 rounded w-full" />
                          <div className="h-2 bg-gray-200 rounded w-5/6" />
                        </div>
                        <div className="mt-4 flex gap-2">
                          <div
                            className="h-7 rounded-lg w-20 text-white text-xs flex items-center justify-center"
                            style={{ backgroundColor: prospect.lookNotes.primaryColor }}
                          >
                            {isRTL ? 'احجز' : 'Book'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services Mock */}
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white">
                    <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
                          {prospect.slug}.com/services
                        </div>
                      </div>
                    </div>
                    <div className="h-52 bg-gray-50 p-4">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b">
                        <div
                          className="w-6 h-6 rounded"
                          style={{ backgroundColor: prospect.lookNotes.primaryColor }}
                        />
                        <span className="font-semibold text-xs text-gray-800">{prospect.businessName[locale]}</span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                        {locale === 'en' ? 'Our Services' : 'خدماتنا'}
                      </h4>
                      <div className="space-y-1.5">
                        {prospect.suggestedServices.slice(0, 3).map((service, i) => (
                          <div key={i} className="flex items-center gap-2 bg-white p-1.5 rounded shadow-sm">
                            <div
                              className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px]"
                              style={{ backgroundColor: prospect.lookNotes.primaryColor }}
                            >
                              ✓
                            </div>
                            <span className="text-[10px] text-gray-700">{service[locale]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Smart Clinic Features Section */}
              <ClinicFeatures clinic={prospect} whatsappNumber="96555044676" />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 sticky top-24">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    {t.demo.interested}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t.demo.contactUs}
                  </p>
                </div>

                <a
                  href={AGENCY_CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors mb-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.demo.getYourSite}
                </a>

                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$25</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {isRTL ? '/شهرياً' : '/month'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    {AGENCY_CONTACT.whatsappNumber}
                    <br />
                    {AGENCY_CONTACT.email}
                  </p>
                </div>
              </div>

              {/* Demo Disclaimer */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm text-amber-800 dark:text-amber-200 font-medium mb-1">
                      {isRTL ? 'ملاحظة مهمة' : 'Important Note'}
                    </p>
                    <p className="text-xs text-amber-700 dark:text-amber-300">
                      {isRTL 
                        ? 'هذا اقتراح تصميم بناءً على معلومات عامة متاحة. الموقع النهائي سيتم تخصيصه حسب متطلباتكم.'
                        : 'This design proposal is based on publicly available information. The final website will be customized to your requirements.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
