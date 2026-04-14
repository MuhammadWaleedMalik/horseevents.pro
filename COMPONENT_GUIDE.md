# Component Usage Guide

This guide explains how to use each component in the SaddleBook website.

## Table of Contents
1. [Header](#header)
2. [Event Categories](#event-categories)
3. [Hero Section](#hero-section)
4. [Background Section](#background-section)
5. [Feature Section](#feature-section)
6. [Content Section](#content-section)
7. [Platform Section](#platform-section)
8. [Video Section](#video-section)
9. [Testimonial Section](#testimonial-section)
10. [CTA Section](#cta-section)
11. [Footer](#footer)

---

## Header

Fixed navigation header at the top of the page.

```tsx
import Header from '@/components/Header';

<Header />
```

**Features:**
- Fixed positioning
- Logo and site name
- Navigation links (Events, Sign Up, Sign In)
- Transparent background with blur

---

## Event Categories

Displays a grid of event category buttons.

```tsx
import EventCategories from '@/components/EventCategories';

<EventCategories />
```

**Categories Included:**
- Barrel Racing, Pole Bending, Rodeo, Bull Riding
- Bronc Riding, Team Roping, Steer Wrestling
- Breakaway & Tie Down Roping, Ranch Horse, Clinics
- Hunter & Jumper, Barrel Race No Horse, Charities & Donations

---

## Hero Section

Full-screen hero section with background image.

```tsx
import HeroSection from '@/components/HeroSection';

<HeroSection
  backgroundImage="https://your-image-url.jpg"
  smallTitle="OPTIONAL SMALL TITLE"
  title="Your Main Headline"
  subtitle="Optional subtitle text"
  showCategories={true}
/>
```

**Props:**
- `backgroundImage` (string, required): URL of background image
- `title` (string, required): Main headline
- `subtitle` (string, optional): Subtitle text
- `smallTitle` (string, optional): Small text above title
- `showCategories` (boolean, default: true): Show event category buttons

**Best For:**
- Landing page hero
- Major section headers
- Full-screen announcements

---

## Background Section

Mid-height section with background image (70vh).

```tsx
import BackgroundSection from '@/components/BackgroundSection';

<BackgroundSection
  backgroundImage="https://your-image-url.jpg"
  smallTitle="SECTION LABEL"
  title="Section Title"
  subtitle="Optional description"
  showCategories={false}
/>
```

**Props:**
- Same as HeroSection but renders at 70vh height

**Best For:**
- Breaking up content sections
- Feature highlights
- Transitional sections

---

## Feature Section

Grid layout for displaying features with descriptions.

```tsx
import FeatureSection from '@/components/FeatureSection';

const features = [
  {
    title: 'Feature Title',
    description: 'Feature description text',
    items: ['Bullet point 1', 'Bullet point 2'],
    link: {
      text: 'Learn more',
      href: '#section'
    }
  },
  {
    title: 'Another Feature',
    description: 'Another description'
  }
];

<FeatureSection
  title="Section Title"
  features={features}
/>
```

**Props:**
- `title` (string): Section title
- `features` (array): Array of feature objects

**Feature Object:**
- `title` (string, required): Feature title
- `description` (string, required): Feature description
- `items` (string[], optional): Bullet points
- `link` (object, optional): Link with `text` and `href`

**Best For:**
- Listing product features
- Service descriptions
- Benefit lists

---

## Content Section

Flexible content section with optional background.

```tsx
import ContentSection from '@/components/ContentSection';

<ContentSection
  title="Section Title"
  subtitle="OPTIONAL SUBTITLE"
  content={
    <div>
      <p>Your custom content here</p>
      <a href="#">Link</a>
    </div>
  }
  backgroundImage="https://your-image-url.jpg"
  darkMode={false}
/>
```

**Props:**
- `title` (string, required): Section title
- `subtitle` (string, optional): Small text above title
- `content` (ReactNode, optional): Custom content
- `backgroundImage` (string, optional): Background image URL
- `darkMode` (boolean, default: false): Use dark text/background

**Best For:**
- Custom content layouts
- Contact information
- Mixed content sections

---

## Platform Section

Specialized section for platform features with categories.

```tsx
import PlatformSection from '@/components/PlatformSection';

<PlatformSection
  backgroundImage="https://your-image-url.jpg"
  title="PLATFORM NAME"
  subtitle="Platform description or tagline"
/>
```

**Props:**
- `backgroundImage` (string, required): Background image
- `title` (string, required): Platform name/label
- `subtitle` (string, required): Main headline

**Best For:**
- Product showcases
- Platform introductions
- Feature announcements

---

## Video Section

Section with video placeholder.

```tsx
import VideoSection from '@/components/VideoSection';

<VideoSection
  title="Video Title"
  subtitle="Video description"
/>
```

**Props:**
- `title` (string, required): Video section title
- `subtitle` (string, required): Video description

**Best For:**
- YouTube embeds
- Promotional videos
- Tutorial sections

---

## Testimonial Section

Display customer testimonials with background.

```tsx
import TestimonialSection from '@/components/TestimonialSection';

<TestimonialSection
  backgroundImage="https://your-image-url.jpg"
  title="TESTIMONIALS"
  quote="Your customer testimonial text goes here. It can be quite long."
/>
```

**Props:**
- `backgroundImage` (string, required): Background image
- `title` (string, required): Section label
- `quote` (string, required): Testimonial text

**Best For:**
- Customer reviews
- Success stories
- Social proof

---

## CTA Section

Call-to-action section with buttons.

```tsx
import CTASection from '@/components/CTASection';

<CTASection
  backgroundImage="https://your-image-url.jpg"
  title="Call to Action Headline"
  description="Optional description text"
  primaryButton={{
    text: 'Primary Action',
    href: '#signup'
  }}
  secondaryButton={{
    text: 'Secondary Action',
    href: '#learn-more'
  }}
/>
```

**Props:**
- `backgroundImage` (string, required): Background image
- `title` (string, required): CTA headline
- `description` (string, optional): Additional text
- `primaryButton` (object, optional): `{ text, href }`
- `secondaryButton` (object, optional): `{ text, href }`

**Best For:**
- Sign-up prompts
- Action-driven sections
- Conversion points

---

## Footer

Site footer with links and contact info.

```tsx
import Footer from '@/components/Footer';

<Footer />
```

**Features:**
- Sign Up / Sign In buttons
- Contact information
- Privacy/Terms links
- Copyright notice
- Fixed chat button

**Best For:**
- Bottom of every page

---

## Quick Start Example

Here's a complete page example:

```tsx
import {
  Header,
  HeroSection,
  FeatureSection,
  BackgroundSection,
  Footer
} from '@/components';

export default function Page() {
  const features = [
    {
      title: 'Feature 1',
      description: 'Description',
      items: ['Point 1', 'Point 2']
    }
  ];

  return (
    <main>
      <Header />

      <HeroSection
        backgroundImage="/hero.jpg"
        title="Welcome"
        showCategories={true}
      />

      <FeatureSection
        title="Features"
        features={features}
      />

      <BackgroundSection
        backgroundImage="/bg.jpg"
        title="Why Choose Us"
      />

      <Footer />
    </main>
  );
}
```

---

## Styling Tips

All components use Tailwind CSS. Common patterns:

**Text Colors:**
- `text-white` - White text (on dark backgrounds)
- `text-gray-900` - Dark text (on light backgrounds)
- `text-gray-600` - Muted text

**Backgrounds:**
- Light sections: `bg-white` or `bg-gray-50`
- Dark sections: `bg-gray-900`
- Images: Set via `backgroundImage` prop

**Responsive:**
- All components are fully responsive
- Breakpoints: `md:` (768px), `lg:` (1024px)

---

## Tips for Best Results

1. **Image Quality**: Use high-resolution images (1920x1080 minimum)
2. **Contrast**: Ensure text is readable over background images
3. **Consistency**: Use the same background image across related sections
4. **Content Length**: Keep titles under 10 words for best display
5. **Mobile**: Test on mobile devices - all components are responsive

---

## Common Patterns

### Pattern 1: Hero + Features
```tsx
<HeroSection />
<FeatureSection />
```

### Pattern 2: Content Sandwich
```tsx
<BackgroundSection />
<FeatureSection />
<BackgroundSection />
```

### Pattern 3: Story Flow
```tsx
<HeroSection />
<FeatureSection />
<TestimonialSection />
<CTASection />
```

---

For more details, see the main README.md file.
