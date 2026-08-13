import Image from "next/image";
import { Session } from "@/data/sessions";
import CopyPromptButton from "./CopyPromptButton";
import ToolsLinks from "./ToolsLinks";
import Resources from "./Resources";
import InfoBlock from "./InfoBlock";

export default function SessionContent({ session }: { session: Session }) {
  return (
    <div className="glass-card glow-border rounded-2xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-block rounded-md bg-neon/15 border border-neon/30 px-2.5 py-1 text-xs font-semibold text-neon-bright">
          SESI {session.number}
        </span>
        <span className="inline-block rounded-md border border-muted/30 px-2.5 py-1 text-xs font-semibold text-muted">
          {session.category}
        </span>
      </div>
      <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground">{session.title}</h2>
      <p className="mt-2 text-muted text-sm sm:text-base">{session.description}</p>

      <div className="mt-6 text-xs font-semibold tracking-wider text-neon-bright">
        LANGKAH-LANGKAH
      </div>

      <ol className="mt-3 space-y-3">
        {session.steps.map((step, i) => (
          <li key={step.title} className="rounded-xl border border-neon/15 bg-black/20 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neon text-white text-sm font-bold">
                {i + 1}
              </span>
              <div className="min-w-0">
                <div className="font-semibold text-foreground">{step.title}</div>
                {step.description && <p className="mt-1 text-sm text-muted">{step.description}</p>}
                {step.image && (
                  <a
                    href={step.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block w-fit overflow-hidden rounded-lg border border-neon/20"
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={480}
                      height={360}
                      className="h-auto max-h-72 w-auto object-contain"
                    />
                  </a>
                )}
                {step.prompt && <CopyPromptButton prompt={step.prompt} />}
                {step.prompts?.map((p) => (
                  <CopyPromptButton key={p.label} prompt={p.text} label={p.label} />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      {session.practice && <InfoBlock label="PRAKTIK">{session.practice}</InfoBlock>}
      {session.tools && session.tools.length > 0 && <ToolsLinks tools={session.tools} />}
      {session.output && <InfoBlock label="OUTPUT">{session.output}</InfoBlock>}
      {session.resources && session.resources.length > 0 && (
        <Resources resources={session.resources} />
      )}
      {session.teacherNote && (
        <InfoBlock label="CATATAN PENGAJAR" variant="amber">
          {session.teacherNote}
        </InfoBlock>
      )}
    </div>
  );
}
