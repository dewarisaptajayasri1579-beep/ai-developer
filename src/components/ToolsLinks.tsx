import { ExternalLink } from "lucide-react";
import { Tool } from "@/data/sessions";

export default function ToolsLinks({ tools }: { tools: Tool[] }) {
  return (
    <div className="mt-6">
      <div className="text-xs font-semibold tracking-wider text-neon-bright">
        TOOLS YANG DIGUNAKAN
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-neon/30 bg-neon/10 px-3 py-1.5 text-sm text-foreground hover:bg-neon/20 transition-colors"
          >
            {tool.name}
            <ExternalLink size={12} className="text-neon-bright" />
          </a>
        ))}
      </div>
    </div>
  );
}
