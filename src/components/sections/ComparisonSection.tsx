import celularesFisicos from "@/assets/celulares-fisicos.png";
import emuladoresVirtuais from "@/assets/emuladores-virtuais.png";

export const ComparisonSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 leading-tight">
            Veja na prática a <span className="text-neon text-glow">DIFERENÇA</span> 
            <br className="hidden sm:block" />entre os dois caminhos
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Celulares Físicos */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black rounded-lg border-2 border-red-500/50 overflow-hidden">
                  <img 
                    src={celularesFisicos}
                    alt="Mesa com vários celulares físicos conectados via cabos USB"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
                  ❌ Celulares Físicos
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Mesa bagunçada, cabos entrelaçados, celulares travando, aquecimento excessivo e limitações de escalabilidade. Um verdadeiro caos operacional.
                </p>
              </div>
            </div>

            {/* Emuladores Virtuais */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon to-neon/80 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black rounded-lg border-2 neon-border overflow-hidden">
                  <img 
                    src={emuladoresVirtuais}
                    alt="Setup profissional com emuladores Android organizados em monitor ultrawide"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-neon mb-3">
                  ✅ Emuladores Virtuais
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Setup profissional, organizado e escalável. Múltiplos WhatsApp rodando perfeitamente em um único computador, sem limitações físicas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-neon/5 border neon-border p-6 sm:p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-neon mb-4 text-glow">
              💡 A escolha é óbvia, não é?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Descubra exatamente como montar sua estrutura virtual de forma profissional e escalável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};