import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type CardProps = {
  id: number;
  title: string;
  imageSrc: string;
  active?: boolean;
  disabled?: boolean;
  onClick: (id: number) => void;
};

export function Card({
  id,
  title,
  imageSrc,
  active,
  disabled,
  onClick,
}: CardProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]",
        disabled && "pointer-events-none opacity-50",
      )}
    >
      <div className="min-[24px] flex w-full items-center justify-end">
        {active && (
          <div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
            <Check className="size-4 stroke-[4] text-white" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
        className="rounded-lg border object-cover drop-shadow-md"
      />
      <p className="mt-3 text-center font-bold text-neutral-700">{title}</p>
    </div>
  );
}
