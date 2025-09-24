import { CheckCircle, Target, Users, TrendingUp, Shield, Clock, Monitor, Smartphone } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Target className="w-10 h-10 text-neon" />,
      title: "Estratégia definida",
      description: "Saiba exatamente qual estrutura usar para cada tipo de campanha"
    },
    {
      icon: <Monitor className="w-10 h-10 text-neon" />,
      title: "Emuladores vs Físicos",
      description: "Comparação completa com prós, contras e recomendações práticas"
    },
    {
      icon: <Users className="w-10 h-10 text-neon" />,
      title: "Escalabilidade",
      description: "Como crescer de 1 para 50+ contas sem perder qualidade"
    },
    {
      icon: <Shield className="w-10 h-10 text-neon" />,
      title: "Segurança máxima",
      description: "Configurações para evitar banimentos e manter suas contas seguras"
    },
    {
      icon: <Clock className="w-10 h-10 text-neon" />,
      title: "Economia de tempo",
      description: "Setup otimizado que economiza horas de configuração"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-neon" />,
      title: "ROI maximizado",
      description: "Invista apenas no que realmente funciona e gera resultados"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 leading-tight">
            O que você vai <span className="text-neon text-glow">APRENDER</span> neste eBook
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Conhecimento testado e aprovado por <strong className="text-neon">4 anos de experiência</strong> prática
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16 px-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-6 sm:p-8 rounded-lg border neon-border hover:neon-glow transition-smooth text-center">
              <div className="flex justify-center mb-4 sm:mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 px-4">
          <div className="flex items-center justify-center space-x-2 text-neon text-lg sm:text-xl">
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-bold">Conteúdo 100% prático e aplicável</span>
          </div>
          
          <CTAButton size="xl" className="w-full sm:w-auto">
            📘 Quero o eBook agora por R$ 47,00
          </CTAButton>
        </div>
      </div>
    </section>
  );
};