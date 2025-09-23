import { AlertTriangle, Smartphone, Clock, DollarSign } from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";

export const PainSection = () => {
  const pains = [
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: "Celulares travando constantemente",
      description: "Seus dispositivos não aguentam rodar múltiplos WhatsApp e você perde mensagens importantes"
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Tempo perdido com configurações",
      description: "Horas tentando configurar emuladores que não funcionam ou celulares que dão problema"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
      title: "Dinheiro jogado fora",
      description: "Investindo em equipamentos desnecessários sem saber qual estrutura realmente funciona"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Campanhas que falham",
      description: "Perdendo vendas porque sua estrutura não suporta o volume de mensagens necessário"
    }
  ];

  return (
    <section 
      className="py-20 bg-section-bg relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95)), url(${sectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Cansado de <span className="text-red-500">PERDER TEMPO E DINHEIRO</span> 
            <br />com estruturas que não funcionam?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se você está começando ou quer escalar suas campanhas, esses problemas te impedem de crescer:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pains.map((pain, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {pain.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {pain.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-neon text-glow">
            ⚠️ Isso não precisa ser assim!
          </p>
        </div>
      </div>
    </section>
  );
};