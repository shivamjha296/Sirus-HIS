# Care360 HIS - System Architecture

## Overview
Care360 is a multi-tenant Hospital Information System with a two-tier admin architecture:

### Architecture Levels

```
┌─────────────────────────────────────────────┐
│         CARE360 PLATFORM ADMIN              │
│    (Platform-level administration)          │
│                                             │
│  - Onboards multiple hospitals             │
│  - Manages subscriptions & billing         │
│  - Platform analytics & system health      │
│  - Compliance & support                    │
└──────────────────┬──────────────────────────┘
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
┌──────────────────┐  ┌──────────────────┐
│  HOSPITAL 1      │  │  HOSPITAL 2      │
│  (Apollo Delhi)  │  │  (Max Mumbai)    │
│                  │  │                  │
│  Hospital Admin  │  │  Hospital Admin  │
│  ├─ Doctors      │  │  ├─ Doctors      │
│  └─ Patients     │  │  └─ Patients     │
└──────────────────┘  └──────────────────┘
```

## 1. Care360 Platform Admin (`/care360-admin`)

**Purpose:** Super admin level that manages the entire Care360 platform

**Key Responsibilities:**
- Onboard new hospitals to the Care360 platform
- Manage hospital subscriptions (Enterprise, Professional, Standard)
- Monitor platform-wide analytics and metrics
- System health monitoring (API, Database, Storage, Backup)
- Platform user management
- Compliance tracking across all hospitals
- Customer support for all hospitals
- Platform settings and configuration

**Features:**
- Dashboard with platform-level KPIs
  - Total Hospitals: 12
  - Active Users: 9,704
  - Monthly Recurring Revenue (MRR): ₹2.4L
  - System Health: 99.8%
- Hospital onboarding workflow
- Subscription management (Enterprise/Professional/Standard plans)
- Platform-wide statistics
- System status monitoring
- Support ticket management

**Sidebar Menu:**
- Dashboard
- Hospitals
- Platform Users
- Subscriptions
- Analytics
- Compliance
- Notifications
- Support
- Settings

**Color Theme:** Purple (`bg-purple-600`)

---

## 2. Hospital Admin (`/hospital-admin`)

**Purpose:** Hospital-specific administration for each individual hospital

**Key Responsibilities:**
- Manage hospital's patients
- Manage hospital's doctors and staff
- Bed and ward allocation
- Department management
- Pharmacy and inventory control
- Lab and radiology operations
- Hospital-specific billing
- Hospital-specific reports
- Hospital settings

**Features:**
- Dashboard with hospital-specific KPIs
  - Total Patients: 1,248
  - Doctors: 120 (85 on duty)
  - Bed Occupancy: 73% (328/450)
  - Total Staff: 342
- Department overview with occupancy rates
- Today's operations (Appointments, OPD, IPD, Revenue)
- Patient management
- Doctor scheduling
- Bed allocation and tracking
- Inventory management
- Billing and invoicing

**Sidebar Menu:**
- Dashboard
- Appointments
- Patients
- Doctors
- Staff
- Beds & Wards
- Departments
- Pharmacy & Inventory
- Lab & Radiology
- Billing
- Reports
- Settings

**Color Theme:** Blue (`bg-blue-600`)

**Hospital Context:** Apollo Hospital - Delhi (shown in sidebar badge)

---

## 3. Doctor Portal (`/doctor`)

**Purpose:** Clinical workflow management for doctors

**Key Responsibilities:**
- Patient consultations
- Appointment management
- Electronic Medical Records (EMR)
- Prescription management
- Lab order and results review
- IPD/OPD patient care
- Surgical procedures tracking

**Features:**
- 12 appointment slots with patient details
- Active case management
- Pending task list
- Quick access to patient EMRs
- Prescription writing
- Lab report review

**Sidebar Menu:**
- Dashboard
- Appointments
- Patient List
- EMR/Records
- IPD Management
- OPD Management
- Prescriptions
- Lab Results
- Procedures
- My Schedule
- Reports
- Settings

**Color Theme:** Green (`bg-green-600`)

---

## 4. Patient Portal (`/patients`)

**Purpose:** Patient-facing health management portal

