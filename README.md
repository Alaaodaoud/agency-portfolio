# Alaa Web Agency Portfolio

A modern, bilingual (Arabic + English) portfolio website for Alaa's web agency, targeting clinics and local businesses in Kuwait and internationally.

## Features

- **Bilingual Support**: Full Arabic and English translations with RTL support
- **Modern Design**: Clean, professional UI designed for Gulf and international SMBs
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Next.js App Router for optimal performance
- **Easy Deployment**: Ready for one-click Vercel deployment

## Pages

- **Home**: Agency overview, key features, and call-to-action
- **Portfolio**: Interactive demo of 3 clinic website templates (Dental, General Medical, Specialty)
- **Pricing**: Clear $25/month pricing with included features
- **Contact**: WhatsApp-first contact approach with easy communication flow

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first styling
- [React 19](https://react.dev/) - UI library

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Alaaodaoud/agency-portfolio.git
cd agency-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Alaaodaoud/agency-portfolio)

### Option 2: Manual Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure the build settings.

## Customization

### WhatsApp Number

Update the WhatsApp number in `/src/app/contact/page.tsx`:

```typescript
const whatsappNumber = "96599999999"; // Replace with your number
```

### Translations

Edit translations in `/src/lib/i18n.ts` to customize text content for both languages.

### Styling

The design uses Tailwind CSS with custom theme colors defined in `/src/app/globals.css`:

- Primary: Blue tones for trust and professionalism
- Accent: Green for WhatsApp and success states

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles + Tailwind
│   ├── portfolio/
│   │   └── page.tsx    # Portfolio page
│   ├── pricing/
│   │   └── page.tsx    # Pricing page
│   └── contact/
│       └── page.tsx    # Contact page
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── LanguageProvider.tsx  # i18n context
└── lib/
    └── i18n.ts         # Translations
```

## License

MIT License - feel free to use this for your own agency website.
