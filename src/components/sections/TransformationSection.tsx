import { ArrowRight, X, CheckCircle } from "lucide-react";
import transformationBg from "@/assets/transformation-bg.jpg";

export const TransformationSection = () => {
  const beforeAfter = [
    {
      before: "Celulares travando constantemente",
      after: "Estrutura estável e confiável funcionando 24/7"
    },
    {
      before: "Perdendo tempo configurando",
      after: "Setup otimizado em menos de 2 horas"
    },
    {
      before: "Gastando sem direção",
      after: "Investimento certeiro que traz retorno"
    },
    {
      before: "Campanhas falham por problemas técnicos",
      after: "Campanhas escaláveis que geram resultados"
    },
    {
      before: "Medo de ser banido",
      after: "Contas seguras com configurações testadas"
    }
  ];

  return (
    <section 
      className="py-20 bg-section-bg relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url(${transformationBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 leading-tight">
            A <span className="text-neon text-glow">TRANSFORMAÇÃO</span> que este eBook 
            <br className="hidden sm:block" />vai gerar na sua operação
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como sua realidade vai mudar depois de aplicar as estratégias do eBook
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            {/* ANTES */}
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center lg:text-right">
                <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-6 sm:mb-8">
                  ❌ ANTES (Sem o eBook)
                </h3>
              </div>
              
              {beforeAfter.map((item, index) => (
                <div key={index} className="bg-red-900/20 border border-red-500/30 p-3 sm:p-4 rounded-lg">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-red-200 leading-relaxed">{item.before}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SETA */}
            <div className="flex justify-center py-4 lg:py-0">
              <div className="bg-neon/10 p-4 sm:p-6 lg:p-8 rounded-full">
                <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-neon" />
              </div>
            </div>

            {/* DEPOIS */}
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-neon mb-6 sm:mb-8">
                  ✅ DEPOIS (Com o eBook)
                </h3>
              </div>
              
              {beforeAfter.map((item, index) => (
                <div key={index} className="bg-neon/10 border neon-border p-3 sm:p-4 rounded-lg">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-neon flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-neon/5 border neon-border p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-neon mb-4 text-glow">
              🚀 Esta pode ser a sua realidade em 24 horas!
            </h3>
            <p className="text-lg text-muted-foreground">
              Não espere mais para ter a estrutura profissional que seus negócios merecem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};