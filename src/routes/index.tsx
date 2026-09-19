import { createFileRoute } from "@tanstack/react-router";
import parampara from "@/assets/parampara.jpg.asset.json";
import liaGuru from "@/assets/lia-guru.jpg.asset.json";
import foto2 from "@/assets/foto2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kriya Yoga, un camino para todos | Fundación Hariharananda Kriya Yoga" },
      {
        name: "description",
        content:
          "Kriya Yoga es un sistema que conduce progresivamente a estados de relajación profunda del cuerpo y la mente, donde la concentración aparece espontáneamente. Fundación Hariharananda Kriya Yoga (FHKY), Envigado, Colombia.",
      },
      { property: "og:title", content: "Kriya Yoga, un camino para todos | FHKY" },
      {
        property: "og:description",
        content:
          "El Kriya Yoga es el método más apropiado para el hombre del siglo XXI. Cualquier persona mayor de 12 años puede recibir iniciación.",
      },
      { property: "og:image", content: parampara.url },
      { name: "twitter:image", content: parampara.url },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <div>
      <section className="border-b border-border bg-sand">
        <div className="section-x py-8 text-center">
          <p className="font-display text-2xl text-primary md:text-3xl">
            FUNDACIÓN HARIHARANANDA KRIYA YOGA
          </p>
          <img
            src={parampara.url}
            alt="Parampara: linaje de maestros de Kriya Yoga"
            className="mt-6 w-full rounded-lg"
          />
        </div>
      </section>

      <article className="section-x py-16">
        <header className="text-center">
          <h1 className="font-display text-4xl text-foreground md:text-5xl">KRIYA YOGA</h1>
          <p className="mt-3 text-balance-title font-display text-2xl text-primary">
            UN CAMINO PARA TODOS
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            En general, hay muchos caminos que buscan ir más allá de las limitaciones de la
            mente y experimentar la naturaleza del propio ser. En casi todos estos sistemas,
            el objetivo principal está en la concentración. Tratan de retirar la consciencia
            de los objetos exteriores y llevarla a los reinos interiores de la mente, a
            través de la concentración.
          </p>
          <p>
            Los grandes maestros han proclamado que los seres humanos tienen en sí mismos un
            enorme potencial, que los hace capaces de experimentar diferentes planos de la
            consciencia. Sin embargo, una gran parte de la humanidad vive en un plano
            inferior de existencia, sin ni siquiera darse cuenta de otros planos superiores.
            El resultado es una vida infeliz e insatisfecha; ignorando que solo un destello
            de una esfera superior de consciencia aleja toda infelicidad y descontento.
          </p>

          <figure className="float-none my-8 md:float-left md:mr-8 md:w-2/5">
            <img
              src={liaGuru.url}
              alt="Yogacharya Lía Cristina Upegui con su Gurú"
              className="w-full rounded-lg border-4 border-primary/40 p-1"
            />
          </figure>

          <p>
            Pero este no es un proceso fácil. La mente, por naturaleza se mueve todo el
            tiempo. Cualquier intento de controlarla directa y forzadamente resulta en una
            reacción chocante. El resultado es tensión y frustración.
          </p>
          <p>
            Cuando la mente es incapaz de relajarse, proyecta corrientes de pensamientos a la
            mente consciente y estos dificultan la concentración en muchas personas. Cuanto
            más lo intentan, más se tensionan. Por eso es necesario un sistema que
            progresivamente conduzca a la persona a estados de relajación profunda del cuerpo
            y la mente, <b className="text-foreground">donde la concentración aparece
            espontáneamente</b>. Este sistema es llamado KRIYA YOGA.
          </p>
          <p>
            En el KRIYA YOGA se le da más atención a la consciencia. Esto es, atención
            consciente de los pensamientos u objetos. No se hace ningún intento directo de
            dirigir la concentración. Se induce la consciencia a hacer ciertos movimientos
            internos. Nunca hay un intento de suprimir los pensamientos; simplemente se
            acepta que surjan y desaparezcan; la persona es solo testigo.
          </p>
          <p>
            Dado que el KRIYA YOGA no presupone concentración, ni siquiera el retiro de la
            conciencia del entorno exterior, es el sistema más conveniente para el hombre
            moderno. Se adapta completamente al estilo de vida de un hombre extrovertido.
            Practique KRIYA YOGA —sin temor o inseguridad— y encontrará todo lo que estaba
            buscando.
          </p>

          <figure className="float-none my-8 md:float-right md:ml-8 md:w-2/5">
            <img
              src={foto2.url}
              alt="Práctica de Kriya Yoga"
              className="w-full rounded-lg border-4 border-primary/40 p-1"
            />
          </figure>

          <p>
            Uno de los muchos significados para Kriya es actividad o movimiento. Es el
            movimiento de la consciencia. Otro significado de Kriya es práctica o preliminar;
            en ese sentido es la práctica preliminar que lleva a la autorealización. El KRIYA
            YOGA no se opone directamente a las fluctuaciones mentales, aunque logra ese
            objetivo. De esta manera, sus facultades mentales se armonizan y florecen en todo
            su potencial.
          </p>
          <p>
            El KRIYA YOGA es el método más apropiado para el hombre del siglo XXI. Sin forzar
            nada, el Kriya yoga domestica la mente y se convierte en una herramienta perfecta
            para la <b className="text-foreground">meditación espontánea</b>. Para un Kriya
            yogui no se necesita esfuerzo mental para eliminar la tensión y los problemas. La
            práctica regular del KRIYA YOGA es lo único necesario y, en el curso del tiempo,
            se alcanza una mente cristalina, sin preocupaciones.
          </p>
          <p>
            <b className="text-foreground">Cualquier persona</b> mayor de 12 años,
            independientemente de su condición, podrá recibir iniciación en esta maravillosa
            técnica. Todos pueden practicar KRIYA YOGA, sin importar los hábitos
            alimentarios, la posición social, el nivel de educación, la religión o cualquier
            otra situación. Todo lo que se requiere es una mente lista para aceptar la
            práctica sincera y querer <b className="text-foreground">ser feliz</b>.
          </p>
        </div>
      </article>
    </div>
  );
}
