import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Clock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const terapiaOptions = [
  { value: "litoterapia", label: "Litoterapia" },
  { value: "litoterapia-aromaterapia", label: "Litoterapia com Aromaterapia" },
  {
    value: "litoterapia-completa",
    label: "Litoterapia + Aromaterapia + Fitoterapia",
  },
  { value: "limpeza-espacos", label: "Limpeza Energética de Espaços" },
  { value: "outro", label: "Outro / Não sei ainda" },
];

export const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    terapia: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Entro em contacto contigo dentro de 24 horas.",
    });

    setFormData({ name: "", contact: "", terapia: "", message: "" });
    setIsSubmitting(false);
  };

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
            O primeiro passo é uma conversa. Entra em contacto e descobre como as
            terapias energéticas podem apoiar o teu bem-estar.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50 shadow-card"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nome *
                    </label>
                    <Input
                      id="name"
                      placeholder="O teu nome"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email ou Telefone *
                    </label>
                    <Input
                      id="contact"
                      placeholder="email@exemplo.com ou 912 345 678"
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="terapia"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Terapia de Interesse
                    </label>
                    <Select
                      value={formData.terapia}
                      onValueChange={(value) =>
                        setFormData({ ...formData, terapia: value })
                      }
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Seleciona uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        {terapiaOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Conta-me um pouco sobre o que procuras..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-pulse"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "A enviar..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* WhatsApp card */}
              <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">
                      Resposta mais rápida
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-secondary/30 text-secondary hover:bg-secondary/10"
                  onClick={() =>
                    window.open("https://wa.me/351900000000", "_blank")
                  }
                >
                  Enviar mensagem
                </Button>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Resposta em 24h
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Entro em contacto o mais breve possível
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs text-muted-foreground">
                      alice@aliceoliveira.pt
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Telefone
                    </p>
                    <p className="text-xs text-muted-foreground">
                      +351 900 000 000
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
