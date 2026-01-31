import { motion } from "framer-motion";
import { Home, Building2, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const espacos = [
  {
    icon: Home,
    title: "Casas",
    description:
      "Limpeza e harmonização do lar para criar um ambiente de paz e bem-estar para toda a família.",
  },
  {
    icon: Building2,
    title: "Espaços Comerciais",
    description:
      "Purificação energética de lojas, consultórios e outros espaços de atendimento ao público.",
  },
  {
    icon: Briefcase,
    title: "Locais de Trabalho",
    description:
      "Renovação da energia de escritórios e ambientes de trabalho para maior produtividade e harmonia.",
  },
];

export const Espacos = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="espacos" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Espaços
              </span>
              <h2 className="heading-section text-foreground mt-2 mb-4">
                Limpeza Energética de Espaços
              </h2>
              <p className="body-base mb-6">
                Os espaços onde vivemos e trabalhamos absorvem energia ao longo do
                tempo. Uma limpeza energética renova a vibração do ambiente,
                promovendo bem-estar e harmonia.
              </p>
              <p className="body-base mb-8">
                Cada espaço é avaliado individualmente e o trabalho é personalizado
                de acordo com as necessidades específicas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={scrollToContact}
                >
                  Solicitar Avaliação
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                * Intervenções maiores e casos específicos: valor sob consulta
              </p>
            </motion.div>

            {/* Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {espacos.map((espaco, index) => {
                const IconComponent = espaco.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 p-5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:shadow-glass transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                        {espaco.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {espaco.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
