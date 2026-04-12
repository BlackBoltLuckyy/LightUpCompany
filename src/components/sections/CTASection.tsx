import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarCheck } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Quero transformar minha empresa com a Light Up.";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-card border border-border/50 shadow-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Sua empresa está pronta para o{" "}
            <span className="text-gradient">próximo nível</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Fale com a Light Up e descubra como transformar sua operação em uma máquina de crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="size-4" />
                Agendar diagnóstico
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
