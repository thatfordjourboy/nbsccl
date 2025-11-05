
  # NB Sebastian Commodities Company Ltd.

  Corporate multi-business website for NB Sebastian — Construction, commodities trading, manufacturing, and global trade solutions.

  ## Development

  ```bash
  npm install
  npm run dev
  ```

  ## Deployment to Vercel

  ### Option 1: Vercel Dashboard (Recommended)
  1. Go to [vercel.com](https://vercel.com) and sign in
  2. Click "Add New Project"
  3. Import your GitHub repository: `thatfordjourboy/nbsccl`
  4. Vercel will auto-detect Vite configuration
  5. Add environment variables:
     - `VITE_SITE_URL` = `https://www.nbsccl.com`
     - `VITE_CONTACT_API_URL` = (your contact form endpoint URL, if applicable)
  6. Click "Deploy"

  ### Option 2: Vercel CLI
  ```bash
  npm i -g vercel
  vercel
  ```

  ### Environment Variables
  Set these in Vercel Dashboard → Project Settings → Environment Variables:
  - `VITE_SITE_URL`: Production site URL (e.g., `https://www.nbsccl.com`)
  - `VITE_CONTACT_API_URL`: Contact form API endpoint (optional)

  ### Custom Domain
  After deployment, add your custom domain in Vercel Dashboard → Settings → Domains:
  - `www.nbsccl.com`
  - Vercel will provide DNS records to configure

  ## Features

  - React 18 + TypeScript + Vite
  - React Router with lazy-loaded routes
  - TailwindCSS with shadcn/ui components
  - Form validation with Zod + React Hook Form
  - SEO optimized (meta tags, sitemap, robots.txt, structured data)
  - Security headers and CSP
  - Error boundaries and scroll-to-top on navigation