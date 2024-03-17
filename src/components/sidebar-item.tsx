"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

type SidebarItemProps = {
  key: string;
  label: string;
  iconSrc: string;
  href: string;
};

export function SidebarItem({ key, label, iconSrc, href }: SidebarItemProps) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      key={key}
      asChild
      variant={active ? "sidebarOutline" : "sidebar"}
      className="h-[52px] justify-start"
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={32}
          width={32}
        />
        {label}
      </Link>
    </Button>
  );
}
