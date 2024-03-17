import { ClerkProvider } from "@clerk/nextjs";
import { TailwindIndicator } from "./tailwind-indicator";

export function Providers({ children }: { children: react.ReactNode }) {
  return (
    <>
      <ClerkProvider>{children}</ClerkProvider>
      <TailwindIndicator />
    </>
  );
}
