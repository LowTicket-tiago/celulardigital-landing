import { CTAButton } from "@/components/CTAButton";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-neon text-glow leading-tight">
            Celular Físico ou Virtual?
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Descubra qual estrutura usar no seu 
            <span className="text-neon text-glow"> Marketing Digital</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pare de perder tempo e dinheiro testando estruturas que não funcionam. 
            <strong className="text-neon"> 4 anos de experiência</strong> condensados em um eBook 
            completo com estratégias testadas para celulares físicos e emuladores Android.
          </p>
          
          <div className="pt-8">
            <CTAButton size="xl" className="animate-pulse">
              📘 Quero o eBook agora por R$ 67,00
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