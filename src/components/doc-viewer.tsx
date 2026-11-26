import { ClientOnly } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { lazy, Suspense } from "react";

const PdfPages = lazy(() => import("./pdf-pages"));

type Props = { url: string; title: string };

/** Convierte una dirección del sitio original en una servida desde este mismo sitio. */
export function archivoLocal(url: string) {
  return "/api/archivo?f=" + encodeURIComponent(decodeURIComponent(url.replace("https://hariharanandakriya.org/", "")));
}

// Lector integrado: muestra las páginas del PDF dentro del sitio, también en celular.
export function DocViewer({ url, title }: Props) {
  const local = archivoLocal(url);
  const isPdf = /\.pdf$/i.test(url);
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="min-w-0 font-display text-lg text-primary">{title}</h3>
        <a href={local} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm text-primary hover:underline">
          <ExternalLink className="h-4 w-4" /> Abrir en otra pestaña
        </a>
      </div>
      <div className="max-h-[75vh] min-h-[420px] overflow-y-auto bg-muted/40 p-3">
        {isPdf ? (
          <ClientOnly fallback={<p className="p-4 text-center text-sm text-muted-foreground">Cargando documento…</p>}>
            <Suspense fallback={<p className="p-4 text-center text-sm text-muted-foreground">Cargando documento…</p>}>
              <PdfPages url={local} />
            </Suspense>
          </ClientOnly>
        ) : (
          <p className="p-4 text-center text-sm text-muted-foreground">Este archivo no se puede mostrar aquí. Use “Abrir en otra pestaña” para descargarlo.</p>
        )}
      </div>
    </div>
  );
}
