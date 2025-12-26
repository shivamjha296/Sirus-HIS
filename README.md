# Care360 Hospital Information System

A modern, responsive Admin Dashboard UI for Hospital Information System built with Next.js 14, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern UI**: Clean, hospital-grade interface with blue-600 and green-500 color scheme
- **Responsive Design**: Fully responsive layout that works on all devices
- **Component-Based**: Reusable components built with shadcn/ui
- **Real-time Dashboard**: KPI cards, bed availability, doctor status, and revenue tracking
- **Enterprise-Grade**: Professional design suitable for healthcare environments

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Dashboard page
├── components/
│   ├── dashboard/         # Dashboard-specific components
│   │   ├── alerts-panel.tsx
│   │   ├── bed-availability.tsx
│   │   ├── doctor-availability.tsx
│   │   ├── kpi-card.tsx
│   │   └── revenue-chart.tsx
│   ├── layout/            # Layout components
│   │   ├── navbar.tsx
│   │   └── sidebar.tsx
│   └── ui/                # shadcn/ui components
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── progress.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── public/
    └── images/
        └── logo.png       # Care360 logo
```

## Dashboard Features

### KPI Cards
- Total Patients Today
- OPD Patients
- IPD Patients  
- Bed Occupancy Percentage

### Bed Availability
- Real-time bed occupancy tracking
- Visual progress bars for Ward, ICU, OT
- Color-coded availability indicators

### Doctor Availability
- Live doctor status (online/offline)
- Next patient information
- Quick access to EMR
- Specialty and scheduling info

### Revenue Overview
- Interactive area chart
- Multiple time period filters (Today, Week, Month)
- Blue-green gradient visualization

### Alerts & Notifications
- Emergency case alerts
- Inventory warnings
- Insurance claim notifications
- Real-time timestamps

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts` and `app/globals.css`:
- Primary: blue-600
- Secondary: green-500
- Background: slate-50

### Components
All components are customizable and located in the `components/` directory.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues and questions, please create an issue in the repository.
