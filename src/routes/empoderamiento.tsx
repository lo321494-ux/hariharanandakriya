import { createFileRoute } from "@tanstack/react-router";
import hariharananda3 from "@/assets/hariharananda3.jpg.asset.json";

export const Route = createFileRoute("/empoderamiento")({
  head: () => ({
    meta: [
      { title: "Empoderamiento | Fundación Hariharananda Kriya Yoga" },
      {
        name: "description",
        content:
          "Sección Empoderamiento de la Fundación Hariharananda Kriya Yoga (FHKY), Envigado, Antioquia, Colombia.",
      },
      { property: "og:title", content: "Empoderamiento | FHKY" },
      {
        property: "og:description",
        content: "Sección Empoderamiento de la Fundación Hariharananda Kriya Yoga.",
      },
      { property: "og:image", content: hariharananda3.url },
      { name: "twitter:image", content: hariharananda3.url },
    ],
  }),
  component: Empoderamiento,
});

function Empoderamiento() {
  return (
    <div className="section-x py-16 text-center">
      <h1 className="font-display text-4xl text-foreground md:text-5xl">EMPODERAMIENTO</h1>
      <img
        src={hariharananda3.url}
        alt="Paramahamsa Hariharananda"
        className="mx-auto mt-10 w-full max-w-md rounded-lg border-4 border-primary/40 p-1"
      />
      <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
        Para información sobre esta sección, escriba a{" "}
        <a
          href="mailto:fundacionhariharananda@gmail.com"
          className="text-primary hover:underline"
        >
          fundacionhariharananda@gmail.com
        </a>{" "}
        o llame al{" "}
        <a href="tel:+573174293044" className="text-primary hover:underline">
          317 429 3044
        </a>
        .
      </p>
    </div>
  );
}
