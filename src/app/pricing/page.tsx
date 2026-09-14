import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function PricingPage() {
  const t = await getTranslations("pricing");
  const tCommon = await getTranslations("common");

  const plans = [
    {
      name: t("starterTitle"),
      description: t("starterDesc"),
      price: "150",
      currency: "KWD",
      features: [
        "Single page website",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "1 month support",
      ],
    },
    {
      name: t("proTitle"),
      description: t("proDesc"),
      price: "350",
      currency: "KWD",
      featured: true,
      features: [
        "Multi-page website (up to 5)",
        "Bilingual (EN/AR) support",
        "WhatsApp integration",
        "Google Maps integration",
        "Advanced SEO",
        "3 months support",
        "Social media links",
      ],
    },
    {
      name: t("enterpriseTitle"),
      description: t("enterpriseDesc"),
      price: null,
      features: [
        "Unlimited pages",
        "Custom features",
        "Booking system integration",
        "Content management system",
        "Priority support",
        "Training sessions",
      ],
    },
  ];

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

        {/* Pricing Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${
                    plan.featured
                      ? "border-teal-500 ring-2 ring-teal-500"
                      : "border-gray-100"
                  }`}
                >
                  {plan.featured && (
                    <div className="bg-teal-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                    <div className="mb-6">
                      {plan.price ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-gray-900">
                            {plan.price}
                          </span>
                          <span className="text-gray-500">{plan.currency}</span>
                        </div>
                      ) : (
                        <span className="text-xl font-semibold text-gray-900">
                          {t("contactForPricing")}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <svg
                            className="w-5 h-5 text-teal-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-colors ${
                        plan.featured
                          ? "bg-teal-600 text-white hover:bg-teal-700"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      {tCommon("contactUs")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What&apos;s included in the price?
                </h3>
                <p className="text-gray-600 text-sm">
                  All prices include design, development, and initial hosting setup.
                  Domain registration is not included but we can help you choose and
                  register one.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How long does it take?
                </h3>
                <p className="text-gray-600 text-sm">
                  Starter websites can be ready within a week. Professional packages
                  typically take 2-3 weeks. Enterprise projects are scoped individually.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you offer ongoing maintenance?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes! After the included support period, we offer affordable monthly
                  maintenance packages to keep your site updated and secure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
