# 🏥 Care360 Dashboard Guide - Three Roles, Three Interfaces

## 🎯 Overview

Care360 now features **three distinct, role-based dashboards** designed for different user types in your Hospital Information System:

1. **Hospital Admin Dashboard** (`/admin`) - System-wide management
2. **Doctor Dashboard** (`/doctor`) - Clinical workflow
3. **Patient Dashboard** (`/patient`) - Patient-facing portal

---

## 📊 1. Hospital Admin Dashboard

**URL**: `http://localhost:3000/admin`

**Purpose**: Centralized management of hospitals, infrastructure, staff, and operations

### Key Sections:

#### A. **Top Metrics (4 KPI Cards)**
- **Total Hospitals**: 12 hospitals (with growth indicator)
- **Total Staff**: 1,248 staff members across all hospitals
- **Total Patients**: 8,456 registered patients
- **Active Cases**: 342 ongoing medical cases

#### B. **Hospital List (Main Section)**
Displays all registered hospitals with:
- Hospital name and location
- Bed capacity
- Number of doctors
- Status badge (Active/Pending)
- "Manage" button for each hospital

**Sample Hospitals**:
- Apollo Hospital - Delhi (450 beds, 120 doctors)
- Max Healthcare - Mumbai (380 beds, 95 doctors)
- Fortis Hospital - Bangalore (320 beds, 85 doctors)
- Manipal Hospital - Chennai (290 beds, 78 doctors)
- AIIMS - Hyderabad (500 beds, 145 doctors)

#### C. **Infrastructure Overview (Right Sidebar)**
Quick stats for:
- Total Beds: 1,940
- ICU Beds: 245
- OT Rooms: 48
- Lab Units: 36

#### D. **Quick Actions**
- Add Hospital
- Manage Staff
- Add Department
- Update Resources

#### E. **Staff Distribution**
Breakdown by role:
- **523 Doctors** (Senior consultants)
- **412 Nurses** (Medical staff)
- **198 Lab Technicians** (Technical staff)
- **115 Support Staff** (Administrative)

### Design Features:
✅ Gradient hospital icons (blue to green)
✅ Color-coded metrics (blue, green, cyan, purple)
✅ Border-left accent on KPI cards
✅ Hover effects on hospital cards
✅ Professional data tables

---

## 👨‍⚕️ 2. Doctor Dashboard

**URL**: `http://localhost:3000/doctor`

**Purpose**: Clinical workflow management for doctors

### Key Sections:

#### A. **Welcome Header**
- Personalized greeting: "Welcome back, Dr. Mehta"
- Today's summary: "12 appointments today • 3 pending cases"
- Quick actions: Add Notes, New Patient

#### B. **Top Metrics (4 KPI Cards)**
- **Today's Appointments**: 12 (4 completed)
- **Active Patients**: 48 (OPD + IPD)
- **Pending Cases**: 3 (requires attention)
- **Consultations**: 156 this month

#### C. **Today's Appointments (Main Section)**
Real-time appointment list with:
- Time slot
- Patient name and age
- MRN (Medical Record Number)
- Visit type (Follow-up, New Patient, Emergency, Tele-Consultation)
- Status badges:
  - **Completed** (green)
  - **In Progress** (blue)
  - **Waiting** (orange)
  - **Scheduled** (gray)
- Action buttons: Start, Continue, View EMR

**Color-coded appointment cards**:
- Green background = Completed
- Blue background = In Progress
- Orange background = Waiting
- Gray background = Scheduled

#### D. **Active Cases**
IPD patient list showing:
- Patient name with avatar
- Diagnosis (e.g., Type 2 Diabetes, Post-operative Care)
- Ward/ICU location
- Days in hospital
- Status: Stable, Critical, Recovering

#### E. **Quick Actions (Right Sidebar)**
- Add Patient Notes
- View EMR History
- Schedule Follow-up
- Start Tele-Consult

#### F. **Pending Tasks**
Alerts for:
- 3 Prescription reviews pending
- 2 Discharge summaries to complete
- 5 New lab reports available

#### G. **This Week Overview**
- Total Appointments: 58
- Average Wait Time: 12 minutes

