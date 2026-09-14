'use client';

import { useTranslations } from 'next-intl';

interface FeaturePreviewCardsProps {
  primaryColor: string;
}

export function FeaturePreviewCards({ primaryColor }: FeaturePreviewCardsProps) {
  const t = useTranslations('features');

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {/* Appointment Reminders Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div 
          className="px-5 py-3 border-b flex items-center gap-2"
          style={{ backgroundColor: `${primaryColor}08` }}
        >
          <span 
            className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full text-white"
            style={{ backgroundColor: primaryColor }}
          >
            {t('demoPreview')}
          </span>
          <span className="text-xs text-gray-500">{t('includedIn25')}</span>
        </div>
        <div className="p-5">
          <div className="flex items-start gap-3">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${primaryColor}15` }}
            >
              <svg 
                className="w-6 h-6" 
                style={{ color: primaryColor }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{t('remindersTitle')}</h4>
              <p className="text-sm text-gray-600 mt-1">{t('remindersDesc')}</p>
            </div>
          </div>
          
          {/* Preview Mockup */}
          <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">WhatsApp</span>
            </div>
            <div className="bg-white rounded-lg p-2 text-xs text-gray-600 border border-gray-200">
              <p className="font-medium text-gray-800">{t('reminderPreviewTitle')}</p>
              <p className="mt-1 text-gray-500">{t('reminderPreviewText')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-Reply Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div 
          className="px-5 py-3 border-b flex items-center gap-2"
          style={{ backgroundColor: `${primaryColor}08` }}
        >
          <span 
            className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full text-white"
            style={{ backgroundColor: primaryColor }}
          >
            {t('demoPreview')}
          </span>
          <span className="text-xs text-gray-500">{t('includedIn25')}</span>
        </div>
        <div className="p-5">
          <div className="flex items-start gap-3">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${primaryColor}15` }}
            >
              <svg 
                className="w-6 h-6" 
                style={{ color: primaryColor }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{t('autoReplyTitle')}</h4>
              <p className="text-sm text-gray-600 mt-1">{t('autoReplyDesc')}</p>
            </div>
          </div>
          
          {/* Preview Mockup */}
          <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="space-y-2">
              {/* Incoming message */}
              <div className="flex justify-end">
                <div className="bg-green-100 rounded-lg px-3 py-1.5 text-xs text-gray-700 max-w-[80%]">
                  {t('autoReplyIncoming')}
                </div>
              </div>
              {/* Auto-reply */}
              <div className="flex justify-start">
                <div className="bg-white rounded-lg px-3 py-1.5 text-xs text-gray-600 border border-gray-200 max-w-[80%]">
                  <p className="font-medium text-gray-800">{t('autoReplyResponse')}</p>
                  <p className="mt-1 text-gray-500">{t('autoReplyResponseText')}</p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t('instantReply')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
