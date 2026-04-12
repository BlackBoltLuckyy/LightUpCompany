import { motion } from "framer-motion";
import { Search, Layout, Users, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico do Negócio",
    description: "Analisamos sua operação, público e concorrência para traçar a melhor estratégia.",
  },
  {
    icon: Layout,
    number: "02",
    title: "Estruturação Digital",
    description: "Criamos sua presença digital completa: site, redes, identidade e funis de venda.",
  },
  {
    icon: Users,
    number: "03",
    title: "Atração de Clientes",
    description: "Tráfego pago, SEO e conteúdo estratégico para gerar leads qualificados.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Automação e Escala",
    description: "Automatizamos processos com IA para escalar seus resultados continuamente.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary mb-2 block">Metodologia</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Como <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um processo estruturado para levar sua empresa ao próximo nível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto mb-5 flex items-center justify-center shadow-glow">
                <step.icon className="size-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest">{step.number}</span>
              <h3 className="text-lg font-heading font-semibold mt-1 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
