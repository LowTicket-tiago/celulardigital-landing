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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            O que está <span className="text-neon text-glow">INCLUSO</span> no eBook
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para montar a estrutura perfeita para seu Marketing Digital
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Features */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">
                Por que este eBook é diferente?
              </h3>
              
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-neon/10 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="bg-card p-8 rounded-lg border neon-border">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                📘 Conteúdo Completo
              </h3>
              
              <div className="space-y-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-neon text-lg font-bold">✓</span>
                    <p className="text-foreground">{item.replace('✅ ', '')}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-neon/5 rounded-lg border neon-border">
                <div className="text-center">
                  <p className="text-3xl font-black text-neon mb-2">
                    R$ 67,00
                  </p>
                  <p className="text-muted-foreground">
                    Investimento único • Acesso vitalício
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <CTAButton size="xl">
              📘 Quero o eBook agora por R$ 67,00
            </CTAButton>
            
            <p className="mt-4 text-sm text-muted-foreground">
              🔒 Compra 100% segura • 💳 Cartão, PIX ou Boleto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};