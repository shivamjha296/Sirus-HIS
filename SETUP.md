# Care360 Hospital Information System - Setup Guide

## Quick Start Instructions

Follow these steps to get your Care360 Admin Dashboard up and running:

### Step 1: Install Dependencies

Open a terminal in the project directory and run:

```powershell
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui components
- Recharts for data visualization
- Lucide React for icons

### Step 2: Start Development Server

Once installation is complete, start the development server:

```powershell
npm run dev
```

### Step 3: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the Care360 Admin Dashboard with:
- ✅ Sidebar navigation with Care360 logo
- ✅ Top navbar with search and notifications
- ✅ KPI cards showing patient statistics
- ✅ Bed availability component
- ✅ Doctor availability table
- ✅ Revenue overview chart
- ✅ Alerts & notifications panel

## Project Features

### 🎨 Design System
- **Primary Color**: Blue-600 (Hospital Trust)
- **Secondary Color**: Green-500 (Health & Wellness)
- **Background**: Slate-50 (Clean & Professional)
- **Typography**: Inter font (Modern & Readable)
- **Cards**: Rounded-xl with shadow-sm (Elegant)

### 📱 Responsive Layout
- Mobile-first approach
- Adapts to all screen sizes
- Touch-friendly interface

### 🧩 Component Architecture
All components are modular and reusable:

**Layout Components:**
- `Sidebar`: Fixed left navigation with logo and menu items
- `Navbar`: Top bar with search, notifications, and avatar

**Dashboard Components:**
- `KPICard`: Displays key performance indicators
- `BedAvailability`: Shows bed occupancy with progress bars
- `DoctorAvailability`: Table view of doctor status
- `RevenueChart`: Interactive area chart with filters
- `AlertsPanel`: Real-time notifications and alerts

**UI Components (shadcn/ui):**
- Card, Button, Badge, Avatar, Input, Progress

### 🎯 Current State
This is a **static UI implementation** with:
- ✅ Complete visual design
- ✅ Responsive layout
- ✅ Interactive components
- ✅ Professional styling
- ❌ No backend integration (ready for your API)
- ❌ No authentication (add as needed)
- ❌ No database connection (implement based on your needs)

## Next Steps for Development

### 1. Add Backend Integration
Connect to your hospital's existing systems or build new APIs:

```typescript
// Example: Fetch real patient data
async function fetchPatientStats() {
  const response = await fetch('/api/patients/stats')
  return response.json()
}
```

### 2. Implement Authentication
Add user authentication for admin access:
- NextAuth.js for authentication
- Role-based access control
- Secure routes and API endpoints

### 3. Connect to Database
Integrate with your preferred database:
- PostgreSQL for relational data
- MongoDB for flexible schemas
- Firebase for real-time updates

### 4. Add Real-time Updates
Implement live data updates:
- WebSocket connections
- Server-sent events
- Polling for notifications

### 5. Enhance Features
Extend functionality:
- Patient management system
- Appointment scheduling
- Doctor roster management
- Billing and invoicing
- Report generation
- EMR integration

## Customization Guide

### Changing Colors
Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "your-color-here",
      },
    },
  },
}
```

### Modifying Components
All components are in the `components/` directory:
- Edit styles using Tailwind classes
- Add new props for dynamic behavior
- Extend functionality as needed

### Adding New Pages
Create new pages in the `app/` directory:

```typescript
// app/patients/page.tsx
export default function PatientsPage() {
  return <div>Patients Page</div>
}
```

## Troubleshooting

### Port Already in Use
If port 3000 is occupied, use a different port:
```powershell
npm run dev -- -p 3001
```

### Module Not Found Errors
Clear the cache and reinstall:
```powershell
Remove-Item -Recurse -Force node_modules, .next
npm install
```

### TypeScript Errors
Ensure TypeScript is properly configured:
```powershell
npx tsc --noEmit
```

## Building for Production

When ready to deploy:

```powershell
# Build the application
npm run build

# Start production server
npm start
```

## Deployment Options

- **Vercel**: Optimized for Next.js (recommended)
- **Netlify**: Easy deployment with CI/CD
- **AWS**: Full control over infrastructure
- **Docker**: Containerized deployment

## Support & Documentation

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Recharts**: https://recharts.org

## File Structure Overview

```
Sirus-HIS/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles with CSS variables
│   ├── layout.tsx               # Root layout with Inter font
│   └── page.tsx                 # Main dashboard page
│
├── components/
│   ├── dashboard/               # Dashboard-specific components
│   │   ├── alerts-panel.tsx    # Notifications and alerts
│   │   ├── bed-availability.tsx # Bed occupancy tracking
│   │   ├── doctor-availability.tsx # Doctor status table
│   │   ├── kpi-card.tsx        # KPI card component
│   │   └── revenue-chart.tsx   # Revenue area chart
│   │
│   ├── layout/                  # Layout components
│   │   ├── navbar.tsx          # Top navigation bar
│   │   └── sidebar.tsx         # Left sidebar navigation
│   │
│   └── ui/                      # shadcn/ui components
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── progress.tsx
│
├── lib/
│   └── utils.ts                 # Utility functions (cn)
│
├── public/
│   └── images/
│       └── logo.png            # Care360 logo
│
├── .gitignore
├── components.json              # shadcn/ui config
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies
├── postcss.config.js            # PostCSS config
├── README.md                    # Project documentation
├── SETUP.md                     # This file
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

---

**Built with ❤️ for Healthcare**

Care360 - Empowering Healthcare Management
