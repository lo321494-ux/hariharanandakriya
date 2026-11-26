import { createFileRoute } from "@tanstack/react-router";

const ORIGEN = "https://hariharanandakriya.org/";
const CARPETAS = ["docs/", "libros/", "videos/"];

// Sirve desde el mismo sitio los PDF y videos públicos de la fundación,
// para que se puedan leer y reproducir dentro de la página.
export const Route = createFileRoute("/api/archivo")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const ruta = new URL(request.url).searchParams.get("f") ?? "";
        if (!CARPETAS.some((c) => ruta.startsWith(c)) || ruta.includes("..")) {
          return new Response("No permitido", { status: 400 });
        }
        const headers: Record<string, string> = {};
        const range = request.headers.get("range");
        if (range) headers["range"] = range;
        const r = await fetch(ORIGEN + ruta.split("/").map(encodeURIComponent).join("/"), { headers });
        const out = new Headers();
        for (const h of ["content-type", "content-length", "content-range", "accept-ranges"]) {
          const v = r.headers.get(h);
          if (v) out.set(h, v);
        }
        out.set("content-disposition", "inline");
        out.set("cache-control", "public, max-age=86400");
        return new Response(r.body, { status: r.status, headers: out });
      },
    },
  },
});
