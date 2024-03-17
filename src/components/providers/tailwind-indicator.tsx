import { cn } from "@/lib/utils";

export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;
  const hidden = "hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden";
  return (
    <div className="fixed bottom-1 z-[9999] p-4">
      <div className={cn(hidden, "block")}>xs</div>
      <div className={cn(hidden, "sm:block")}>sm</div>
      <div className={cn(hidden, "md:block")}>md</div>
      <div className={cn(hidden, "lg:block")}>lg</div>
      <div className={cn(hidden, "xl:block")}>xl</div>
      <div className={cn(hidden, "2xl:block")}>2xl</div>
    </div>
  );
}
