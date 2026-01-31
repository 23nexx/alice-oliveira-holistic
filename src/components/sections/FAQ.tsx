import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como é determinado o valor da sessão?",
    answer:
      "O valor depende do tipo de sessão escolhida e das tuas necessidades específicas. Após uma breve conversa inicial, envio-te toda a informação detalhada e a recomendação mais adequada para ti. Existem também pacotes disponíveis para quem deseja um acompanhamento continuado.",
  },
  {
    question: "Como sei qual terapia escolher?",
    answer:
      "Não precisas de saber! Na conversa inicial, exploro contigo os teus objetivos e necessidades. Com base nisso, recomendo a abordagem mais adequada. Podes sempre começar pela Litoterapia e, se quiseres, explorar combinações nas sessões seguintes.",
  },
  {
    question: "Preciso de acreditar para funcionar?",
    answer:
      "As terapias energéticas não exigem nenhuma crença específica. Basta estares disponível para a experiência. Muitas pessoas chegam céticas e surpreendem-se com os resultados. O importante é manteres uma mente aberta.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "A duração varia conforme o tipo de sessão: a Litoterapia simples dura cerca de 45-60 minutos, enquanto as sessões combinadas podem ir até 75 minutos. A primeira sessão costuma ser um pouco mais longa devido à avaliação inicial.",
  },
  {
    question: "Como funciona a limpeza energética de espaços?",
    answer:
      "Começo por uma visita ao local para avaliar as necessidades. Depois, realizo a limpeza utilizando cristais, ervas e técnicas específicas. O tempo e valor dependem do tamanho e complexidade do espaço. Envio orçamento após avaliação.",
  },
  {
    question: "Qual é a política de cancelamento?",
    answer:
      "Podes cancelar ou remarcar até 24 horas antes da sessão sem qualquer custo. Cancelamentos com menos de 24 horas estão sujeitos a uma taxa de 50% do valor. Não-comparecimentos sem aviso implicam o valor total da sessão.",
  },
  {
    question: "As sessões são presenciais ou online?",
    answer:
      "As sessões de terapia são presenciais, num espaço acolhedor e preparado para o efeito. Consultas iniciais e acompanhamento podem ser feitos por videochamada, se preferires.",
  },
  {
    question: "As terapias substituem tratamento médico?",
    answer:
      "Não. As terapias holísticas são complementares e não substituem diagnóstico, tratamento médico ou acompanhamento psicológico. Se tens alguma condição de saúde, mantém sempre o acompanhamento com os profissionais de saúde adequados.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Dúvidas
          </span>
          <h2 className="heading-section text-foreground mt-2 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="body-base max-w-2xl mx-auto">
            Encontra aqui as respostas às questões mais comuns. Se tiveres outras
            dúvidas, entra em contacto.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
