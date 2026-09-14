'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { ProspectDemo } from '@/lib/prospects';
import { ClientProfile } from '@/lib/clients';

interface ClinicFeaturesProps {
  clinic: ProspectDemo | ClientProfile;
  whatsappNumber?: string;
}

export function ClinicFeatures({ clinic, whatsappNumber = '96555044676' }: ClinicFeaturesProps) {
  const { t, locale, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<'booking' | 'reminders' | 'autoReply'>('booking');

  const primaryColor = 'websiteColor' in clinic ? clinic.websiteColor : clinic.lookNotes.primaryColor;
  const services = 'services' in clinic ? clinic.services : clinic.suggestedServices;

  return (
    <section className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-teal-100 dark:border-gray-700">
      {/* Section Header */}
      <div className="bg-teal-600 dark:bg-teal-700 px-6 py-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {t.clinicFeatures.title}
        </h2>
        <p className="text-teal-100">
          {t.clinicFeatures.subtitle}
        </p>
      </div>

      {/* Feature Tabs */}
      <div className="border-b border-teal-100 dark:border-gray-700">
        <div className="flex overflow-x-auto">
          <button
            onClick={() => setActiveTab('booking')}
            className={`flex-1 min-w-[120px] px-4 py-4 text-sm font-medium transition-colors ${
              activeTab === 'booking'
                ? 'bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 border-b-2 border-teal-600'
                : 'text-gray-600 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">{t.clinicFeatures.booking.title}</span>
            </span>
          </button>
          <button
            onClick={() => setActiveTab('reminders')}
            className={`flex-1 min-w-[120px] px-4 py-4 text-sm font-medium transition-colors ${
              activeTab === 'reminders'
                ? 'bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 border-b-2 border-teal-600'
                : 'text-gray-600 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="hidden sm:inline">{t.clinicFeatures.reminders.title}</span>
            </span>
          </button>
          <button
            onClick={() => setActiveTab('autoReply')}
            className={`flex-1 min-w-[120px] px-4 py-4 text-sm font-medium transition-colors ${
              activeTab === 'autoReply'
                ? 'bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 border-b-2 border-teal-600'
                : 'text-gray-600 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="hidden sm:inline">{t.clinicFeatures.autoReply.title}</span>
            </span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {/* Online Booking Tab */}
        {activeTab === 'booking' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t.clinicFeatures.booking.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.clinicFeatures.booking.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {isRTL ? 'حجز على مدار الساعة 24/7' : '24/7 booking availability'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {isRTL ? 'تأكيد فوري عبر واتساب' : 'Instant WhatsApp confirmation'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {isRTL ? 'إدارة سهلة للمواعيد' : 'Easy appointment management'}
                  </span>
                </div>
              </div>

              {/* WhatsApp Booking CTA */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(isRTL ? 'مرحباً، أريد حجز موعد' : 'Hello, I would like to book an appointment')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.clinicFeatures.booking.whatsappBook}
              </a>
            </div>

            {/* Booking Form Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {t.clinicFeatures.booking.formTitle}
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t.clinicFeatures.booking.selectService}
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    disabled
                  >
                    <option>{services[0]?.[locale] || 'Select service'}</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.clinicFeatures.booking.selectDate}
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.clinicFeatures.booking.selectTime}
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      disabled
                    >
                      <option>10:00 AM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t.clinicFeatures.booking.name}
                  </label>
                  <input
                    type="text"
                    placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t.clinicFeatures.booking.phone}
                  </label>
                  <input
                    type="tel"
                    placeholder="+965 XXXX XXXX"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    disabled
                  />
                </div>
                <button
                  className="w-full py-3 text-white font-semibold rounded-lg transition-colors"
                  style={{ backgroundColor: primaryColor }}
                  disabled
                >
                  {t.clinicFeatures.booking.submit}
                </button>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  {t.clinicFeatures.booking.confirmation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Reminders Tab */}
        {activeTab === 'reminders' && (
          <div>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {t.clinicFeatures.reminders.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                {t.clinicFeatures.reminders.description}
              </p>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-800" />
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="relative flex gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {isRTL ? 'قبل 24 ساعة' : '24 hours before'}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{t.clinicFeatures.reminders.step1}</p>
                      {/* Mock WhatsApp Message */}
                      <div className="mt-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border-l-4 border-green-500">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {isRTL 
                            ? '📅 تذكير: لديك موعد غداً في الساعة 10:00 صباحاً. الرجاء التأكيد أو إعادة الجدولة.'
                            : '📅 Reminder: You have an appointment tomorrow at 10:00 AM. Please confirm or reschedule.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {isRTL ? 'قبل ساعتين' : '2 hours before'}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{t.clinicFeatures.reminders.step2}</p>
                      <div className="mt-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border-l-4 border-green-500">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {isRTL 
                            ? '⏰ موعدك بعد ساعتين! إليك رابط الموقع على الخريطة 📍'
                            : '⏰ Your appointment is in 2 hours! Here\'s our location on the map 📍'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {isRTL ? 'بعد الزيارة' : 'After visit'}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{t.clinicFeatures.reminders.step3}</p>
                      <div className="mt-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border-l-4 border-green-500">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {isRTL 
                            ? '🙏 شكراً لزيارتك! نتمنى لك الشفاء العاجل. كيف كانت تجربتك معنا؟ ⭐'
                            : '🙏 Thank you for visiting! We wish you a speedy recovery. How was your experience? ⭐'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit Highlight */}
              <div className="mt-8 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 text-center">
                <div className="inline-flex items-center gap-2 text-teal-700 dark:text-teal-300 font-semibold">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t.clinicFeatures.reminders.benefit}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Auto-Reply Tab */}
        {activeTab === 'autoReply' && (
          <div>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {t.clinicFeatures.autoReply.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                {t.clinicFeatures.autoReply.description}
              </p>

              {/* Auto-Reply Examples */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">
                  {t.clinicFeatures.autoReply.example}
                </h4>

                {/* Chat Simulation */}
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 space-y-3">
                  {/* Greeting */}
                  <div className="flex justify-end">
                    <div className="bg-green-500 text-white rounded-2xl rounded-br-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm">{isRTL ? 'مرحباً' : 'Hi'}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-gray-600 rounded-2xl rounded-bl-sm px-4 py-2 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800 dark:text-gray-200">{t.clinicFeatures.autoReply.greeting}</p>
                      <p className="text-xs text-gray-400 mt-1">{isRTL ? 'رد تلقائي' : 'Auto-reply'}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex justify-end">
                    <div className="bg-green-500 text-white rounded-2xl rounded-br-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm">{isRTL ? 'ما هي ساعات العمل؟' : 'What are your hours?'}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-gray-600 rounded-2xl rounded-bl-sm px-4 py-2 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800 dark:text-gray-200">{t.clinicFeatures.autoReply.hours}</p>
                      <p className="text-xs text-gray-400 mt-1">{isRTL ? 'رد تلقائي' : 'Auto-reply'}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex justify-end">
                    <div className="bg-green-500 text-white rounded-2xl rounded-br-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm">{isRTL ? 'أين موقعكم؟' : 'Where are you located?'}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-gray-600 rounded-2xl rounded-bl-sm px-4 py-2 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800 dark:text-gray-200">{t.clinicFeatures.autoReply.location}</p>
                      <p className="text-xs text-gray-400 mt-1">{isRTL ? 'رد تلقائي' : 'Auto-reply'}</p>
                    </div>
                  </div>
                </div>

                {/* After Hours Message */}
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-amber-800 dark:text-amber-200 mb-1">
                        {isRTL ? 'خارج ساعات العمل' : 'After Hours'}
                      </p>
                      <p className="text-sm text-amber-700 dark:text-amber-300">{t.clinicFeatures.autoReply.afterHours}</p>
                    </div>
                  </div>
                </div>

                {/* Benefit */}
                <div className="mt-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center gap-2 text-teal-700 dark:text-teal-300 font-semibold">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t.clinicFeatures.autoReply.benefit}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
