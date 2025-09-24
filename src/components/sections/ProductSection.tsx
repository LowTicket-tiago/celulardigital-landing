import { BookOpen, Download, Users, Clock } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

export const ProductSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-neon" />,
      title: "eBook Completo",
      description: "Guia definitivo com mais de 50 páginas de conteúdo prático"
    },
    {
      icon: <Download className="w-8 h-8 text-neon" />,
      title: "Acesso Imediato",
      description: "Download direto após a compra, sem complicações"
    },
    {
      icon: <Users className="w-8 h-8 text-neon" />,
      title: "4 Anos de Experiência",
      description: "Estratégias testadas e aprovadas em centenas de campanhas"
    },
    {
      icon: <Clock className="w-8 h-8 text-neon" />,
      title: "Economia de Tempo",
      description: "Evite meses de testes e aplique o que já funciona"
    }
  ];

  const includes = [
    "✅ Comparação detalhada: Celulares Físicos vs Emuladores",
    "✅ Configurações step-by-step para cada estrutura",
    "✅ Recomendações de hardware e software",
    "✅ Estratégias de segurança para evitar banimentos",
    "✅ Dicas de escalabilidade para crescer sem problemas",
    "✅ Análise de custos e ROI de cada abordagem",
    "✅ Troubleshooting dos problemas mais comuns",
    "✅ Bonus: Templates de configuração prontos"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 leading-tight">
            O que está <span className="text-neon text-glow">INCLUSO</span> no eBook
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para montar a estrutura perfeita para seu Marketing Digital
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Features */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Por que este eBook é diferente?
              </h3>
              
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 bg-neon/10 p-2 sm:p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="bg-card p-6 sm:p-8 rounded-lg border neon-border order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
                📘 Conteúdo Completo
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-neon text-base sm:text-lg font-bold flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{item.replace('✅ ', '')}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-neon/5 rounded-lg border neon-border">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-lg sm:text-xl text-red-500 line-through">R$ 67,00</span>
                    <p className="text-2xl sm:text-3xl font-black text-neon">
                      R$ 47,00
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Investimento único • Acesso vitalício
                  </p>
                  <p className="text-xs sm:text-sm text-red-400 mt-1 font-semibold">
                    💰 Economize R$ 20,00 agora!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <CTAButton size="xl" className="w-full sm:w-auto">
              📘 Quero o eBook agora por R$ 47,00
            </CTAButton>
            
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground px-4">
              🔒 Compra 100% segura • 💳 Cartão, PIX ou Boleto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};