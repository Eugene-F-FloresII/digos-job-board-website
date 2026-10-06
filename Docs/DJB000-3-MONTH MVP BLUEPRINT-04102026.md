# DJB000: 3-MONTH MVP BLUEPRINT
    
**Date:** October 04, 2026
**Project:** Digos City Job Board
**Version:** 1.0 (MVP)

---

*Executive Intent:* This document outlines the Minimum Viable Product (MVP) architecture for the Digos City job board, designed to be built and launched within 3 months. Geared toward immediate public utilization and demonstrating tangible value to government investors, this version strips away complex automation to focus strictly on the core "Job-to-be-Done": connecting verified local employers with qualified Digos talent seamlessly.

## Part 1: Industry R&D & MVP Prioritization Strategy

Based on market research for successful job board startups, the biggest pitfall is overbuilding before launch. To solve the classic "Chicken-and-Egg" marketplace problem, the initial version must prioritize rapid job liquidity and frictionless candidate applications. 

### The MoSCoW Prioritization Framework (v1.0)

**🔴 MUST-HAVES (The 3-Month Scope)**
*   **Public Discovery Engine:** Open search without mandatory initial login. Job seekers must see the value (available jobs) immediately to build traction.
*   **"No-Resume" Quick Apply (Inclusive Design):** Instead of forcing a PDF upload, users fill out a quick "Digos Talent Form" (Fields: Full Name, Phone Number, Current Barangay, Highest Education, and Brief Skills/Experience). The system auto-generates a clean digital profile for the employer.
*   **Core Employer Workflow:** A straightforward form to create/publish job listings, specifying the **Job Address and Work Setup (Face-to-Face vs. Remote)**.
*   **Custom Requirements Handling:** If an employer needs more than just a resume (e.g., Driver's License, Health Cert), they can add up to 2 mandatory custom questions or attachment requests to the job post.
*   **Trust Verification (Manual/Basic):** Document upload (DTI/Mayor's Permit) for admin review to grant the 'Verified' badge—crucial for government investor confidence.
*   **Basic Dashboard:** Employers can see applicants; seekers can see their application status (Submitted, Under Review, Hired).

**🟡 SHOULD-HAVES (If time permits in Month 3)**
*   Basic Email Notifications (Alerting employers of new applicants).
*   Mobile OTP Registration (For faster seeker onboarding).

**🔵 WON'T-HAVES / DEFERRED (Post-MVP Roadmap)**
*   *Deferred:* Automated 14-day 'Zero Black Hole' policies (Manual admin nudges will suffice initially).
*   *Deferred:* Complex ATS (Automated interview scheduling, calendar sync, in-app messaging).
*   *Deferred:* Built-in Resume Generator. 
*   *Deferred:* SMS Gateway integration (Rely on transactional emails first to cut costs and development time).

---

## Part 2: Simplified Employer MVP Lifecycle

The 3-month employer journey is streamlined to ensure businesses can post vacancies with zero technical friction while maintaining platform integrity.

### Employer User Flow
    
```text
┌───────────────────────┐
│ 1. Employer Signup    │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────────────┐
│ 2. Post Job & Upload Permit   │ ◄── (Post is live instantly)
└───────────┬───────────────────┘
            │
            ▼
┌───────────────────────────────┐
│ 3. Manual Admin Approval      │ ◄── (Grants Green 'Verified' Badge)
└───────────┬───────────────────┘
            │
            ▼
┌───────────────────────────────┐
│ 4. Manage ATS Dashboard       │ ◄── (View applicants, update status)
└───────────────────────────────┘
```

**Key MVP Touchpoints:**
*   **Post Now, Verify Later (Low Friction):** Unverified employers can post instantly to populate the board. However, they are heavily incentivized to upload a business permit (DTI/Mayor's) to earn the 'Verified' badge.
*   **Employer Verification Flow:**
    1. Employer uploads an image of their DTI/Mayor's Permit via their dashboard.
    2. Admin receives a backend notification.
    3. Admin visually inspects the document.
    4. Admin clicks "Approve", instantly granting the green 'Verified Digos Employer' badge to the employer's profile and all their active job posts. (Admins can also suspend fake accounts).
*   **Simplified Job Post:** Title, Description, Salary, **Job Address, Work Setup (Remote/FTF)**, and **Custom Screening Requirements** (e.g., asking for a Driver's License or specific certification).
*   **Applicant List View:** A basic table view for employers to download applicant resumes and update status (Reviewing / Hired / Rejected).

---

## Part 3: Simplified Job Seeker MVP Lifecycle

Job seekers in Digos City need mobile-first, instant access to opportunities without hitting a registration wall.

### Seeker User Flow
    
```text
┌──────────────────────────┐
│ 1. Visit Site (Mobile)   │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│ 2. Browse & Filter Jobs  │ ◄── (No Login Required; Filter by Barangay)
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│ 3. Click "Apply Now"     │ ◄── (Prompts Quick Registration)
└────────────┬─────────────┘
             │
       ┌─────┴─────┐
       ▼           ▼
┌────────────┐   ┌─────────────┐
│ 4a. Fill   │   │ 4b. Upload  │
│ Quick Form │   │ PDF Resume  │
└──────┬─────┘   └──────┬──────┘
       │                │
       └─────┬──────────┘
             ▼
┌──────────────────────────┐
│ 5. Track Status in Hub   │ ◄── (Submitted, Under Review, Hired)
└──────────────────────────┘
```

**Key MVP Touchpoints:**
*   **Browse First, Register Later:** Candidates can filter jobs by proximity *before* being asked to sign up.
*   **Inclusive "No-Resume" Apply:** A candidate can upload a file IF they have one, OR they can fill out the mobile-friendly form (Name, Phone, Barangay, Education, Skills/Experience).
*   **Handling Extra Employer Requirements:** If the employer required additional items (like a photo of a Driver's License, Health Certificate, or a specific yes/no question), these custom fields dynamically appear right inside the Quick Apply form so the candidate can provide them seamlessly.
*   **Status Tracker:** A static dashboard where the seeker can see if the employer has viewed their application.

---

## Part 4: The 3-Month Execution Timeline

To meet the deadline for public launch and government investor presentations, development is strictly timeboxed.

### Month 1: Foundation & Database
*   **Architecture Setup:** Next.js (Frontend) + Supabase/PostgreSQL (Backend).
*   **Database Schema:** Draft the 4 core entities (Users, Companies, Job Posts, Applications).
*   **Seeker UI (Read-Only):** Build the public-facing job board, search bar, and barangay filtering UI. 

### Month 2: Core Workflows & Authentication
*   **Authentication:** Implement Google Auth and basic email/password login.
*   **Employer Portal:** Build the job creation form and the business permit upload flow.
*   **Application Engine:** Build the system for seekers to apply via "No-Resume" Quick Form or attach a PDF to a specific job post.

### Month 3: Dashboards, Polish & Investor Prep
*   **Dashboards:** Build the Employer applicant viewer (ATS lite) and Seeker status tracker.
*   **Admin Panel:** A simple backend for your team to approve/reject employer verifications to manage platform trust.
*   **Seed Data:** Manually scrape or onboard 20-30 local Digos jobs so the board is populated (solving the Chicken-and-Egg problem) before the public/investor reveal.
