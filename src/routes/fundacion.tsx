import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/section";

export const Route = createFileRoute("/fundacion")({
  head: () => ({
    meta: [
      { title: "La Fundación | Fundación Hariharananda Kriya Yoga" },
      {
        name: "description",
        content:
          "FHKY es una entidad sin ánimo de lucro con sede en Envigado, Antioquia, dedicada a la enseñanza del Kriya Yoga, la educación y el servicio a la comunidad.",
      },
      { property: "og:title", content: "La Fundación Hariharananda Kriya Yoga" },
      {
        property: "og:description",
        content:
          "Entidad sin ánimo de lucro dedicada a la enseñanza del Kriya Yoga, la educación y el servicio.",
      },
    ],
  }),
  component: Fundacion,
});

function Fundacion() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una fundación al servicio del despertar humano"
        intro="La Fundación Hariharananda Kriya Yoga (FHKY) es una entidad sin ánimo de lucro con sede en Envigado, Antioquia, Colombia, afiliada a la organización internacional de Kriya Yoga del linaje de Paramahamsa Hariharananda."
      />

      <section className="section-x py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Misión" title="Servir a la humanidad y a la creación" />
            <p className="mt-6 text-base leading-relaxed text-foreground/85">
              Promovemos actividades espirituales, educativas, de salud y de beneficencia
              que impulsan un crecimiento integral —espiritual, físico, psicológico,
              emocional e intelectual— en cada persona. Para ello empleamos el yoga, la
              meditación, la oración, el estudio y el servicio desinteresado.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Visión" title="Comunión constante con lo Divino" />
            <p className="mt-6 text-base leading-relaxed text-foreground/85">
              Buscamos que cada practicante sostenga una comunión permanente con lo Divino,
              acelerando su viaje de autoconocimiento y autorrealización, que es la razón
              misma de nuestra existencia como institución.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="section-x py-20 md:py-28">
          <SectionHeading
            eyebrow="Valores"
            title="Lo que sostiene nuestro trabajo"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Universalidad", "Acogemos a toda persona sin distinción de credo, origen o condición."],
              ["Fidelidad al linaje", "Enseñamos exactamente lo recibido, sin agregados ni interpretaciones propias."],
              ["Servicio desinteresado", "El trabajo se realiza de forma voluntaria, como ofrenda y no como negocio."],
              ["Transparencia", "Somos una entidad sin ánimo de lucro y rendimos cuentas de nuestros recursos."],
              ["Respeto", "Cuidamos la dignidad, la intimidad y el ritmo de cada buscador."],
              ["Constancia", "Preferimos la práctica pequeña y diaria a los entusiasmos pasajeros."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-xl text-foreground">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Datos institucionales"
          title="Información legal"
          intro="Operamos con plena formalidad como entidad sin ánimo de lucro registrada en Colombia."
        />
        <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Razón social", "Fundación Hariharananda Kriya Yoga"],
            ["Sigla", "FHKY"],
            ["NIT", "901042480-0"],
            ["Naturaleza", "Entidad sin ánimo de lucro"],
            ["Sede", "Envigado, Antioquia, Colombia"],
            ["Cámara de comercio", "Aburrá Sur"],
            ["Actividad", "Enseñanza y formación"],
            ["Constitución", "Enero de 2017"],
          ].map(([t, d]) => (
            <div key={t} className="border-t border-border pt-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t}</dt>
              <dd className="mt-2 text-base text-foreground">{d}</dd>
            </div>
          ))}
        </dl>
        <Link
          to="/contacto"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Contactar a la Fundación <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
