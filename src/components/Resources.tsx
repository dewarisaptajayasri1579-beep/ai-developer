import { FileDown, Link2 } from "lucide-react";
import { Resource } from "@/data/sessions";

export default function Resources({ resources }: { resources: Resource[] }) {
  return (
    <div className="mt-6">
      <div className="text-xs font-semibold tracking-wider text-neon-bright">RESOURCES</div>
      <div className="mt-3 space-y-2">
        {resources.map((resource) => (
          <a
            key={resource.label}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-neon/15 bg-black/20 px-3 py-2 text-sm text-foreground hover:border-neon/40 transition-colors"
          >
            {resource.kind === "file" ? (
              <FileDown size={16} className="text-neon-bright" />
            ) : (
              <Link2 size={16} className="text-neon-bright" />
            )}
            {resource.label}
          </a>
        ))}
      </div>
    </div>
  );
}
