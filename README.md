# Sri Rama Aditya College & Nursing Home

A modern, responsive website for Sri Rama Aditya College & Nursing Home built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional design with glassmorphism effects
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🌙 **Dark/Light Theme**: Toggle between light and dark modes
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations**: Beautiful animations using Framer Motion
- 📝 **Interactive Forms**: Join and contact forms with validation
- 🎯 **SEO Optimized**: Built-in SEO optimization
- ♿ **Accessible**: WCAG compliant accessibility features

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd srcns-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── DaisyAboutDirector.tsx
│   ├── DaisyOpportunities.tsx
│   ├── FluidFacilities.tsx
│   ├── FluidNavbar.tsx
│   ├── HowToJoin.tsx
│   ├── JoinModal.tsx
│   ├── ModernFooter.tsx
│   ├── PremiumHero.tsx
│   └── ProgramsSection.tsx
├── lib/
│   └── utils.ts
└── types/
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      secondary: {
        // Your secondary colors
      }
    }
  }
}
```

### Content
Update the content in the respective component files:
- `src/components/PremiumHero.tsx` - Hero section content
- `src/components/FluidFacilities.tsx` - Facilities list
- `src/components/DaisyAboutDirector.tsx` - Director information
- `src/components/DaisyOpportunities.tsx` - Opportunities list

## Features in Detail

### Navigation
- Glassmorphism navbar with blur effects
- Mobile-responsive hamburger menu
- Smooth scrolling to sections
- Theme toggle functionality

### Hero Section
- Animated nurse character
- Gradient backgrounds
- Call-to-action buttons
- Responsive layout

### Forms
- Join form modal with validation
- Contact form in footer
- Real-time validation feedback
- Loading states

### Animations
- Framer Motion animations
- Scroll-triggered animations
- Hover effects
- Page transitions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@studio.sted.space or create an issue in the repository.

---

Built with ❤️ by [studio.sted.space](https://studio.sted.space)

