# N. Lee Plumb for Congress

Official campaign website for N. Lee Plumb's congressional campaign.

## Project Overview

This website showcases N. Lee Plumb's background, platform, and campaign information. Built with Next.js and deployed on Vercel, it features:

- Responsive design for all device sizes
- Password-protected preview mode
- Campaign donation capabilities (coming soon)
- Volunteer sign-up functionality
- News and updates section

## Technology Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Prisma with PostgreSQL (planned for donation tracking)
- **Payment Processing**: Stripe (planned for secure donations)
- **Deployment**: Vercel
- **Domain**: Namecheap

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd [repository-name]

# Install dependencies
npm install

# Create necessary environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

### Project Structure

```
/src
  /app                  # Next.js App Router
    /about              # About page
    /platform           # Platform page
    /volunteer          # Volunteer page
    /donate             # Donation page
    /news               # News page
    /contact            # Contact page
    /coming-soon        # Password-protected coming soon page
  /components           # Reusable components
    /layout             # Layout components (Navigation, Footer)
    /ui                 # UI components (buttons, forms, etc.)
  /lib                  # Utility functions and shared code
  /styles               # Global styles
/public                 # Static assets
/prisma                 # Database schema (future)
```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying to Vercel and connecting the nleeplumb.com domain.

## Coming Soon Page

The site currently includes a password-protected coming soon page. The default password is `Launch2024` (change this in production).

## Backup Process

Create a backup of the current version:

```bash
npm run backup
```

This creates a timestamped zip file in the `/backups` directory.

## Future Development

- Donation processing with Stripe
- Campaign events calendar
- Volunteer management system
- Email newsletter integration
- Admin dashboard for campaign staff

## License

All rights reserved. This code is private and confidential.

## Contact

For questions about this project, contact [campaign@nleeplumb.com](mailto:campaign@nleeplumb.com) 