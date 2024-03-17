import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

export default function MainLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
        <div className="mx-auto h-full max-w-[1056px] bg-red-500 pt-6">
          {children}
        </div>
      </main>
    </>
  );
}