### Design Features:
✅ Color-coded appointment cards by status
✅ Avatar with patient initials
✅ Video icon for tele-consultations
✅ Critical case highlighting (red badge)
✅ Task alerts with colored backgrounds

---

## 🧑‍⚤ 3. Patient Dashboard

**URL**: `http://localhost:3000/patient`

**Purpose**: Patient portal for appointments, reports, and health management

### Key Sections:

#### A. **Welcome Header**
- Patient avatar (large, with gradient background)
- Name: "Welcome, Rajesh Kumar"
- MRN and last visit date
- Quick actions: Tele-Consult, Book Appointment

#### B. **Health Overview (4 KPI Cards)**
- **Upcoming**: 2 appointments
- **Active**: 3 prescriptions
- **Pending**: 5 lab reports
- **Health Score**: 85 (Good ✓)

#### C. **Upcoming Appointments**
Shows confirmed appointments with:
- Doctor name and specialty
- Date and time
- Appointment type
- Status badge
- Action buttons: Details, Cancel

**Sample Appointments**:
- Dr. Priya Sharma (Cardiologist) - Dec 28, 10:30 AM
- Dr. Amit Verma (General Physician) - Jan 05, 2:00 PM

#### D. **Lab Reports**
List of medical tests with:
- Test name (CBC, Lipid Profile, Blood Sugar, etc.)
- Date
- Status (Available/Processing)
- Critical flag for abnormal results
- Download button
- **"Ask AI" button** for lab report queries

**Reports shown**:
- Complete Blood Count (CBC)
- Lipid Profile
- Blood Sugar (Fasting) - **Critical**
- Thyroid Function Test
- Kidney Function Test (Pending)

#### E. **Medical History**
Past diagnoses and surgeries:
- Diabetes Type 2 (Jan 2020)
- Hypertension (Mar 2019)
- Appendectomy (Jul 2018)

#### F. **Quick Actions (Right Sidebar)**
- Book Appointment
- Start Tele-Consult
- View All Reports
- Payment History
- Chat with Support

#### G. **Health Reminders**
Daily medication and activity reminders:
- 💊 Take Metformin - 2:00 PM
- 🏃 30 min walk - Evening
- 📋 HbA1c test due in 5 days

#### H. **Active Prescriptions**
Current medications with:
- Medicine name and dosage
- Frequency (twice daily, once daily)
- Days remaining
- Refill option

#### I. **Recent Bills**
Billing summary:
- Consultation - ₹800 (Paid)
- Lab Tests - ₹2,400 (Paid)

### Design Features:
✅ Large patient avatar with gradient
✅ Critical lab results highlighted in red
✅ AI chatbot for lab report queries
✅ Color-coded health reminders
✅ Prescription tracking with days remaining
✅ Easy bill access and payment status

---

## 🎨 Design Consistency Across All Dashboards

### Color Scheme:
```
Blue-600:    Primary actions, doctor appointments
Green-500:   Success states, active/stable status
Cyan-500:    Secondary actions, highlights
Purple-500:  Pending tasks, lab reports
Orange-500:  Warnings, waiting status
Red-500:     Critical alerts, cancellations
Slate-50:    Background color
```

### Typography:
- **Headers**: text-3xl, font-bold (Page titles)
- **Card Titles**: text-lg, font-semibold
- **Metrics**: text-3xl, font-bold
- **Body Text**: text-sm, text-slate-600
- **Small Text**: text-xs, text-slate-500

### Spacing:
- Page padding: p-6
- Card padding: p-6
- Grid gaps: gap-6
- Component spacing: space-y-6

---

## 🚀 Navigation Between Dashboards

### Sidebar Menu (Updated):
1. **Hospital Admin** → `/admin`
2. **Doctor Dashboard** → `/doctor`
3. **Patient Dashboard** → `/patient`
4. Appointments → `/appointments`
5. Patients → `/patients`
6. Staff → `/staff`
7. Billing → `/billing`
8. Reports → `/reports`
9. Settings → `/settings`

### Default Route:
- Root URL (`/`) automatically redirects to `/admin`

---

## 📋 Dashboard Components Breakdown

