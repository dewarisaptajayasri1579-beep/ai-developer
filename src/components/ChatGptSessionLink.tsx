import { ExternalLink, MessageSquareText } from "lucide-react";

export default function ChatGptSessionLink({ url }: { url: string }) {
  return (
    <div className="mt-6">
      <div className="text-xs font-semibold tracking-wider text-neon-bright">CHATGPT SESSION</div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex items-center gap-3 rounded-lg border border-neon/20 bg-black/20 p-4 text-sm text-foreground hover:border-neon/40 transition-colors"
      >
        <MessageSquareText size={18} className="text-neon-bright shrink-0" />
        <span className="flex-1 truncate">Lihat contoh percakapan ChatGPT sesi ini</span>
        <ExternalLink size={16} className="text-neon-bright shrink-0" />
      </a>
    </div>
  );
}
