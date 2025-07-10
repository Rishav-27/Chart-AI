// src/app/(dashboard)/layout.tsx
// This layout applies only to routes within the (dashboard) group (e.g., /dashboard)

import MainLayout from '@/components/layout/MainLayout'; // Import MainLayout here

export default function DashboardGroupRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout> {/* MainLayout wraps children only for dashboard routes */}
      {children}
    </MainLayout>
  );
}