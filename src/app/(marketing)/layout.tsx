import { Footer } from "./footer";
import { Header } from "./header";

export default function MarketingLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
