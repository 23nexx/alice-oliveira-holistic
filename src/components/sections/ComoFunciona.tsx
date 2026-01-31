import { motion } from "framer-motion";
import { Search, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Avaliação Energética",
    description:
      "Conversa inicial para compreender as tuas necessidades, objetivos e estado energético atual. Esta avaliação permite criar um plano personalizado.",
    color: "primary",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Sessão Personalizada",
    description:
      "Com base na avaliação, seleciono os cristais, óleos ou ervas mais adequados. Cada sessão é única e adaptada ao teu momento.",
    color: "secondary",
  },
  {
    number: "03",
    icon: Heart,
    title: "Integração & Recomendações",
    description:
      "No final, recebes orientações práticas para integrares os benefícios no dia-a-dia e continuares o trabalho de equilíbrio.",
    color: "accent",
  },
];

export const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Processo
          </span>
          <h2 className="heading-section text-foreground mt-2 mb-4">
            Como Funciona
          </h2>
          <p className="body-base max-w-2xl mx-auto">
            Um caminho simples e acolhedor para o teu equilíbrio interior.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20 -translate-x-1/2" />

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span
                      className={`text-5xl font-serif font-bold ${
                        step.color === "primary"
                          ? "text-primary/20"
                          : step.color === "secondary"
                          ? "text-secondary/20"
                          : "text-accent/20"
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3 className="heading-card text-foreground mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="body-base">{step.description}</p>
                  </div>

                  {/* Center icon */}
                  <div
                    className={`hidden md:flex w-16 h-16 rounded-full items-center justify-center border-4 border-background shadow-card z-10 ${
                      step.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : step.color === "secondary"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
