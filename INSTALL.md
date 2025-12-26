# 🎯 Installation & Running Guide

## Step-by-Step Installation

### 1. Open Terminal
Press `Ctrl + `` (backtick) or go to Terminal → New Terminal in VS Code

### 2. Navigate to Project (if needed)
```powershell
cd d:\Desktop\Sirus-HIS
```

### 3. Install Dependencies
```powershell
npm install
```

**This will install:**
- ✅ Next.js 14.2.3
- ✅ React 18.3.1
- ✅ Tailwind CSS 3.4.1
- ✅ TypeScript 5
- ✅ Radix UI components
- ✅ Recharts 2.12.0
- ✅ Lucide React icons
- ✅ And all other dependencies

**Expected time:** 2-3 minutes (depending on internet speed)

### 4. Start Development Server
```powershell
npm run dev
```

**You should see:**
```
> care360-his@0.1.0 dev
> next dev

  ▲ Next.js 14.2.3
  - Local:        http://localhost:3000
  - Environments: .env

 ✓ Ready in 2.5s
```

### 5. Open Browser
Navigate to: **http://localhost:3000**

---

## 🎉 What You Should See

### The Dashboard Will Display:

#### 🔝 Top Navigation Bar
- **Left**: Search bar with placeholder "Search Dashboard"
- **Right**: More options (•••), Notification bell 🔔 (with red dot), Admin avatar

#### 📊 Left Sidebar (Fixed)
- **Care360 Logo** (blue + green)
- **Active Menu Items:**
  - 📊 Dashboard (highlighted in blue)
  - 📅 Appointments
  - 👥 Patients
  - 🩺 Doctors
  - 👔 Staff
  - 💳 Billing
  - 📄 Reports
  - ⚙️ Settings

#### 📈 Main Dashboard Content

**Row 1 - KPI Cards (4 boxes)**
1. **Total Patients Today** - 140 (Blue background)
2. **OPD Patients** - 85 (Cyan background)
3. **IPD Patients** - 55 (Blue background)
4. **Bed Occupancy** - 68% (Green background)

**Row 2 - Split Layout**
- **Left**: Bed Availability with progress bars
  - Ward: 73%
  - ICU: 50%
  - OT: 60%
- **Right**: Key Statistics with doctor list

**Row 3 - Doctor Table**
Shows 3 doctors with:
- Avatar images
- Name and specialty
- Online/Offline status badges
- Next patient information
- Action buttons

**Row 4 - Charts and Alerts**
- **Left**: Revenue Overview (Area chart with blue-green gradient)
- **Right**: Alerts & Notifications
  - Emergency Cases (10 mins ago)
  - Low Inventory (20 mins ago)
  - Claim Rejections (30 mins ago)

---

## 🛠️ Troubleshooting

### Problem: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Problem: "Port 3000 is already in use"
**Solution**: Use a different port:
```powershell
npm run dev -- -p 3001
```

### Problem: Module errors after installation
**Solution**: Clear and reinstall:
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

### Problem: TypeScript errors
**Solution**: Check configuration:
```powershell
npx tsc --noEmit
```

### Problem: Styles not loading
**Solution**: Clear Next.js cache:
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

---

## 📁 Files Created

Here's everything that was created for you:

### Configuration Files (7 files)
- ✅ `package.json` - Dependencies and scripts
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `tailwind.config.ts` - Tailwind CSS setup
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `next.config.js` - Next.js configuration
- ✅ `components.json` - shadcn/ui configuration
- ✅ `.gitignore` - Git ignore rules

### App Files (3 files)
- ✅ `app/layout.tsx` - Root layout with Inter font
- ✅ `app/page.tsx` - Main dashboard page
- ✅ `app/globals.css` - Global styles with CSS variables

### Layout Components (2 files)
- ✅ `components/layout/sidebar.tsx` - Left sidebar navigation
- ✅ `components/layout/navbar.tsx` - Top navigation bar

### Dashboard Components (5 files)
- ✅ `components/dashboard/kpi-card.tsx` - KPI cards
- ✅ `components/dashboard/bed-availability.tsx` - Bed tracking
- ✅ `components/dashboard/doctor-availability.tsx` - Doctor table
- ✅ `components/dashboard/revenue-chart.tsx` - Revenue chart
- ✅ `components/dashboard/alerts-panel.tsx` - Alerts panel

### UI Components (7 files)
- ✅ `components/ui/card.tsx` - Card component
- ✅ `components/ui/button.tsx` - Button component
- ✅ `components/ui/badge.tsx` - Badge component
- ✅ `components/ui/input.tsx` - Input component
- ✅ `components/ui/avatar.tsx` - Avatar component
- ✅ `components/ui/progress.tsx` - Progress bar

### Utilities (1 file)
- ✅ `lib/utils.ts` - Utility functions (cn helper)

### Documentation (4 files)
- ✅ `README.md` - Project overview
- ✅ `SETUP.md` - Comprehensive setup guide
- ✅ `QUICKSTART.md` - Quick start reference
- ✅ `COMPONENTS.md` - Component showcase
- ✅ `INSTALL.md` - This installation guide

### Assets (1 file)
- ✅ `public/images/logo.png` - Care360 logo (provided by you)

**Total: 30 files created** ✨

---

## ✅ Verification Checklist

After starting the server, verify:

- [ ] Dashboard loads without errors
- [ ] All 4 KPI cards display correctly
- [ ] Sidebar shows Care360 logo and all 8 menu items
- [ ] Top navbar has search, notifications, and avatar
- [ ] Bed availability shows 3 progress bars
- [ ] Doctor table shows 3 doctors with status badges
- [ ] Revenue chart displays with gradient
- [ ] Alerts panel shows 3 notifications
- [ ] Page is responsive (try resizing browser)
- [ ] No console errors in browser DevTools (F12)

---

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.ts` and `app/globals.css`

### Modify Data
Edit the data arrays in component files:
- KPI values in `app/page.tsx`
- Bed data in `components/dashboard/bed-availability.tsx`
- Doctor data in `components/dashboard/doctor-availability.tsx`
- Revenue data in `components/dashboard/revenue-chart.tsx`
- Alert data in `components/dashboard/alerts-panel.tsx`

### Add New Pages
Create new files in the `app/` directory:
```
app/
├── patients/
│   └── page.tsx
├── doctors/
│   └── page.tsx
└── appointments/
    └── page.tsx
```

---

## 🚀 Next Steps After Installation

1. **Explore the Dashboard**
   - Click through different sections
   - Test responsive behavior
   - Check all interactive elements

2. **Customize the Data**
   - Replace static data with your actual data
   - Add more KPI cards if needed
   - Customize doctor and patient information

3. **Connect to Backend**
   - Create API routes in `app/api/`
   - Fetch real data from your database
   - Add authentication

4. **Deploy**
   - Build for production: `npm run build`
   - Deploy to Vercel, Netlify, or your server

---

## 📞 Need Help?

1. **Documentation**: Check [SETUP.md](./SETUP.md) for detailed guide
2. **Components**: See [COMPONENTS.md](./COMPONENTS.md) for component details
3. **Quick Reference**: See [QUICKSTART.md](./QUICKSTART.md) for commands

---

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **TypeScript**: https://www.typescriptlang.org/docs
- **Recharts**: https://recharts.org/en-US/guide

---

**Congratulations! Your Care360 Dashboard is ready to use! 🎉**

Start customizing and building your Hospital Information System!
