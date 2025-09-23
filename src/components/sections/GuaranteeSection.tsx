import { Shield, Clock, CheckCircle } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border neon-border rounded-xl p-12 neon-glow">
            <div className="flex justify-center mb-8">
              <div className="bg-neon/10 p-6 rounded-full">
                <Shield className="w-16 h-16 text-neon" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
              <span className="text-neon text-glow">100% SEM ENROLAÇÃO</span>
            </h2>
            
            <p className="text-2xl font-bold text-foreground mb-8">
              Comprou, recebeu.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-3">
                <Clock className="w-8 h-8 text-neon" />
                <h3 className="font-bold text-foreground">Acesso Imediato</h3>
                <p className="text-muted-foreground text-sm">
                  Receba o eBook no seu email em até 5 minutos
                </p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <CheckCircle className="w-8 h-8 text-neon" />
                <h3 className="font-bold text-foreground">Conteúdo Garantido</h3>
                <p className="text-muted-foreground text-sm">
                  Material completo e atualizado
                </p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <Shield className="w-8 h-8 text-neon" />
                <h3 className="font-bold text-foreground">Compra Segura</h3>
                <p className="text-muted-foreground text-sm">
                  Transação protegida e dados criptografados
                </p>
              </div>
            </div>
            
            <div className="bg-neon/5 border neon-border rounded-lg p-6">
              <p className="text-lg text-foreground font-medium">
                🎯 <strong>Nossa promessa:</strong> Você terá acesso ao conhecimento mais valioso 
                sobre estruturas de Marketing Digital que existe no mercado brasileiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};