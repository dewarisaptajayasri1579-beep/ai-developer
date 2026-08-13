import Image from "next/image";
import { training } from "@/data/sessions";

export default function Header() {
  return (
    <header className="text-center pt-10 pb-8 px-4">
      <Image
        src="/logo-7smarts.png"
        alt={training.brand}
        width={2560}
        height={854}
        priority
        className="mx-auto h-8 w-auto sm:h-9"
      />
      <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-neon-bright bg-clip-text text-transparent">
        {training.title}
      </h1>
      <p className="mt-2 text-muted text-sm sm:text-base">{training.tagline}</p>
    </header>
  );
}
