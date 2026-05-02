Here is the complete, formatted Markdown text for your `README.md`. It includes a clean layout, clear hierarchy, and all the technical details analyzed from your repository.

***

```markdown
# SaaS Task Manager

A professional, full-stack Task Management platform designed for scale. This application mirrors the core functionality of Trello, featuring organization-based workflows, dynamic drag-and-drop boards, and a robust subscription model.

## 🚀 Features

*   **Organization Management**: Seamlessly create and switch between different organizations using Clerk’s multi-tenancy support.
*   **Dynamic Board Creation**: Generate boards with high-quality background images sourced via the Unsplash API.
*   **Drag-and-Drop Workflow**: Intuitive task management using `@hello-pangea/dnd` for reordering cards and lists.
*   **Optimistic UI Updates**: Instant responsiveness for task movements, updating the UI immediately while the database syncs in the background.
*   **Full Audit Logs**: Automatically tracks and displays every action (create, update, delete) within a board for team transparency.
*   **Subscription & Limits**:
    *   **Free Tier**: Includes board creation limits managed via a server-side counter.
    *   **Pro Tier**: Unlock unlimited boards through Stripe checkout and a dedicated subscription management portal.
*   **Responsive Modern UI**: Built with Shadcn UI and Tailwind CSS, ensuring a polished experience on desktop and mobile.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Authentication**: [Clerk](https://clerk.com/)
*   **Database**: [Prisma ORM](https://www.prisma.io/) (PostgreSQL/MongoDB)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
*   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
*   **Forms**: [React Hook Form](https://react-hook-form.com/) with Zod validation
*   **Payments**: [Stripe](https://stripe.com/)

## 📂 Project Structure
```text
├── actions/             # Type-safe Server Actions for mutations
├── app/                 # Next.js App Router (Layouts & Pages)
│   ├── (marketing)/     # Landing page and public-facing routes
│   ├── (platform)/      # Authenticated dashboard, Org, and Board routes
│   └── api/             # Stripe and Clerk Webhook endpoints
├── components/          # Reusable UI components (Modals, Forms, UI)
├── hooks/               # Custom logic (useAction, useMobileSidebar)
├── lib/                 # Shared utilities, Prisma client, and Stripe config
├── prisma/              # Database schema and migration files
└── types.ts             # Global TypeScript interface definitions
```

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone [https://github.com/tharun0135/saas-task-manager.git](https://github.com/tharun0135/saas-task-manager.git)
cd saas-task-manager
```

### 2. Install dependencies
```bash
npm install
```

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

### 4. Database Initialization
```bash
npx prisma generate
npx prisma db push
```

### 5. Run Development Server
```bash
npm run dev
```

## 📝 Key Architecture Highlights

*   **Type-Safe Mutations**: Every database interaction is wrapped in a custom `useAction` hook, providing consistent error handling and loading states across the app.
*   **Advanced Middleware**: Uses Clerk middleware to protect sensitive platform routes while allowing public access to the marketing landing page.
*   **Scalable Schema**: The Prisma schema is optimized for relational data, linking Organizations to Boards, Lists, and Cards with automated Audit Log triggers.
*   **Server Actions**: Fully utilizes Next.js 14 Server Actions to reduce client-side JavaScript and improve performance.
```
