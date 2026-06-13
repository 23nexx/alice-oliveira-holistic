import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contacto = () => {
  const whatsappNumber = "919208806";
  const whatsappLink = `https://wa.me/351${whatsappNumber}`;

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-primary/5 to-muted/30" />

      <div className="container relative z-10 px-4">
        {/* CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-foreground mb-4">
            Queres sentir-te mais alinhado(a)?
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            O primeiro passo é uma conversa. Envia-me uma mensagem no WhatsApp e
            descobre como as terapias energéticas podem apoiar o teu bem-estar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="p-8 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50 shadow-card text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
              <MessageCircle className="w-8 h-8 text-secondary" />
            </div>

            <div>
              <p className="font-medium text-foreground text-lg">WhatsApp</p>
              <p className="text-sm text-muted-foreground">
                Resposta mais rápida
              </p>
            </div>


            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-pulse"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              Enviar mensagem no WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
