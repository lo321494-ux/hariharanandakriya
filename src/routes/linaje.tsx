import { createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionHeading } from "@/components/section";

export const Route = createFileRoute("/linaje")({
  head: () => ({
    meta: [
      { title: "Nuestro linaje | Fundación Hariharananda Kriya Yoga" },
      {
        name: "description",
        content:
          "De Mahavatar Babaji a Lahiri Mahasaya, Swami Shriyukteshwar, Paramahamsa Hariharananda y Paramahamsa Prajnanananda: la transmisión viva del Kriya Yoga.",
      },
      { property: "og:title", content: "Nuestro linaje de maestros" },
      {
        property: "og:description",
        content:
          "La transmisión viva del Kriya Yoga, de maestro a discípulo, hasta nuestros días.",
      },
    ],
  }),
  component: Linaje,
});

const maestros = [
  {
    nombre: "Mahavatar Babaji Maharaj",
    rol: "Origen del linaje",
    texto:
      "El maestro inmortal que restauró el Kriya Yoga para la era moderna y lo confió a Lahiri Mahasaya para el bien de la humanidad.",
  },
  {
    nombre: "Yogiraj Shyama Charan Lahiri Mahasaya",
    rol: "1828 – 1895",
    texto:
      "Padre de familia y funcionario, demostró que la más alta realización espiritual es posible en medio de la vida cotidiana. Abrió el Kriya Yoga a toda persona sincera.",
  },
  {
    nombre: "Jnanavatar Swami Shriyukteshwar Giri",
    rol: "1855 – 1936",
    texto:
      "Maestro de rigor y claridad, autor de La ciencia sagrada, guía de Paramahamsa Yogananda y de Paramahamsa Hariharananda en el ashram de Serampore.",
  },
  {
    nombre: "Paramahamsa Yogananda",
    rol: "1893 – 1952",
    texto:
      "Llevó el Kriya Yoga a Occidente y encendió en millones de personas el anhelo del camino interior con su Autobiografía de un yogui.",
  },
  {
    nombre: "Paramahamsa Hariharananda",
    rol: "1907 – 2002",
    texto:
      "Nacido en Bengala como Rabindranath Bhattacharya, fue iniciado por Swami Shriyukteshwar en 1932 y recibió el segundo Kriya de Paramahamsa Yogananda. Dirigió el célebre Karar Ashram de Puri y dedicó su vida a la elevación espiritual del mundo, fundando centros en los cinco continentes.",
    destacado: true,
  },
  {
    nombre: "Paramahamsa Prajnanananda",
    rol: "Guía espiritual actual",
    texto:
      "Discípulo y sucesor de Paramahamsa Hariharananda, conduce hoy las organizaciones internacionales de Kriya Yoga y las obras de caridad del linaje, entre ellas el orfanato Hariharananda Balashram.",
  },
];

function Linaje() {
  return (
    <>
      <PageHero
        eyebrow="Guru parampara"
        title="Una transmisión viva, de maestro a discípulo"
        intro="El Kriya Yoga no es una doctrina que se difunda: es una llama que se entrega en mano. Estas son las manos por las que ha pasado hasta llegar a nosotros."
      />

      <section className="section-x py-20 md:py-28">
        <ol className="relative space-y-12 border-l border-border pl-8 md:pl-12">
          {maestros.map((m) => (
            <li key={m.nombre} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[2.3rem] top-2 h-3 w-3 rounded-full md:-left-[3.3rem] ${
                  m.destacado ? "bg-primary ring-4 ring-primary/20" : "bg-border"
                }`}
              />
              <p className="text-xs uppercase tracking-[0.25em] text-primary">{m.rol}</p>
              <h2 className="mt-2 font-display text-2xl leading-snug text-foreground md:text-3xl">
                {m.nombre}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {m.texto}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-sand">
        <div className="section-x py-20 md:py-24">
          <SectionHeading
            eyebrow="Una familia mundial"
            title="Más de 300 centros en 35 países"
            intro="La organización internacional de Kriya Yoga reúne institutos en Florida, Viena, la India, Europa y América Latina, junto con las obras de caridad Hariharananda y el orfanato Balashram, que acoge a 600 niños en la India."
            align="center"
          />
        </div>
      </section>
    </>
  );
}
