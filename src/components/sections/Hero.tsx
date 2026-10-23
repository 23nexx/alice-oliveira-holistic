import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import heroImage from "@/assets/hero-energy.jpg";

const trustChips = [
  "Avaliação individual",
  "Sessões personalizadas",
  "Ambiente seguro e acolhedor",
];

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-soft/20 to-background" />
      <AuroraBackground />
      <FloatingParticles />

      {/* Hero image overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Terapeuta Holística • Terapias Energéticas</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-hero text-foreground mb-6"
          >
            Terapeuta Holística
            <br />
            <span className="text-primary">
              Terapias Holísticas e Energéticas
            </span>
            <br />
            para equilíbrio e bem-estar
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large max-w-2xl mx-auto mb-10"
          >
            Sessões personalizadas de terapias holísticas e energéticas para
            promover equilíbrio, bem-estar e harmonia interior. Litoterapia,
            aromaterapia, fitoterapia e limpeza energética de espaços numa
            abordagem individual e acolhedora.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-pulse shadow-glow"
              onClick={() => scrollToSection("#contacto")}
            >
              Marcar Sessão
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-border/50 hover:bg-card/50 backdrop-blur-sm"
              onClick={() => scrollToSection("#terapias")}
            >
              Ver Terapias
            </Button>
          </motion.div>

          {/* Trust chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {trustChips.map((chip, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-card/40 backdrop-blur-sm border border-border/30 text-sm text-muted-foreground"
              >
                {chip}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-1.5 h-3 rounded-full bg-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
