import { Heart, Mail } from "lucide-react";

const footerLinks = [
  { href: "#terapias", label: "Terapias" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#espacos", label: "Espaços" },
  { href: "#testemunhos", label: "Testemunhos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const socialLinks = [
  { icon: Mail, href: "mailto:alice@aliceoliveira.pt", label: "Email" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-12 border-b border-background/10">
            {/* Logo */}
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-2">
                Alice Oliveira
              </h3>
              <p className="text-background/60 text-sm">
                Terapias Holísticas & Energéticas
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-xs text-background/40 max-w-2xl mx-auto leading-relaxed">
              As terapias holísticas são práticas complementares de bem-estar e
              não substituem diagnóstico, tratamento médico ou acompanhamento
              psicológico. Consulta sempre um profissional de saúde qualificado
              para questões médicas.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-background/40 flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Alice Oliveira. Feito com
              <Heart className="w-3 h-3 text-primary inline" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
