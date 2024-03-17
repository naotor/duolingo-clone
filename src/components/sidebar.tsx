import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
};

const ItemList = [
  {
    key: "learn",
    label: "Learn",
    href: "/learn",
    src: "/learn.svg",
  },
  {
    key: "leaderboard",
    label: "LeaderBoard",
    href: "/leaderboard",
    src: "/leaderboard.svg",
  },
  {
    key: "shop",
    label: "Shop",
    href: "/shop",
    src: "/shop.svg",
  },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <>
      <div
        className={cn(
          "left-0 top-0 flex h-full flex-col border-r-2 bg-blue-500 px-4 lg:fixed lg:w-[256px]",
          className,
        )}
      >
        <Link href="/learn">
          <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
            <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
            <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
              Lingo
            </h1>
          </div>
        </Link>
        <div className="flex flex-1 flex-col gap-y-2">
          {ItemList.map((item) => (
            <SidebarItem
              key={item.key}
              href={item.href}
              iconSrc={item.src}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </>
  );
}
