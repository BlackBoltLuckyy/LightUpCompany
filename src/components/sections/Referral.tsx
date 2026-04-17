import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Bot, MessageCircle, Gift, ArrowRight } from "lucide-react";

const steps = [
  { icon: Users, text: "Um cliente LightUpCompany indica 3 empresas" },
  { icon: MessageCircle, text: "As empresas entram em contato via WhatsApp" },
  { icon: Bot, text: "Atendimento automatizado pelo agente LUP (IA)" },
  { icon: ArrowRight, text: "Equipe apresenta soluções personalizadas" },
  { icon: Gift, text: "Cliente indicador recebe benefícios exclusivos" },
];

const WHATSAPP_URL = "https://wa.me/5519995829205?text=Quero participar do programa de indicações da LightUpCompany!";

const Referral = () => {
  return (
    <section id="indicacoes" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-accent mb-2 block">Programa exclusivo</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Programa de <span className="text-gradient">Indicações</span>
          </h2>
          <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
            Crescimento baseado em rede: indique, conecte e todos crescem juntos.
          </p>

          {/* Formula */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-card border border-primary/20 mb-12 text-sm font-medium">
            <span>Indicação</span>
            <span className="text-primary">+</span>
            <span>Serviços LightUpCompany</span>
            <span className="text-primary">=</span>
            <span className="text-gradient font-bold">Crescimento Escalável</span>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <step.icon className="size-5 text-primary" />
              </div>
              <p className="text-sm font-medium">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quero participar do programa
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Referral;
