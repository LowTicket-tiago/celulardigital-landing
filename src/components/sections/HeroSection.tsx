import { CTAButton } from "@/components/CTAButton";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="min-h-screen bg-background flex items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto text-center max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-neon text-glow leading-tight mb-4">
            🤔 Celular Físico ou Virtual?
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Descubra qual estrutura usar no seu 
            <span className="text-neon text-glow"> Marketing Digital</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Pare de perder tempo e dinheiro testando estruturas que não funcionam. 
            <strong className="text-neon"> 4 anos de experiência</strong> condensados em um eBook 
            completo com estratégias testadas para celulares físicos e emuladores Android.
          </p>

          {/* Preço com Desconto */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-xl sm:text-2xl text-red-500 line-through font-bold">
                R$ 67,00
              </span>
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-neon text-glow">
                R$ 47,00
              </div>
            </div>
            <p className="text-red-400 text-sm sm:text-base font-semibold">
              🔥 PROMOÇÃO POR TEMPO LIMITADO - ECONOMIZE R$ 20,00!
            </p>
          </div>
          
          <div className="pt-4">
            <CTAButton size="xl" className="animate-pulse w-full sm:w-auto">
              📘 Quero o eBook agora por R$ 47,00
            </CTAButton>
          </div>
          
          <div className="pt-4 text-sm text-muted-foreground">
            💡 <strong>Acesso imediato</strong> após a compra • 🔒 <strong>Compra 100% segura</strong>
          </div>
        </div>
      </div>
    </section>
  );
};