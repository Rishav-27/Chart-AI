// src/app/(dashboard)/layout.tsx
import MainLayout from '@/components/layout/MainLayout'; 

export default function DashboardGroupRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout> 
      {children}
    </MainLayout>
  );
}