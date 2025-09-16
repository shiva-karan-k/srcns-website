# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy from GitHub
1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Sign up/Login with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will automatically detect Next.js and configure everything
7. Click "Deploy"

### Option 2: Deploy with Vercel CLI
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. In the project directory, run:
```bash
vercel
```

3. Follow the prompts to deploy

## Deploy to Netlify

### Option 1: Drag & Drop
1. Build the project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag the `.next` folder to the deploy area

### Option 2: Connect to GitHub
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy

## Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will auto-detect Next.js
4. Deploy

## Environment Variables

If you need to add environment variables:

1. Create `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add other variables as needed
```

2. For Vercel, add them in the dashboard under Settings > Environment Variables

## Custom Domain

### Vercel
1. Go to your project dashboard
2. Settings > Domains
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to Site settings > Domain management
2. Add custom domain
3. Update DNS records

## Performance Optimization

The app is already optimized with:
- Next.js 14 with App Router
- Image optimization
- Code splitting
- Static generation where possible
- Tailwind CSS for minimal bundle size

## Monitoring

### Vercel Analytics
- Built-in analytics available
- Enable in project settings

### Google Analytics
Add to `src/app/layout.tsx`:
```tsx
// Add Google Analytics script
```

## Troubleshooting

### Build Errors
- Check Node.js version (18+ required)
- Clear `.next` folder and rebuild
- Check for TypeScript errors

### Deployment Issues
- Ensure all dependencies are in `package.json`
- Check build logs in deployment platform
- Verify environment variables

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Railway: [docs.railway.app](https://docs.railway.app)

