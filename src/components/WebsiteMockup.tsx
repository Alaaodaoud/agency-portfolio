'use client';

import { ClientProfile } from '@/lib/clients';
import { useLanguage } from './LanguageContext';

interface WebsiteMockupProps {
  client: ClientProfile;
  variant: 'hero' | 'services' | 'contact';
}

export function WebsiteMockup({ client, variant }: WebsiteMockupProps) {
  const { locale } = useLanguage();

  const renderContent = () => {
    switch (variant) {
      case 'hero':
        return (
          <div className="flex flex-col h-full">
            <div
              className="h-32 flex items-center justify-center relative"
              style={{ backgroundColor: client.websiteColor }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              <div className="relative text-center text-white px-4">
                <h3 className="font-bold text-lg mb-1">{client.businessName[locale]}</h3>
                <p className="text-sm opacity-90">{client.tagline[locale]}</p>
              </div>
            </div>
            <div className="flex-1 bg-white p-4">
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
              </div>
              <div className="mt-4 flex gap-2">
                <div
                  className="h-8 rounded-lg w-24"
                  style={{ backgroundColor: client.websiteColor }}
                />
                <div className="h-8 rounded-lg w-24 border-2" style={{ borderColor: client.websiteColor }} />
              </div>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="flex flex-col h-full bg-gray-50">
            <div className="p-4 bg-white border-b">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg"
                  style={{ backgroundColor: client.websiteColor }}
                />
                <span className="font-semibold text-sm text-gray-800">{client.businessName[locale]}</span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                {locale === 'en' ? 'Our Services' : 'خدماتنا'}
              </h4>
              <div className="space-y-2">
                {client.services.slice(0, 3).map((service, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs"
                      style={{ backgroundColor: client.websiteColor }}
                    >
                      ✓
                    </div>
                    <span className="text-xs text-gray-700">{service[locale]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="flex flex-col h-full bg-white">
            <div
              className="p-4"
              style={{ backgroundColor: client.websiteColor }}
            >
              <h4 className="font-semibold text-white text-sm">
                {locale === 'en' ? 'Contact Us' : 'تواصل معنا'}
              </h4>
            </div>
            <div className="flex-1 p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">📱</span>
                </div>
                <div className="h-3 bg-gray-200 rounded w-24" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✉️</span>
                </div>
                <div className="h-3 bg-gray-200 rounded w-28" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">📍</span>
                </div>
                <div className="h-3 bg-gray-200 rounded w-20" />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white">
      <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-gray-500 dark:text-gray-400 max-w-[150px] truncate">
            {client.slug}.com
          </div>
        </div>
      </div>
      <div className="h-52">
        {renderContent()}
      </div>
    </div>
  );
}
