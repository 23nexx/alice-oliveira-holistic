import { motion } from "framer-motion";
import { Gem, Flower2, Leaf, Home, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const terapias = [
  {
    id: "litoterapia",
    icon: Gem,
    title: "Litoterapia",
    description:
      "Harmonização energética através do poder dos cristais. Uma sessão focada no reequilíbrio dos centros energéticos usando pedras selecionadas para as tuas necessidades.",
    duration: "45–60 min",
    badge: null,
    color: "primary",
  },
  {
    id: "litoterapia-aromaterapia",
    icon: Flower2,
    title: "Litoterapia com Aromaterapia",
    description:
      "Combinação de cristais e óleos essenciais terapêuticos. Uma experiência sensorial completa para relaxamento profundo e equilíbrio emocional.",
    duration: "60 min",
    badge: null,
    color: "secondary",
  },
  {
    id: "litoterapia-completa",
    icon: Leaf,
    title: "Litoterapia com Aromaterapia e Fitoterapia",
    description:
      "A experiência mais completa: cristais, óleos essenciais e plantas medicinais. Inclui recomendações personalizadas para continuares o trabalho em casa.",
    duration: "75 min",
    badge: "Inclui oferta personalizada",
    color: "accent",
  },
  {
    id: "limpeza-espacos",
    icon: Home,
    title: "Limpeza Energética de Espaços",
    description:
      "Harmonização e purificação energética de casas, escritórios ou espaços comerciais. Renovação da energia do ambiente para maior bem-estar.",
    duration: "Varia conforme espaço",
    badge: "Valor sob consulta",
    color: "primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const Terapias = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="terapias" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

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
            Serviços
          </span>
          <h2 className="heading-section text-foreground mt-2 mb-4">Terapias</h2>
          <p className="body-base max-w-2xl mx-auto">
            Cada pessoa é única. Por isso, as sessões são sempre personalizadas
            de acordo com as tuas necessidades e objetivos.
          </p>
        </motion.div>

        {/* Therapy cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {terapias.map((terapia) => {
            const IconComponent = terapia.icon;
            const glowClass =
              terapia.color === "primary"
                ? "group-hover:shadow-glow"
                : terapia.color === "secondary"
                ? "group-hover:shadow-glow-teal"
                : "group-hover:shadow-glow-gold";

            return (
              <motion.div
                key={terapia.id}
                variants={itemVariants}
                className={`group relative p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:bg-card/80 ${glowClass}`}
              >
                {/* Badge */}
                {terapia.badge && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                    {terapia.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                    terapia.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : terapia.color === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="heading-card text-foreground mb-3">
                  {terapia.title}
                </h3>
                <p className="body-base mb-4">{terapia.description}</p>

                {/* Duration & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{terapia.duration}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10"
                    onClick={scrollToContact}
                  >
                    Pedir informação
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Pacotes e valores personalizados disponíveis • Recomendação após
          avaliação inicial
        </motion.p>
      </div>
    </section>
  );
};
