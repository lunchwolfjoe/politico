# Deployment Guide for N. Lee Plumb Campaign Website

This document provides step-by-step instructions for deploying the campaign website to Vercel and connecting it to the nleeplumb.com domain on Namecheap.

## Table of Contents
1. [Backup Process](#backup-process)
2. [Vercel Deployment](#vercel-deployment)
3. [Domain Configuration](#domain-configuration)
4. [Password Protection](#password-protection)
5. [Launch Process](#launch-process)
6. [Troubleshooting](#troubleshooting)

## Backup Process

Before deploying, create a backup of the current version:

```bash
# Install dependencies if not already installed
npm install

# Create backup
npm run backup
```

This will create a zip file in the `backups` directory with the version and timestamp.

## Vercel Deployment

### Step 1: Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### Step 2: Prepare for Deployment

Make sure all changes are committed to your Git repository (GitHub, GitLab, or Bitbucket).

### Step 3: Deploy via Vercel Dashboard

1. Go to [Vercel](https://vercel.com/) and sign up or log in
2. Click "Add New" > "Project"
3. Import your Git repository
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
   - Install Command: `npm install`
5. Add environment variables if needed
6. Click "Deploy"

### Alternative: Deploy via Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Domain Configuration

### Step 1: Add Domain in Vercel

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Enter `nleeplumb.com` and click "Add"
3. Vercel will provide the necessary DNS records to configure

### Step 2: Configure Namecheap DNS

1. Log in to your Namecheap account
2. Go to "Domain List" and click "Manage" next to nleeplumb.com
3. Click the "Advanced DNS" tab
4. Add the following records provided by Vercel:

#### Option 1: Using Namecheap DNS

Add these records to Namecheap:

| Type  | Host | Value                   | TTL    |
|-------|------|-------------------------|--------|
| A     | @    | 76.76.21.21             | 30 min |
| CNAME | www  | cname.vercel-dns.com.   | 30 min |

#### Option 2: Using Vercel DNS (Recommended)

1. In Namecheap, go to "Domain" tab
2. Under "Nameservers", select "Custom DNS"
3. Add the following nameservers:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
4. Save changes

### Step 3: Verify Domain

1. Return to Vercel domains settings
2. Wait for domain verification (may take up to 48 hours, but usually completes within minutes)
3. Once verified, Vercel will automatically issue an SSL certificate

## Password Protection

The site is configured with a password protection layer via:

1. The `src/middleware.ts` file redirects all traffic to `/coming-soon`
2. The `/coming-soon` page requires a password (`Launch2024` by default)
3. Upon successful authentication, a cookie is set for 24 hours

To change the password:

1. Edit `src/app/coming-soon/page.tsx`
2. Modify the `correctPassword` variable
3. Redeploy the site

## Launch Process

When ready to launch the site publicly:

1. Create another backup using `npm run backup`
2. Remove or modify the middleware redirect:
   - Option 1: Delete `src/middleware.ts` and redeploy
   - Option 2: Update the middleware to only protect certain sections (e.g., admin areas)
3. Redeploy the site

## Troubleshooting

### Domain Issues

If your domain isn't connecting properly:

1. Verify DNS propagation using [dnschecker.org](https://dnschecker.org/)
2. Check Namecheap DNS settings match Vercel's requirements
3. Ensure HTTPS is properly configured in Vercel

### Deployment Issues

If deployment fails:

1. Check the build logs in Vercel
2. Verify all dependencies are correctly installed
3. Check that environment variables are set correctly
4. Try the deployment again after fixing any identified issues

### Contact Support

If issues persist:
- Vercel Support: [vercel.com/help](https://vercel.com/help)
- Namecheap Support: [namecheap.com/support](https://namecheap.com/support)

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Namecheap Domain Documentation](https://www.namecheap.com/support/knowledgebase/category/34/domains/) 