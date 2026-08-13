"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyPromptButton({
  prompt,
  label = "PROMPT YANG DIGUNAKAN",
}: {
  prompt: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="mt-3 rounded-lg border border-neon/20 bg-black/30 p-3">
      <div className="text-xs font-semibold text-muted mb-1">{label}</div>
      <p className="text-sm text-foreground/90 whitespace-pre-line">{prompt}</p>
      <button
        onClick={handleCopy}
        className="mt-3 inline-flex items-center gap-2 rounded-md bg-neon/15 hover:bg-neon/25 border border-neon/40 px-3 py-1.5 text-xs font-semibold text-neon-bright transition-colors"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied!" : "Copy Prompt"}
      </button>
    </div>
  );
}
