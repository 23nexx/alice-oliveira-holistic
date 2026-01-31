import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Terapias } from "@/components/sections/Terapias";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Beneficios } from "@/components/sections/Beneficios";
import { Espacos } from "@/components/sections/Espacos";
import { Testemunhos } from "@/components/sections/Testemunhos";
import { FAQ } from "@/components/sections/FAQ";
import { Contacto } from "@/components/sections/Contacto";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Terapias />
        <ComoFunciona />
        <Beneficios />
        <Espacos />
        <Testemunhos />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
