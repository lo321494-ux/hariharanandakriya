import { useEffect, useRef, useState } from "react";
import * as pdfjs from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

export default function PdfPages({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [estado, setEstado] = useState<"cargando" | "listo" | "error">("cargando");

  useEffect(() => {
    let cancel = false;
    const cont = ref.current;
    if (!cont) return;
    cont.innerHTML = "";
    setEstado("cargando");
    const task = pdfjs.getDocument(url);
    task.promise
      .then(async (pdf) => {
        const ancho = cont.clientWidth || 800;
        for (let n = 1; n <= pdf.numPages && !cancel; n++) {
          const page = await pdf.getPage(n);
          const base = page.getViewport({ scale: 1 });
          const escala = ancho / base.width;
          const dpr = window.devicePixelRatio || 1;
          const vp = page.getViewport({ scale: escala * dpr });
          const canvas = document.createElement("canvas");
          canvas.width = vp.width;
          canvas.height = vp.height;
          canvas.style.width = "100%";
          canvas.className = "mb-3 rounded bg-white shadow";
          cont.appendChild(canvas);
          const ctx = canvas.getContext("2d");
          if (ctx) await page.render({ canvasContext: ctx, viewport: vp }).promise;
          if (n === 1 && !cancel) setEstado("listo");
        }
      })
      .catch(() => !cancel && setEstado("error"));
    return () => {
      cancel = true;
      void task.destroy();
    };
  }, [url]);

  return (
    <div>
      {estado === "cargando" && <p className="p-4 text-center text-sm text-muted-foreground">Cargando documento…</p>}
      {estado === "error" && <p className="p-4 text-center text-sm text-muted-foreground">No se pudo mostrar este archivo aquí. Use “Abrir en otra pestaña”.</p>}
      <div ref={ref} />
    </div>
  );
}
