# Alaa's Agency Portfolio

Professional website agency portfolio showcasing demo clinic websites for businesses in Kuwait and the Gulf region.

## Features

- **Bilingual Support**: Full Arabic (RTL) and English support with language toggle
- **Client Profiles**: Mini portfolio pages for each demo clinic client showing:
  - Business name, category, and city
  - About section (bilingual)
  - Services offered
  - Website preview mockups
  - Contact CTA
- **Portfolio Gallery**: Card-based view of all clients with "View Profile" links
- **Pricing Section**: Clear $25/month pricing with feature list
- **Contact Integration**: WhatsApp and email contact options

## Demo Clients

- **Demo Dental Care Kuwait** - Dental Clinic in Kuwait City
- **Demo Family Medical Center** - General Medical Clinic in Salmiya  
- **Demo Skin Wellness Clinic** - Dermatology Specialty in Hawalli

## Contact

- **WhatsApp**: [+965 5504 4676](https://wa.me/96555044676)
- **Email**: alaa.cs.94@gmail.com
- **Pricing**: $25/month

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- React 19

## Development

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

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with bilingual support
│   ├── page.tsx            # Landing page
│   └── portfolio/
│       ├── page.tsx        # Portfolio gallery
│       └── [slug]/
│           └── page.tsx    # Individual client profile
├── components/
│   ├── ClientCard.tsx      # Portfolio card component
│   ├── Footer.tsx          # Site footer
│   ├── Header.tsx          # Navigation header
│   ├── LanguageContext.tsx # Bilingual context provider
│   └── WebsiteMockup.tsx   # Website preview frames
└── lib/
    ├── clients.ts          # Demo client data
    ├── constants.ts        # Agency contact info
    └── i18n.ts             # Translation strings
```

---

Built with care in Kuwait 🇰🇼
