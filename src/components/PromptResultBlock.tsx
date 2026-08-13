"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function PromptResultBlock({
  text,
  label = "CONTOH HASIL PROMPT DARI CHATGPT",
  subtitle = "Dipakai sebagai prompting ke Google AI Studio / V0.dev.",
}: {
  text: string;
  label?: string;
  subtitle?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="mt-3 rounded-lg border border-neon/20 bg-black/30 p-3">
      <div className="text-xs font-semibold text-muted mb-1">{label}</div>
      {subtitle && <p className="text-xs text-muted/80 mb-2">{subtitle}</p>}
      <div className="max-h-72 overflow-y-auto rounded-md border border-neon/10 bg-black/40 p-3">
        <p className="text-sm text-foreground/90 whitespace-pre-line">{text}</p>
      </div>
      <button
        onClick={handleCopy}
        className="mt-3 inline-flex items-center gap-2 rounded-md bg-neon/15 hover:bg-neon/25 border border-neon/40 px-3 py-1.5 text-xs font-semibold text-neon-bright transition-colors"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied!" : "Copy Hasil Prompt"}
      </button>
    </div>
  );
}
