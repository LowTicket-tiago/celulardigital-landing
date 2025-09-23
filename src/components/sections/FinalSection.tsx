import { Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import sectionBg from "@/assets/section-bg.jpg";

export const FinalSection = () => {
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgência */}
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-8 mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl md:text-3xl font-black text-red-400">
                ⚠️ ATENÇÃO: PREÇO PROMOCIONAL
              </h2>
            </div>
            
            <p className="text-lg text-red-200 mb-6">
              Este eBook normalmente custa <span className="line-through">R$ 197,00</span>, mas por tempo limitado está por apenas:
            </p>
            
            <div className="text-5xl md:text-6xl font-black text-neon text-glow mb-4">
              R$ 67,00
            </div>
            
            <p className="text-red-300">
              🔥 <strong>Oferta válida apenas esta semana!</strong>
            </p>
          </div>

          {/* Último apelo */}
          <div className="space-y-8 mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-foreground">
              Não deixe para depois o que pode <span className="text-neon text-glow">MUDAR SUA VIDA</span> hoje
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-card p-6 rounded-lg border neon-border">
                <Clock className="w-10 h-10 text-neon mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Acesso Imediato</h4>
                <p className="text-muted-foreground text-sm">
                  Comece a aplicar hoje mesmo
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border neon-border">
                <TrendingUp className="w-10 h-10 text-neon mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">ROI Garantido</h4>
                <p className="text-muted-foreground text-sm">
                  Economize tempo e dinheiro
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border neon-border">
                <AlertTriangle className="w-10 h-10 text-neon mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Oferta Limitada</h4>
                <p className="text-muted-foreground text-sm">
                  Preço volta ao normal em breve
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground">
              Pare de perder tempo testando estruturas que não funcionam.
              <br />
              <strong className="text-neon">A solução está aqui, agora.</strong>
            </p>
            
            <CTAButton size="xl" className="animate-pulse">
              📘 SIM! Quero o eBook por R$ 67,00 AGORA
            </CTAButton>
            
            <p className="text-sm text-muted-foreground">
              🔒 Pagamento 100% seguro • 💳 Cartão, PIX ou Boleto • 📧 Acesso imediato
            </p>
          </div>

          {/* Escassez final */}
          <div className="mt-12 p-6 bg-neon/5 border neon-border rounded-lg">
            <p className="text-lg font-bold text-neon">
              ⏰ Restam poucas horas para garantir seu eBook pelo preço promocional
            </p>
            <p className="text-muted-foreground mt-2">
              Não seja mais um que fica "pensando" enquanto outros saem na frente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};