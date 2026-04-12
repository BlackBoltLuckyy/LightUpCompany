import { motion } from "framer-motion";
import { Palette, PenTool, FolderOpen, Code2, BarChart3, FileText, Handshake } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Logotipos, paleta de cores, tipografia, manual da marca e aplicações profissionais.",
  },
  {
    icon: PenTool,
    title: "Design & Criativos",
    description: "Social media (feed, stories, reels), campanhas pagas (Facebook, Google Ads) e materiais offline.",
  },
  {
    icon: FolderOpen,
    title: "Projetos & Clientes",
    description: "Gestão completa: briefing, propostas, criativos aprovados e materiais finais organizados.",
  },
  {
    icon: Code2,
    title: "TI & Desenvolvimento",
    description: "Websites, aplicativos, landing pages, automações e agentes de IA personalizados.",
  },
  {
    icon: BarChart3,
    title: "Relatórios & Métricas",
    description: "Análises de social media, tráfego pago, dashboards e KPIs em tempo real.",
  },
  {
    icon: FileText,
    title: "Modelos & Templates",
    description: "Propostas comerciais, apresentações e contratos padronizados e profissionais.",
  },
  {
    icon: Handshake,
    title: "Comercial & Vendas",
    description: "Gestão de leads, propostas enviadas, contratos fechados e follow-ups automatizados.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary mb-2 block">O que fazemos</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Soluções <span className="text-gradient">completas</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Da identidade visual à automação com IA, cuidamos de cada etapa do seu crescimento digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
