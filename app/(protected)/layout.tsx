import { DashboardSidebar } from '@/components/DashboardSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardSidebar />
      <div className='flex-1 flex flex-col'>
        <main className='flex-1 p-4'>{children}</main>
        {/* <Toaster /> */}
      </div>
    </>
  );
}
