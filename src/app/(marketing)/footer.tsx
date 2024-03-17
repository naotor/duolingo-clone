import { Button } from "@/components/ui/button";
import Image from "next/image";

const ImageList = [
  {
    key: "hr",
    src: "/hr.svg",
    text: "Croatian",
  },
  {
    key: "es",
    src: "/es.svg",
    text: "Spanish",
  },
  {
    key: "fr",
    src: "/fr.svg",
    text: "French",
  },
  {
    key: "it",
    src: "/it.svg",
    text: "Italian",
  },
  {
    key: "jp",
    src: "/jp.svg",
    text: "Japan",
  },
];

export function Footer() {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        {ImageList.map((img) => (
          <Button key={img.key} size="lg" variant="ghost" className="w-full">
            <Image
              src={img.src}
              alt={img.text}
              height={32}
              width={40}
              className="mr-4 rounded-md"
            />
            {img.text}
          </Button>
        ))}
      </div>
    </footer>
  );
}
