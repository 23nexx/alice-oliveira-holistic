import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testemunhos = [
  {
    name: "Sofia M.",
    location: "Lisboa",
    text: "A Alice tem um dom especial para criar um ambiente de total confiança. Saí da sessão muito mais leve e centrada. Recomendo vivamente.",
    rating: 5,
  },
  {
    name: "Ricardo P.",
    location: "Cascais",
    text: "Estava cético, mas decidi experimentar. A limpeza energética do meu escritório fez uma diferença que não consigo explicar. O ambiente ficou completamente diferente.",
    rating: 5,
  },
  {
    name: "Ana C.",
    location: "Oeiras",
    text: "Há meses que procurava algo para me ajudar com o stress. As sessões com cristais e óleos essenciais tornaram-se o meu momento de paz semanal.",
    rating: 5,
  },
  {
    name: "Miguel S.",
    location: "Sintra",
    text: "Profissionalismo, sensibilidade e conhecimento. A Alice explica tudo com clareza e respeita sempre o nosso ritmo. Excelente experiência.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const Testemunhos = () => {
  return (
    <section id="testemunhos" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />

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
            Experiências
          </span>
          <h2 className="heading-section text-foreground mt-2 mb-4">
            O Que Dizem
          </h2>
          <p className="body-base max-w-2xl mx-auto">
            Testemunhos de pessoas que encontraram equilíbrio e bem-estar.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testemunhos.map((testemunho, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-6 md:p-8 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testemunho.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testemunho.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {testemunho.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testemunho.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testemunho.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
