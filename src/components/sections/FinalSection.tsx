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
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 mx-4">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-red-400 text-center leading-tight">
                ⚠️ ATENÇÃO: PREÇO PROMOCIONAL
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-red-200 mb-6 px-4">
              Este eBook normalmente custa <span className="line-through">R$ 67,00</span>, mas por tempo limitado está por apenas:
            </p>
            
            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-neon text-glow mb-4">
              R$ 47,00
            </div>
            
            <p className="text-red-300">
              🔥 <strong>Oferta válida apenas esta semana!</strong>
            </p>
          </div>

          {/* Último apelo */}
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12 px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground text-center leading-tight">
              Não deixe para depois o que pode <span className="text-neon text-glow">MUDAR SUA VIDA</span> hoje
            </h3>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="bg-card p-4 sm:p-6 rounded-lg border neon-border text-center">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-neon mx-auto mb-3 sm:mb-4" />
                <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">Acesso Imediato</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Comece a aplicar hoje mesmo
                </p>
              </div>
              
              <div className="bg-card p-4 sm:p-6 rounded-lg border neon-border text-center">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-neon mx-auto mb-3 sm:mb-4" />
                <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">ROI Garantido</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Economize tempo e dinheiro
                </p>
              </div>
              
              <div className="bg-card p-4 sm:p-6 rounded-lg border neon-border text-center">
                <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-neon mx-auto mb-3 sm:mb-4" />
                <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">Oferta Limitada</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Preço volta ao normal em breve
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="space-y-6 px-4">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center">
              Pare de perder tempo testando estruturas que não funcionam.
              <br className="hidden sm:block" />
              <strong className="text-neon">A solução está aqui, agora.</strong>
            </p>
            
            <CTAButton size="xl" className="animate-pulse w-full sm:w-auto">
              📘 SIM! Quero o eBook por R$ 47,00 AGORA
            </CTAButton>
            
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              🔒 Pagamento 100% seguro • 💳 Cartão, PIX ou Boleto • 📧 Acesso imediato
            </p>
          </div>

          {/* Escassez final */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-neon/5 border neon-border rounded-lg mx-4 text-center">
            <p className="text-base sm:text-lg font-bold text-neon">
              ⏰ Restam poucas horas para garantir seu eBook pelo preço promocional
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Não seja mais um que fica "pensando" enquanto outros saem na frente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};