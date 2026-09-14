# Creating Prospect Demos

This guide explains how to create personalized demo website previews for prospective clinic clients.

## Overview

Prospect demos are personalized website mockups created from publicly available information (Google Maps, Instagram). They help show potential clients what their website could look like.

**IMPORTANT**: These are DEMO PREVIEWS only. They must be clearly labeled as "Demo preview / اقتراح موقع" and never presented as the clinic's official website.

## Quick Start

1. Research the prospect clinic using Google Maps and Instagram (if linked)
2. Add a new entry to `src/lib/prospects.ts`
3. Run `npm run build` to verify
4. Share the demo URL with the prospect via WhatsApp

## Step-by-Step Guide

### 1. Research Phase

From **Google Maps**:
- Business name (exact spelling)
- City/area
- Business category/niche
- Services mentioned
- Opening hours (optional)
- Photos of the clinic

From **Instagram** (if linked on Maps):
- Visual style and color palette
- Target audience indicators
- Service highlights
- Branding elements

### 2. Create the Prospect Entry

Open `src/lib/prospects.ts` and add a new entry to the `sampleProspects` array:

```typescript
{
  id: 'prospect-[unique-id]',
  slug: 'prospect-[clinic-name]-[city]',  // URL-friendly, lowercase
  businessName: {
    en: 'Clinic Name in English',
    ar: 'اسم العيادة بالعربية',
  },
  niche: {
    en: 'Dental / Dermatology / Family Medicine / etc.',
    ar: 'التخصص بالعربية',
  },
  city: {
    en: 'Kuwait City / Salmiya / Hawalli / etc.',
    ar: 'اسم المدينة',
  },
  tagline: {
    en: 'Short catchy tagline based on their branding',
    ar: 'شعار قصير وجذاب',
  },
  suggestedServices: [
    { en: 'Service from their listing', ar: 'الخدمة بالعربية' },
    { en: 'Service 2', ar: 'الخدمة 2' },
    { en: 'Service 3', ar: 'الخدمة 3' },
    // Add 3-5 services
  ],
  lookNotes: {
    primaryColor: '#hex-color',  // Main brand color from IG
    accentColor: '#darker-shade', // Darker shade for buttons
    style: 'modern',  // 'modern' | 'classic' | 'minimal' | 'warm' | 'clinical'
    instagramInspiration: '@their_handle',  // Optional
    notes: {
      en: 'Describe their visual style based on public presence...',
      ar: 'وصف الأسلوب البصري...',
    },
  },
  googleMapsRef: 'Google Maps URL or note',
  instagramHandle: '@handle',  // Optional
  createdFor: 'Lead name or outreach context',
  createdAt: '2024-01-20',  // Date created
}
```

### 3. Choosing Colors

**Finding the right colors:**
1. Check their Instagram for brand colors
2. Use a color picker tool on their profile photos
3. If no clear branding, choose based on niche:
   - Dental: Blues (#0ea5e9, #3b82f6)
   - Dermatology: Pinks/Rose (#ec4899, #f472b6)
   - Family Medicine: Greens/Teals (#10b981, #14b8a6)
   - Aesthetics: Purples/Golds (#8b5cf6, #d97706)

**Style options:**
- `modern`: Clean lines, bold colors, contemporary feel
- `classic`: Traditional, professional, trustworthy
- `minimal`: Lots of whitespace, simple, elegant
- `warm`: Soft colors, welcoming, family-friendly
- `clinical`: Medical blue/white, precise, technical

### 4. Verify and Deploy

```bash
# Check for errors
npm run build

# Test locally
npm run dev
# Visit http://localhost:3000/demo/prospect-[your-slug]
```

### 5. Share with Prospect

The demo URL format is:
```
https://[your-domain]/demo/prospect-[clinic-name]-[city]
```

**WhatsApp outreach template:**

English:
```
Hi! I created a demo website preview for [Clinic Name] based on your Google Maps profile. Take a look: [URL]

This shows what your professional website could look like - bilingual, mobile-friendly, with your services and branding. Interested? Just $25/month.
```

Arabic:
```
مرحباً! قمت بإنشاء اقتراح موقع تجريبي لـ [اسم العيادة] بناءً على معلومات جوجل ماب. شاهد النتيجة: [URL]

هذا يوضح كيف يمكن أن يبدو موقعكم الاحترافي - ثنائي اللغة، متوافق مع الجوال، مع خدماتكم وهويتكم. مهتم؟ فقط $25 شهرياً.
```

## Best Practices

### DO:
- ✅ Use only publicly available information
- ✅ Clearly mark everything as "Demo Preview / اقتراح موقع"
- ✅ Suggest services based on what they actually offer
- ✅ Match their existing visual style when possible
- ✅ Keep the prospect data file organized

### DON'T:
- ❌ Present as the clinic's official website
- ❌ Use real patient information or reviews
- ❌ Invent services they don't offer
- ❌ Use copyrighted images without permission
- ❌ Store sensitive business information

## File Structure

```
src/lib/prospects.ts    # All prospect demo data
src/app/demo/           # Demo listing page
src/app/demo/[slug]/    # Individual demo pages
src/components/
  ├── DemoBanner.tsx    # "Demo Preview" warning banner
  ├── ProspectCard.tsx  # Card for demo listing
```

## Removing/Archiving Demos

When a prospect converts to a client or declines:
1. Remove their entry from `sampleProspects` array
2. Optionally move to a separate archive file
3. Run `npm run build` to update static pages

## Contact

Questions? Contact the agency:
- WhatsApp: +965 5504 4676
- Email: alaa.cs.94@gmail.com
