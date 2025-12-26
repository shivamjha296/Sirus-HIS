# Care360 Dashboard - Component Showcase

## 🎨 Visual Design Reference

This document provides a visual reference for all components used in the Care360 Admin Dashboard.

---

## 📊 Dashboard Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  SIDEBAR (Fixed Left)    │    TOP NAVBAR (Fixed Top)            │
├──────────────────────────┼──────────────────────────────────────┤
│  [Logo] Care360          │  [Search] [•••] [🔔] [👤]            │
│                          ├──────────────────────────────────────┤
│  📊 Dashboard (Active)   │                                       │
│  📅 Appointments         │    MAIN CONTENT AREA                  │
│  👥 Patients             │    ┌────────────────────────────┐     │
│  🩺 Doctors              │    │    Admin Dashboard         │     │
│  👔 Staff                │    └────────────────────────────┘     │
│  💳 Billing              │                                       │
│  📄 Reports              │    [KPI Cards Grid]                   │
│  ⚙️  Settings            │    [140] [85] [55] [68%]             │
│                          │                                       │
│                          │    [Bed Availability] [Key Stats]    │
│                          │                                       │
│                          │    [Doctor Availability Table]        │
│                          │                                       │
│                          │    [Revenue Chart] [Alerts Panel]    │
│                          │                                       │
└──────────────────────────┴──────────────────────────────────────┘
```

---

## 🎯 Component Breakdown

### 1. KPI Cards (Top Row)

**Component**: `KPICard`

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Total Patients   │  │ OPD Patients     │  │ IPD Patients     │  │ Bed Occupancy    │
│ Today            │  │                  │  │                  │  │                  │
│                  │  │                  │  │                  │  │                  │
│      140         │  │       85         │  │       55         │  │       68%        │
│                  │  │                  │  │                  │  │                  │
└──────────────────┘  └──────────────────┘  └──────────────────┘  └──────────────────┘
  Blue-600             Cyan-500             Blue-500             Green-500
```

**Props**:
- `title`: Card label (string)
- `value`: Metric value (string | number)
- `bgColor`: Background color (Tailwind class)
- `textColor`: Text color (default: white)

**Usage**:
```tsx
<KPICard
  title="Total Patients Today"
  value="140"
  bgColor="bg-blue-600"
/>
```

---

### 2. Bed Availability Component

**Component**: `BedAvailability`

```
┌────────────────────────────────────────┐
│  Bed Availability        ← List  →     │
├────────────────────────────────────────┤
│  Ward                            75%   │
│  [████████████████░░░░░░░]            │
│                                        │
│  ICU                             50%   │
│  [████████████░░░░░░░░░░]             │
│                                        │
│  OT                              60%   │
│  [██████████████░░░░░░░░]             │
└────────────────────────────────────────┘
```

**Features**:
- Progress bars with gradient (blue to green)
- Percentage labels
- Navigation controls (List/On-site)

---

### 3. Doctor Availability Table

**Component**: `DoctorAvailability`

```
┌──────────────────────────────────────────────────────────────────────┐
│  Doctor Availability                            ← View  → Online     │
├──────────────────────────────────────────────────────────────────────┤
│  Name           Specialty         Status    Next Patient    Action   │
├──────────────────────────────────────────────────────────────────────┤
│  👤 Rahul       Dr. Rahul        ● Online   🎥 Aman Patel    [View   │
│     Mehta       Mehta                       Age 61 10:30AM    EMR]   │
├──────────────────────────────────────────────────────────────────────┤
│  👤 Sneha       Dr. Sneha        ○ Offline  📅 Scheduled     [Online]│
│     Kapoor      Kapoor                                                │
├──────────────────────────────────────────────────────────────────────┤
│  👤 Michael     Dr. Michael      ● Online   1pm 10:30 AM     [View   │
│     Green       Green                                         EMR]   │
└──────────────────────────────────────────────────────────────────────┘
```

**Features**:
- Avatar images with fallback initials
- Status badges (green = online, gray = offline)
- Next patient information with time badges
- Action buttons (View EMR / Online)
- Video call indicators

---

### 4. Revenue Overview Chart

**Component**: `RevenueChart`

```
┌────────────────────────────────────────────────────────────┐
│  Revenue Overview            [Today] [Week] [Month]        │
├────────────────────────────────────────────────────────────┤
│  $12k  ┤                                          ╭─╮      │
│        ┤                                    ╭────╯ │      │
│  $11k  ┤                          ╭───────╯       │      │
│        ┤                    ╭────╯                │      │
│  $10k  ┤              ╭────╯                      │      │
│        ┤        ╭────╯                            │      │
│  $9.5k ┤───────╯                                  │      │
│        └────────────────────────────────────────────      │
│        Wed Wed Thu Wed Sas True Thu Fri Sat Wed Tue      │
└────────────────────────────────────────────────────────────┘
```

**Features**:
- Interactive area chart (Recharts)
- Blue-to-green gradient fill
- Filter buttons (Today, Week, Month)
- Tooltip on hover
- Smooth curves

---

### 5. Alerts & Notifications Panel

**Component**: `AlertsPanel`

```
┌────────────────────────────────────────────────────┐
│  Alerts & Notifications              View All →    │
├────────────────────────────────────────────────────┤
│  🔴  Emergency Cases                  10 mins ago ℹ│
│     3 new emergency cases reported                 │
│                                                    │
│  📦  Low Inventory                    20 mins ago ℹ│
│     Inventory running low in Pharmacy              │
│                                                    │
│  📋  Claim Rejections                 30 mins ago ℹ│
│     5 Insurance Claims rejected                    │
└────────────────────────────────────────────────────┘
```

