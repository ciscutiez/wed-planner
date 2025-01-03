import { DashboardSidebar } from '@/components/Custom/DashboardSidebar';


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
