"use client";

import { useState } from "react";
import { sessions } from "@/data/sessions";
import Header from "@/components/Header";
import SessionNav from "@/components/SessionNav";
import SessionContent from "@/components/SessionContent";

export default function Home() {
  const [activeSlug, setActiveSlug] = useState(sessions[0].slug);
  const activeSession = sessions.find((s) => s.slug === activeSlug) ?? sessions[0];

  return (
    <main className="max-w-6xl mx-auto px-4 pb-16">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        <SessionNav sessions={sessions} activeSlug={activeSlug} onSelect={setActiveSlug} />
        <SessionContent session={activeSession} />
      </div>
    </main>
  );
}
