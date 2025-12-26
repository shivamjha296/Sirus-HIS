# 🏥 Care360 Hospital Information System - Quick Start

## ⚡ Get Started in 3 Steps

### 1️⃣ Install Dependencies
```powershell
npm install
```

### 2️⃣ Run Development Server
```powershell
npm run dev
```

### 3️⃣ Open Browser
Navigate to: **http://localhost:3000**

---

## 🎯 What's Included

✅ **Responsive Admin Dashboard**
- Sidebar navigation with Care360 branding
- Top navbar with search & notifications
- 4 KPI cards (Patients, OPD, IPD, Bed Occupancy)
- Bed availability tracking
- Doctor availability table
- Revenue overview chart
- Alerts & notifications panel

✅ **Modern Tech Stack**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Recharts for visualization
- Lucide React icons

✅ **Production Ready**
- Clean component architecture
- Fully responsive design
- Hospital-grade UI/UX
- Enterprise styling

---

## 📁 Project Structure

```
components/
├── dashboard/          # Dashboard components
│   ├── kpi-card.tsx
│   ├── bed-availability.tsx
│   ├── doctor-availability.tsx
│   ├── revenue-chart.tsx
│   └── alerts-panel.tsx
├── layout/            # Layout components
│   ├── sidebar.tsx
│   └── navbar.tsx
└── ui/                # Reusable UI components

app/
├── page.tsx           # Main dashboard page
├── layout.tsx         # Root layout
└── globals.css        # Global styles
```

---

## 🎨 Design System

- **Primary**: Blue-600 (Trust & Professionalism)
- **Secondary**: Green-500 (Health & Growth)
- **Background**: Slate-50 (Clean & Modern)
- **Font**: Inter (System UI fallback)
- **Cards**: rounded-xl with shadow-sm

---

## 🚀 Available Scripts

```powershell
# Development
npm run dev          # Start dev server on port 3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🔧 Common Tasks

### Change Port
```powershell
npm run dev -- -p 3001
```

### Clear Cache
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

### Build & Preview
```powershell
npm run build
npm start
```

---

## 📚 Documentation

- **Full Setup Guide**: See [SETUP.md](./SETUP.md)
- **Project Details**: See [README.md](./README.md)

---

## ✨ Features Overview

### Sidebar Menu
- Dashboard (active)
- Appointments
- Patients
- Doctors
- Staff
- Billing
- Reports
- Settings

### Dashboard Sections
1. **KPI Cards** - Key metrics at a glance
2. **Bed Availability** - Ward, ICU, OT occupancy
3. **Doctor Status** - Online/offline with next patient info
4. **Revenue Chart** - Interactive area chart
5. **Alerts** - Emergency, inventory, insurance notifications

---

## 💡 Next Steps

1. **Backend Integration**: Connect to your APIs
2. **Authentication**: Add user login/logout
3. **Database**: Connect to your data source
4. **Real-time**: Implement live updates
5. **Deploy**: Push to Vercel, Netlify, or your server

---

## 🐛 Troubleshooting

**Issue**: Module not found
**Fix**: 
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

**Issue**: Port in use
**Fix**: 
```powershell
npm run dev -- -p 3001
```

**Issue**: TypeScript errors
**Fix**: 
```powershell
npx tsc --noEmit
```

---

## 📞 Support

Need help? Check the detailed guides:
- [SETUP.md](./SETUP.md) - Comprehensive setup guide
- [README.md](./README.md) - Project overview

---

**Care360** - Modern Hospital Information System Dashboard
Built with Next.js 14, Tailwind CSS & shadcn/ui
