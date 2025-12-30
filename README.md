# Winners Widows & Widowers International

A professional nonprofit website for Winners Widows & Widowers International, an organization empowering widows and widowers in rural Kenya through sustainable livelihood programs.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database/Auth/Storage:** Supabase
- **PDF Generation:** @react-pdf/renderer
- **Email:** Resend
- **Excel Export:** xlsx

## Getting Started

### 1. Clone and Install

```bash
cd winners-widows-international
npm install
```

### 2. Set Up Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.local.example .env.local
```

Required environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=admin@example.com
```

### 3. Set Up Supabase Database

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor in your Supabase dashboard
3. Run the contents of `supabase-schema.sql` to create all tables, indexes, and RLS policies
4. Create a storage bucket named `uploads` for photo uploads

### 4. Create Admin User

In your Supabase dashboard:
1. Go to Authentication > Users
2. Click "Add User" and create an admin user with email/password

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── page.tsx                 # Homepage
├── about/                   # About page
├── team/                    # Team page
├── programs/                # Programs page
├── impact/                  # Impact/Communities page
├── get-involved/            # Get Involved page
├── donate/                  # Donate page
├── transparency/            # Transparency page
├── news/                    # News listing & articles
├── contact/                 # Contact page
├── admin/                   # Admin dashboard
│   ├── login/              # Admin login
│   ├── donations/          # Manage donations
│   ├── allocations/        # Manage fund allocations
│   ├── members/            # Manage members
│   └── reports/            # Generate reports
└── api/                     # API routes
    ├── contact/            # Contact form submission
    └── donate/             # Donation submission

components/
├── ui/                      # Reusable UI components
├── layout/                  # Header, Footer, Navigation
├── sections/                # Page sections (Hero, Stats, etc.)
├── forms/                   # Form components
└── admin/                   # Admin components

lib/
├── supabase/               # Supabase client setup
├── utils.ts                # Utility functions
├── constants.ts            # Organization data & constants
├── pdf-generator.tsx       # Receipt PDF generation
├── email.ts                # Resend email integration
└── excel-export.ts         # Excel report export

types/
└── index.ts                # TypeScript type definitions
```

## Key Features

### Public Website
- Responsive design with warm, dignified aesthetic
- Hero sections with Unsplash placeholder images
- Statistics banners and program cards
- Contact and donation forms
- News/blog section
- Google Maps integration

### Admin Dashboard
- Secure authentication with Supabase Auth
- Donation management with verification workflow
- Fund allocation tracking
- Member registry by camp
- Report generation with Excel export
- Receipt PDF generation

## Customization

### Brand Colors (in `tailwind.config.ts`)
- **Primary:** Deep Burgundy (#722F37)
- **Secondary:** Soft Gold (#D4AF37)
- **Accent:** Forest Green (#228B22)

### Organization Data (in `lib/constants.ts`)
Update the constants file with actual:
- Contact information
- Social media links
- Payment method details
- Board member bios

### Placeholder Content
Search for `[PLACEHOLDER]` comments throughout the codebase to find content that needs to be replaced with actual:
- Stories and testimonials
- Photos
- Timeline dates
- Contact details

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to update `NEXT_PUBLIC_SITE_URL` to your production domain.

## Database Schema

The database includes the following tables:

- `donations` - Verified donation records
- `donation_submissions` - Pending donation confirmations
- `allocations` - Fund allocation records
- `members` - Beneficiary member registry
- `allocation_beneficiaries` - Junction table for specific allocations
- `contact_submissions` - Contact form entries

All tables have Row Level Security (RLS) enabled with appropriate policies.

## Support

For questions or support, contact the development team.

---

Built with love for Winners Widows & Widowers International