### Hospital Admin Uses:
- KPI Cards with growth indicators
- Hospital list with management options
- Infrastructure overview
- Staff distribution by role
- Quick action buttons

### Doctor Dashboard Uses:
- Time-based appointment list
- Color-coded status cards
- Patient case management
- Task alerts
- Schedule overview

### Patient Dashboard Uses:
- Personal health metrics
- Appointment booking/viewing
- Lab report access with AI
- Prescription tracking
- Health reminders
- Billing information

---

## 🔐 Future Enhancements (Recommended)

### Authentication:
- Role-based login (Admin, Doctor, Patient)
- JWT tokens for session management
- Password reset functionality

### Real-time Features:
- Live appointment status updates
- Doctor availability tracking
- Instant notifications
- Chat functionality

### AI Integration:
- Lab report interpretation chatbot
- Diagnosis suggestion for doctors
- Appointment scheduling AI
- Health risk predictions

### Mobile App:
- React Native version
- Push notifications
- Offline mode for doctors
- QR code check-in

---

## 📱 Responsive Behavior

All dashboards are fully responsive:

**Desktop (1280px+)**:
- 4-column KPI cards
- 3-column main layout
- Full sidebar visible

**Tablet (768px-1279px)**:
- 2-column KPI cards
- 2-column main layout
- Collapsible sidebar

**Mobile (<768px)**:
- 1-column layout
- Stacked cards
- Hamburger menu sidebar

---

## 🎯 Usage Scenarios

### Hospital Admin:
1. Add new hospital to system
2. Allocate staff to hospitals
3. Monitor bed occupancy across facilities
4. View system-wide statistics
5. Manage infrastructure resources

### Doctor:
1. View today's appointment schedule
2. Start consultation with patient
3. Add clinical notes to EMR
4. Review pending lab reports
5. Manage IPD cases
6. Schedule follow-ups

### Patient:
1. Book appointment with doctor
2. View lab reports and ask AI
3. Check prescription refills
4. Track health metrics
5. Pay bills online
6. Upload medical documents

---

## 🛠️ Customization Tips

### Change Data:
Edit the arrays in each dashboard page:
- `app/admin/page.tsx` - Hospital and staff data
- `app/doctor/page.tsx` - Appointments and cases
- `app/patient/page.tsx` - Patient info and reports

### Add New Cards:
```tsx
<Card className="border-l-4 border-l-blue-600">
  <CardContent className="p-6">
    {/* Your content */}
  </CardContent>
</Card>
```

### Modify Colors:
Use Tailwind classes:
- `bg-blue-600` for primary
- `bg-green-500` for success
- `bg-red-500` for critical
- `bg-orange-500` for warnings

---

## ✅ Testing Checklist

- [ ] Navigate to `/admin` - Hospital admin dashboard loads
- [ ] Navigate to `/doctor` - Doctor dashboard loads
- [ ] Navigate to `/patient` - Patient dashboard loads
- [ ] Sidebar shows all three dashboard links
- [ ] All KPI cards display correctly
- [ ] Appointment lists render properly
- [ ] Status badges show correct colors
- [ ] Action buttons are clickable
- [ ] Responsive layout works on mobile
- [ ] Care360 logo displays in sidebar

---

## 📞 Component Reference

| Dashboard | File Location | Key Features |
|-----------|---------------|--------------|
| Hospital Admin | `app/admin/page.tsx` | Hospital management, infrastructure, staff |
| Doctor | `app/doctor/page.tsx` | Appointments, cases, EMR, tasks |
| Patient | `app/patient/page.tsx` | Health records, reports, appointments |
| Sidebar | `components/layout/sidebar.tsx` | Navigation with Care360 logo |
| Navbar | `components/layout/navbar.tsx` | Search, notifications, avatar |

---

**Care360 - Complete Hospital Information System**
*Three Dashboards. One Vision. Better Healthcare.*

Start the dev server:
```bash
npm run dev
```

Then visit:
- Hospital Admin: http://localhost:3000/admin
- Doctor Dashboard: http://localhost:3000/doctor
- Patient Dashboard: http://localhost:3000/patient