**Key Responsibilities:**
- View health records
- Book appointments
- Access lab reports
- View prescriptions
- Health vitals tracking
- Telemedicine consultations
- Billing and payments

**Features:**
- Health score tracking (85/100)
- Upcoming appointments
- Lab reports with AI query
- Active prescriptions
- Health reminders
- Billing history
- Medical history

**Sidebar Menu:**
- Dashboard
- Appointments
- Health Records
- Lab Reports
- Prescriptions
- Telemedicine
- Billing
- Health Vitals
- Family Members
- Insurance
- Documents
- Settings

**Color Theme:** Cyan (`bg-cyan-600`)

---

## Routes Structure

```
/                           → Redirects to /care360-admin
/care360-admin              → Platform Admin Dashboard
/care360-admin/hospitals    → Hospital management
/care360-admin/subscriptions → Subscription management

/hospital-admin             → Hospital Admin Dashboard (Apollo Delhi)
/hospital-admin/patients    → Patient management
/hospital-admin/doctors     → Doctor management
/hospital-admin/beds        → Bed allocation

/doctor                     → Doctor Portal Dashboard
/doctor/appointments        → Appointment management
/doctor/patients            → Patient list

/patients                   → Patient Portal Dashboard
/patients/appointments      → Book appointments
/patients/records           → Health records
```

## Multi-Tenancy Model

### Platform Level (Care360)
- **1 Care360 Admin** manages all hospitals
- Subscription-based SaaS model
- Centralized system health monitoring
- Platform-wide analytics and reporting

### Hospital Level (Individual Hospitals)
- **Each hospital** gets:
  - 1 Hospital Admin account
  - Multiple Doctor accounts
  - Multiple Patient accounts
- Hospital-specific data isolation
- Hospital-specific configurations
- Independent billing and operations

### Data Separation
- **Platform Data:** Hospitals, subscriptions, system metrics
- **Hospital Data:** Patients, doctors, appointments, beds
- **Doctor Data:** Consultations, prescriptions, schedules
- **Patient Data:** Health records, lab reports, prescriptions

## User Hierarchy

```
Care360 Platform Admin (1)
└── Hospital 1 Admin (1)
    ├── Doctor 1 (n)
    ├── Doctor 2 (n)
    └── ...
    └── Patient 1 (n)
    └── Patient 2 (n)
    └── ...
└── Hospital 2 Admin (1)
    ├── Doctor 1 (n)
    ├── Doctor 2 (n)
    └── ...
    └── Patient 1 (n)
    └── Patient 2 (n)
    └── ...
```

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.1
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Charts:** Recharts 2.12.0
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Color Coding

- **Purple:** Platform Admin (Care360) - `bg-purple-600`
- **Blue:** Hospital Admin - `bg-blue-600`
- **Green:** Doctor Portal - `bg-green-600`
- **Cyan:** Patient Portal - `bg-cyan-600`

## Key Differentiators

### Care360 Admin vs Hospital Admin

| Feature | Care360 Admin | Hospital Admin |
|---------|--------------|----------------|
| Scope | Multiple hospitals | Single hospital |
| Onboarding | Hospitals | Patients/Doctors |
| Billing | Subscriptions | Patient billing |
| Analytics | Platform-wide | Hospital-specific |
| Support | All hospitals | Hospital staff |
| Infrastructure | Platform systems | Hospital beds/wards |
| Users | Platform users | Hospital staff/patients |

## Next Steps for Development

1. **Authentication & Authorization**
   - Multi-tenant authentication
   - Role-based access control (RBAC)
   - Hospital context switching

2. **Database Schema**
   - Tenant isolation
   - Hospital-specific data tables
   - Cross-hospital analytics views

3. **API Development**
   - RESTful API endpoints
   - Multi-tenant middleware
   - Hospital context injection

4. **Real-time Features**
   - WebSocket for notifications
   - Live dashboard updates
   - Real-time bed availability

5. **Integrations**
   - Payment gateway (subscriptions)
   - Email/SMS notifications
   - Lab equipment integration
   - Pharmacy management systems

---

**Last Updated:** December 2024  
**Version:** 1.0.0
