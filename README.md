# Bridgepoint Freight & Logistics - Website

Professional vehicle relocation services website built with modern web technologies.

## Overview

Bridgepoint is a leading vehicle relocation and logistics service provider in South Africa. This website serves as the digital storefront for our professional fleet management and vehicle transportation services.

## Features

- **Responsive Design**: Mobile-first approach ensuring optimal viewing on all devices
- **Modern UI**: Professional, premium design with smooth animations
- **Performance Optimized**: Fast loading times with Vite and optimized assets
- **Type-Safe**: Full TypeScript support for reliable code
- **Accessible**: WCAG compliant with semantic HTML
- **SEO Ready**: Optimized for search engines with proper meta tags

## Tech Stack

### Frontend
- **React 18**: UI library with hooks
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Intersection Observer**: Scroll-based animations

### Build & Development
- **Vite**: Next-generation frontend tooling
- **ESLint**: Code quality and style
- **PostCSS**: CSS processing with Autoprefixer

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer with links
├── sections/
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Services.tsx        # Service offerings
│   ├── HowItWorks.tsx      # Process steps
│   ├── WhyChoose.tsx       # Company strengths
│   ├── Industries.tsx      # Industries served
│   ├── SafetyQuality.tsx   # Safety features
│   ├── FleetExpertise.tsx  # Vehicle types
│   ├── QuoteRequest.tsx    # Lead generation form
│   ├── Testimonials.tsx    # Client feedback
│   └── CTA.tsx             # Call to action
├── hooks/
│   └── useScrollAnimation.ts # Scroll-based animations
├── utils/
│   └── constants.ts        # Business data & configuration
├── types/
│   └── index.ts            # TypeScript definitions
├── styles/
│   └── global.css          # Global styles with Tailwind
├── App.tsx                 # Main app component
└── main.tsx               # Entry point
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Development

### Code Style
The project uses ESLint for code quality. Run `npm run lint` to check for issues.

### Component Guidelines
- Use functional components with hooks
- Implement proper TypeScript typing
- Follow the component structure in existing files
- Use Tailwind CSS for styling
- Add animations using Framer Motion when appropriate

### Adding New Sections
1. Create a new file in `src/sections/`
2. Import required utilities and hooks
3. Use `useScrollAnimation` for scroll-based animations
4. Export as default component
5. Import and add to `App.tsx`

## Customization

### Business Information
Update company details in `src/utils/constants.ts`:
- Company name, phone, email
- Services list
- Industries served
- Testimonials
- Team members (when added)

### Colors & Theme
Modify `tailwind.config.js` to adjust:
- Color palette
- Font families
- Spacing
- Custom shadows

### Content
All text content is centralized in `src/utils/constants.ts` for easy updates.

## Performance

- Lazy loading of images and components
- Code splitting via Vite
- Optimized animations with GPU acceleration
- CSS purging in production

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Build
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deployment Options
- **Vercel**: Recommended for React projects
- **Netlify**: Great alternative with CI/CD
- **Traditional hosting**: Deploy `dist/` folder contents

## SEO

The website includes:
- Semantic HTML structure
- Meta tags (update in `index.html`)
- Open Graph tags for social sharing
- Structured data ready for schema markup

## Accessibility

- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Performance Monitoring

Monitor key metrics:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)

## Contributing

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Make changes following the code guidelines
3. Run linting: `npm run lint`
4. Commit with descriptive messages
5. Push and create a pull request

## Version History

### v1.0.0 (Current)
- Initial launch
- 10 main sections
- Responsive design
- Animation effects
- Lead generation form

## Support

For support or questions:
- Email: quotes@bridgepoint.co.za
- Phone: +27 (0) 11 XXX XXXX

## License

Copyright © 2024 Bridgepoint Freight & Logistics. All rights reserved.

## Maintenance

### Regular Tasks
- Update dependencies monthly: `npm update`
- Run security audit: `npm audit`
- Monitor performance metrics
- Update content in constants file

### Troubleshooting

**Port already in use:**
```bash
npm run dev -- --port 3000
```

**Clear cache:**
```bash
rm -rf node_modules .vite
npm install
```

---

**Last Updated**: July 2024
