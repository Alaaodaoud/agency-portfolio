# Agency Portfolio

Professional portfolio and demo templates for a legitimate Kuwait website agency specializing in healthcare/clinic websites.

## Features

- **Bilingual Support**: Full Arabic (RTL) and English support with proper text direction
- **Mobile-First Design**: Optimized for the devices patients actually use
- **Demo Template System**: Configurable clinic demo pages from simple JSON/TS config
- **WhatsApp Integration**: Easy contact via WhatsApp with the agency number
- **Medical Focus**: Design language focused on healthcare providers

## Demo Clinic System

This project includes a template system for quickly creating **proposed demo** clinic websites. These demos:

- Are for **pitch purposes only**
- Include clear disclaimers that they are NOT official clinic websites
- Are configured via a simple data file (`src/data/clinics.ts`)
- Use only publicly available information (name, general specialty, services)
- Never claim official ownership or represent actual clinics

### Adding a New Demo Clinic

Edit `src/data/clinics.ts` and add a new entry to the `clinicDemos` array:

```typescript
{
  slug: 'my-clinic-demo',
  nameEn: 'My Clinic Name',
  nameAr: 'اسم العيادة',
  aboutEn: 'Description in English...',
  aboutAr: 'الوصف بالعربية...',
  services: [
    { nameEn: 'Service 1', nameAr: 'الخدمة 1' },
    // ... more services (3-5 recommended)
  ],
  mood: 'modern-minimal', // or 'warm-family', 'clinical-trust', 'vibrant-pediatric'
  primaryColor: '#0d9488',
  accentColor: '#14b8a6',
  publicIg: 'optional_instagram_handle' // Optional - for visual mood notes only
}
```

## Hosting Notes

⚠️ **IMPORTANT**: All demo clinic pages are intended to be hosted **exclusively on the agency's own subdomain** (e.g., `demos.agencysite.com/clinic-name`).

**Never**:
- Host demos on the clinic's actual domain
- Register domains that imply clinic ownership
- Remove or minimize the disclaimer banners

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── portfolio/         # Portfolio/demo gallery
│   ├── demo/[slug]/       # Individual demo pages
│   ├── contact/           # Contact page
│   └── pricing/           # Pricing page
├── components/            # Reusable components
│   ├── DisclaimerBanner.tsx
│   ├── WhatsAppProfileCard.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── data/
│   └── clinics.ts         # Demo clinic configurations
└── i18n/                  # Internationalization
    ├── config.ts
    ├── request.ts
    └── messages/
        ├── en.json
        └── ar.json
```

## Contact

WhatsApp: +965 5504 4676
