import { Instagram, Facebook, Youtube } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-neon text-glow mb-4">
              Devzapp
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Especialistas em estruturas de Marketing Digital. 
              Há 4 anos ajudando empresas a escalar suas operações com WhatsApp.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="bg-card p-3 rounded-lg border neon-border hover:neon-glow transition-smooth"
              aria-label="Instagram Devzapp"
            >
              <Instagram className="w-6 h-6 text-neon" />
            </a>
            <a 
              href="#" 
              className="bg-card p-3 rounded-lg border neon-border hover:neon-glow transition-smooth"
              aria-label="Facebook Devzapp"
            >
              <Facebook className="w-6 h-6 text-neon" />
            </a>
            <a 
              href="#" 
              className="bg-card p-3 rounded-lg border neon-border hover:neon-glow transition-smooth"
              aria-label="YouTube Devzapp"
            >
              <Youtube className="w-6 h-6 text-neon" />
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © 2024 Devzapp. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Este produto é comercializado com base na garantia de qualidade e satisfação do cliente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};