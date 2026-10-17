import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Zap,
  Moon,
  Compass,
  Smile,
} from "lucide-react";

const beneficios = [
  {
    icon: Brain,
    title: "Redução do Stress",
    description: "Técnicas que ajudam a acalmar o sistema nervoso e encontrar paz interior.",
  },
  {
    icon: Heart,
    title: "Equilíbrio Emocional",
    description: "Apoio na gestão de emoções e no processamento de experiências difíceis.",
  },
  {
    icon: Zap,
    title: "Mais Energia",
    description: "Libertação de bloqueios energéticos que causam cansaço e apatia.",
  },
  {
    icon: Moon,
    title: "Melhor Descanso",
    description: "Relaxamento profundo que contribui para noites de sono mais reparadoras.",
  },
  {
    icon: Compass,
    title: "Clareza Mental",
    description: "Foco renovado e maior capacidade de tomar decisões alinhadas.",
  },
  {
    icon: Smile,
    title: "Bem-Estar Geral",
    description: "Sensação de leveza, harmonia e conexão consigo mesmo(a).",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Beneficios = () => {
  return (
    <section id="beneficios" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Para Ti
          </span>
          <h2 className="heading-section text-foreground mt-2 mb-4">
            Benefícios das Terapias
          </h2>
          <p className="body-base max-w-2xl mx-auto">
            As terapias energéticas são complementares e podem apoiar o teu bem-estar
            de diversas formas.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {beneficios.map((beneficio, index) => {
            const IconComponent = beneficio.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {beneficio.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {beneficio.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          As terapias holísticas são complementares e não substituem acompanhamento
          médico ou psicológico. Os resultados variam de pessoa para pessoa.
        </motion.p>
      </div>
    </section>
  );
};
