import { motion } from "framer-motion";
import { Layers, TrendingUp, Cpu, Brain, Sparkles } from "lucide-react";

const items = [
  { icon: Layers, title: "Integração marketing + tecnologia" },
  { icon: TrendingUp, title: "Foco em crescimento e escala" },
  { icon: Cpu, title: "Automação inteligente" },
  { icon: Brain, title: "IA aplicada nos processos" },
  { icon: Sparkles, title: "Soluções personalizadas" },
];

const Differentials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary mb-2 block">Por que a LightUpCompany</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Nossos <span className="text-gradient">diferenciais</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                <item.icon className="size-6 text-primary-foreground" />
              </div>
              <h3 className="text-sm font-heading font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
