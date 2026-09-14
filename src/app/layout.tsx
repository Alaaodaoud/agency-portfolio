import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Alaa Web Agency | Professional Clinic Websites for $55/mo",
  description: "Complete clinic website system with online booking, appointment reminders, and WhatsApp auto-reply. Modern, mobile-friendly designs with ongoing support.",
  keywords: ["website design", "clinic website", "business website", "Kuwait", "online booking", "WhatsApp support", "appointment reminders"],
  openGraph: {
    title: "Alaa Web Agency | Professional Clinic Websites for $55/mo",
    description: "Complete clinic website system with online booking, appointment reminders, and WhatsApp auto-reply.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexArabic.variable} font-sans antialiased bg-white text-gray-900`}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