**Features**:
- Icon badges with colored backgrounds
- Alert titles and descriptions
- Timestamps
- Info icon for details
- Color-coded by type (red, blue)

---

## 🎨 Color Palette

### Primary Colors
```
Blue-600:  #2563eb  ████  Primary actions, active states
Cyan-500:  #06b6d4  ████  Secondary actions, highlights
Green-500: #22c55e  ████  Success states, positive metrics
```

### Neutral Colors
```
Slate-50:  #f8fafc  ████  Background
Slate-100: #f1f5f9  ████  Hover states
Slate-200: #e2e8f0  ████  Borders
Slate-600: #475569  ████  Secondary text
Slate-900: #0f172a  ████  Primary text
```

### Status Colors
```
Green-100/700: ████  Online status
Red-100/600:   ████  Emergency alerts
Yellow-100/800:████  Time badges
```

---

## 📏 Spacing System

```
p-6       24px   Card padding
p-4       16px   Section padding
p-3       12px   Button padding
gap-6     24px   Grid gaps
gap-4     16px   Component gaps
gap-2     8px    Icon gaps
```

---

## 🔤 Typography Scale

```
text-2xl    24px   Page titles (Admin Dashboard)
text-xl     20px   Logo (Care360)
text-lg     18px   Card titles
text-sm     14px   Labels, descriptions
text-xs     12px   Badges, timestamps
```

---

## 🧩 Component Hierarchy

```
app/page.tsx (Main Dashboard)
├── Sidebar
│   ├── Logo (Image + Text)
│   └── Menu Items (8 items)
│
├── Navbar
│   ├── Search Input
│   ├── More Menu Button
│   ├── Notification Bell (with badge)
│   └── Admin Avatar
│
└── Main Content
    ├── Page Title
    │
    ├── KPI Cards Grid (4 columns)
    │   ├── Total Patients Today (Blue)
    │   ├── OPD Patients (Cyan)
    │   ├── IPD Patients (Blue)
    │   └── Bed Occupancy (Green)
    │
    ├── Bed Availability & Key Stats (2 columns)
    │   ├── Bed Availability Card
    │   └── Key Statistics Card
    │
    ├── Doctor Availability Table (Full width)
    │
    └── Revenue & Alerts (2 columns)
        ├── Revenue Overview Chart
        └── Alerts & Notifications Panel
```

---

## 🎭 Interactive States

### Buttons
```
Default:     bg-blue-600 text-white
Hover:       bg-blue-700
Active:      bg-blue-800
Disabled:    opacity-50 cursor-not-allowed
```

### Sidebar Menu Items
```
Active:      bg-blue-50 text-blue-600
Default:     text-slate-600
Hover:       bg-slate-100 text-slate-900
```

### Cards
```
Default:     shadow-sm
Hover:       shadow-md (optional)
```

---

## 📱 Responsive Breakpoints

```
Mobile:      < 640px    Single column layout
Tablet:      640px+     2-column grid
Desktop:     1024px+    3-4 column grid
Large:       1280px+    Full 4-column grid
```

### Grid Behavior
```
KPI Cards:      4 cols → 2 cols → 1 col
Main Content:   2 cols → 1 col
Sidebar:        Fixed → Hidden (mobile menu)
```

---

## 🎯 Icon Usage

**Lucide React Icons**:

```tsx
LayoutDashboard  // Dashboard menu
Calendar         // Appointments
Users           // Patients  
Stethoscope     // Doctors
UserCog         // Staff
CreditCard      // Billing
FileText        // Reports
Settings        // Settings
Search          // Search input
Bell            // Notifications
MoreVertical    // More menu
AlertCircle     // Emergency alerts
Package         // Inventory alerts
FileX           // Insurance alerts
Video           // Video consultation
Info            // Information
```

---

## 💡 Best Practices

### Component Usage
1. **Always use the `cn()` utility** for conditional classes
2. **Keep components small and focused** on single responsibility
3. **Use TypeScript interfaces** for prop definitions
4. **Maintain consistent spacing** using Tailwind utilities

### Styling Guidelines
1. **Use semantic color names** (primary, secondary, success)
2. **Follow the spacing system** (multiples of 4px)
3. **Maintain accessibility** (ARIA labels, keyboard navigation)
4. **Test responsive behavior** at all breakpoints

### Performance
1. **Use Next.js Image component** for logo and avatars
2. **Lazy load heavy components** (charts, tables)
3. **Memoize expensive calculations**
4. **Keep bundle size minimal**

---

## 🚀 Quick Component Reference

| Component | File | Purpose |
|-----------|------|---------|
| KPICard | `components/dashboard/kpi-card.tsx` | Display metrics |
| BedAvailability | `components/dashboard/bed-availability.tsx` | Show bed status |
| DoctorAvailability | `components/dashboard/doctor-availability.tsx` | Doctor table |
| RevenueChart | `components/dashboard/revenue-chart.tsx` | Revenue visualization |
| AlertsPanel | `components/dashboard/alerts-panel.tsx` | Notifications |
| Sidebar | `components/layout/sidebar.tsx` | Navigation |
| Navbar | `components/layout/navbar.tsx` | Top bar |

---

**Care360** - Component Design System
Version 1.0 - Built with Next.js 14 & Tailwind CSS
