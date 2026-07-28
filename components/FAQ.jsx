import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { ChevronDown } from '@/components/icons';
import { faqs } from '@/data/faq';

/**
 * Acordeón de preguntas frecuentes con <details>/<summary> nativos.
 *
 * Sin JavaScript: el navegador se encarga de abrir y cerrar, y el texto de las
 * respuestas está en el HTML aunque el acordeón se vea cerrado, así que Google
 * lo indexa completo.
 */
export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-y border-b border-dark-border bg-dark-surface"
      aria-labelledby="faq-titulo"
    >
      <Container>
        <SectionHeading
          id="faq-titulo"
          eyebrow="Preguntas frecuentes"
          title="Todo sobre los swaps LS"
          align="center"
          description="Las dudas que más nos llegan por WhatsApp antes de arrancar un proyecto."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-dark-border border border-dark-border bg-dark-base">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={Math.min(index * 60, 300)}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-display text-base font-bold uppercase text-white transition-colors hover:text-primary-light sm:px-7 sm:text-lg [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-base font-bold uppercase leading-snug sm:text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={22}
                    className="shrink-0 text-secondary transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-6 font-sans text-sm leading-relaxed text-muted sm:px-7 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
