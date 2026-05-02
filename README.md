# SaaS Task Manager

A high-performance, full-stack Task Management platform built with the MERN stack (Next.js, React, Prisma, MongoDB/PostgreSQL).
This application features organization-based workspaces, dynamic drag-and-drop task boards, and a professional subscription model.

## 🚀 Features

*   **Organization-Centric Workflow**: Multi-tenancy support via Clerk for switching between team workspaces.
*   **Dynamic Boards**: Create boards with background imagery integrated from the Unsplash API.
*   **Interactive UX**: Drag-and-drop functionality for cards and lists with optimistic UI updates.
*   **Activity Auditing**: Detailed logs for every action taken within a board (create, rename, delete).
*   **Monetization**: Tiered access with Stripe-integrated subscriptions and board creation limits.

## 🛠️ Tech Stack

*   **Frontend**: Next.js 14 (App Router), React, Tailwind CSS, Shadcn UI, Zustand, @hello-pangea/dnd.
*   **Backend**: Next.js Server Actions, Prisma ORM, PostgreSQL/MongoDB, Stripe API, Clerk Auth.

## 📂 Project Architecture

### 🎨 Frontend Logic (Client Side)
The frontend focuses on a highly responsive, interactive user experience using modern React patterns.

*   **`app/(platform)`**: Contains the core dashboard logic, utilizing Next.js Layouts for persistent sidebars and navigation.
*   **`components/`**: Modular UI library including specialized form components, modals for board/card creation, and Shadcn primitives.
*   **`hooks/`**: 
    *   `useAction`: A custom wrapper for server actions to manage client-side states (loading, errors, success).
    *   `useMobileSidebar`: State management for responsive mobile navigation.
*   **`public/`**: Managed static assets and icons.

### ⚙️ Backend Logic (Server Side)
The backend leverages Next.js Server Actions to handle business logic securely without traditional API overhead.

*   **`actions/`**: The core "controller" layer. Contains type-safe functions for all mutations (Boards, Lists, Cards).
*   **`prisma/`**: Defines the data model and relationships between Users, Organizations, and Task entities.
*   **`lib/`**:
    *   `db.ts`: Singleton Prisma client initialization.
    *   `stripe.ts`: Configuration for handling payments and subscription checks.
    *   `org-limit.ts`: Utility logic to enforce free-tier board constraints.
*   **`api/`**: Dedicated webhook handlers for Stripe and Clerk events to keep the database in sync with external services.

## ⚙️ Setup Instructions

### 1. Clone & Install
```bash
git clone (repo)
cd saas-task-manager
npm install

### 3. Environment Variables
Create a `.env` file in the root directory and configure the following:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 2. Database Initialization
```bash
npx prisma generate
npx prisma db push
```

### 3. Run Development Server
```bash
npm run dev
```
Analysis Summary
Optimistic UI: The frontend uses immediate state updates for drag-and-drop, while the backend ensures data integrity.

Security: Authentication is enforced via Middleware, ensuring a strict boundary between public marketing pages and private user data.

Audit Trails: Every backend mutation triggers an entry in the Audit Log table, providing a complete history of project changes.
