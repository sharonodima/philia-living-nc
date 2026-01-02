# Philia Living NC Website

A modern, responsive website for Philia Living NC built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **SEO Optimized**: Meta tags and structured content for better search engine visibility
- **Accessible**: WCAG 2.1 AA compliant with accessibility features

## Pages

The website includes the following pages:

1. **Home** (`/`) - Landing page with hero section, services overview, and testimonials
2. **About** (`/about`) - Company mission, vision, values, and story
3. **Services** (`/services`) - Comprehensive list of care services offered
4. **Benefits** (`/benefits`) - Benefits for families and residents
5. **Meet the Team** (`/team`) - Team member profiles and information
6. **Testimonials** (`/testimonials`) - Client testimonials and reviews
7. **Contact** (`/contact`) - Contact form and information
8. **Accessibility Statement** (`/accessibility`) - Accessibility commitment and features
9. **Privacy Policy** (`/privacy`) - Privacy policy and data practices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd philia-living-nc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
philia-living-nc/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── benefits/            # Benefits page
│   ├── team/                # Team page
│   ├── testimonials/        # Testimonials page
│   ├── contact/             # Contact page
│   ├── accessibility/       # Accessibility page
│   ├── privacy/             # Privacy policy page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── Navigation.tsx       # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section
│   └── ContactForm.tsx      # Contact form
├── public/                  # Static assets
│   └── images/              # Image files
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.ts           # Next.js configuration
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  },
}
```

### Content

Replace placeholder content in each page file (`app/*/page.tsx`) with actual content from the original website.

### Images

Add images to the `public/images/` directory and update image references in components.

### Contact Information

Update contact information in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

Build the production version:

```bash
npm run build
```

Then deploy the `.next` folder according to your hosting provider's instructions.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

This website follows WCAG 2.1 Level AA guidelines and includes:
- Semantic HTML
- Keyboard navigation support
- Screen reader compatibility
- High contrast colors
- Responsive design

## License

This project is proprietary and confidential.

## Contact

For questions or support, contact: info@philialivingnc.com
