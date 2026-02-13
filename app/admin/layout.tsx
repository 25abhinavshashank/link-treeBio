import React from 'react';
import { SidebarInset } from '@/components/ui/sidebar';
import { SidebarWrapper } from '@/modules/auth/dashboard/components/sidebar-wrapper';
import { AppSidebar } from '@/modules/auth/dashboard/components/app-sidebar';
import AppHeader from '@/modules/auth/dashboard/components/app-header';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarWrapper>
      <AppSidebar></AppSidebar>
      <SidebarInset>
        <AppHeader></AppHeader>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarWrapper>
  );
};

export default AdminLayout;
