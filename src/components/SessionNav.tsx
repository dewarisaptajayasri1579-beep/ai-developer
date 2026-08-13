"use client";

import { Session } from "@/data/sessions";

export default function SessionNav({
  sessions,
  activeSlug,
  onSelect,
}: {
  sessions: Session[];
  activeSlug: string;
  onSelect: (slug: string) => void;
}) {
  return (
    <>
      {/* Desktop: vertical list */}
      <nav className="hidden md:flex md:flex-col gap-3">
        {sessions.map((session, i) => {
          const active = session.slug === activeSlug;
          const showCategory = i === 0 || sessions[i - 1].category !== session.category;
          return (
            <div key={session.slug}>
              {showCategory && (
                <div className="mb-2 mt-4 first:mt-0 text-[11px] font-bold tracking-widest text-muted/70 uppercase px-1">
                  {session.category}
                </div>
              )}
              <button
                onClick={() => onSelect(session.slug)}
                className={`w-full text-left rounded-xl px-5 py-4 transition-all glass-card ${
                  active ? "glow-border border-neon/60" : "hover:border-neon/30"
                }`}
              >
                <div className={`text-xs font-semibold tracking-wider ${active ? "text-neon-bright" : "text-muted"}`}>
                  SESI {session.number}
                </div>
                <div className={`mt-1 font-semibold ${active ? "text-foreground" : "text-muted"}`}>
                  {session.shortTitle}
                </div>
              </button>
            </div>
          );
        })}
      </nav>

      {/* Mobile: horizontal tabs */}
      <nav className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
        {sessions.map((session, i) => {
          const active = session.slug === activeSlug;
          const showDivider = i > 0 && sessions[i - 1].category !== session.category;
          return (
            <div key={session.slug} className="shrink-0 flex items-center gap-2">
              {showDivider && <span className="h-6 w-px bg-neon/20" />}
              <button
                onClick={() => onSelect(session.slug)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap glass-card transition-all ${
                  active ? "glow-border text-neon-bright" : "text-muted"
                }`}
              >
                Sesi {session.number}
              </button>
            </div>
          );
        })}
      </nav>
    </>
  );
}
