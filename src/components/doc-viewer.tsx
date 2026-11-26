import { ExternalLink } from "lucide-react";

type Props = { url: string; title: string };

// Visor integrado: usa el lector de Google para que los PDF se vean también en celular.
export function DocViewer({ url, title }: Props) {
  const isPdf = /\.pdf$/i.test(url);
  const src = isPdf
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`
    : url;
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="font-display text-lg text-primary">{title}</h3>
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
          <ExternalLink className="h-4 w-4" /> Abrir en otra pestaña
        </a>
      </div>
      <iframe key={src} src={src} title={title} className="h-[70vh] min-h-[420px] w-full bg-background" loading="lazy" />
    </div>
  );
}
