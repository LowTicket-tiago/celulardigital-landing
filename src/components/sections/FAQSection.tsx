import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTAButton } from "@/components/CTAButton";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Este eBook é para iniciantes ou avançados?",
      answer: "O conteúdo é ideal tanto para quem está começando quanto para quem já tem experiência e quer otimizar sua estrutura. Explicamos desde o básico até estratégias avançadas de escalabilidade."
    },
    {
      question: "Quanto tempo leva para implementar as estratégias?",
      answer: "Com as configurações step-by-step do eBook, você consegue montar sua estrutura ideal em menos de 2 horas. O tempo de leitura é de aproximadamente 1 hora."
    },
    {
      question: "Funciona com qualquer tipo de campanha?",
      answer: "Sim! As estratégias se aplicam a vendas, captação de leads, atendimento ao cliente e qualquer operação que use WhatsApp em escala."
    },
    {
      question: "Preciso investir em equipamentos caros?",
      answer: "Não! Uma das principais vantagens do eBook é mostrar como começar com baixo investimento e escalar gradualmente, investindo apenas no que realmente funciona."
    },
    {
      question: "O conteúdo fica desatualizado?",
      answer: "O eBook foca em estratégias fundamentais que não mudam com atualizações. São princípios testados há 4 anos que continuam funcionando perfeitamente."
    },
    {
      question: "Como recebo o eBook após a compra?",
      answer: "Imediatamente após a confirmação do pagamento, você recebe um email com o link para download. O processo é 100% automático e leva no máximo 5 minutos."
    },
    {
      question: "Posso usar em operações grandes?",
      answer: "Absolutamente! O eBook ensina desde estruturas para 1-5 contas até operações com 50+ contas. Inclui estratégias específicas para cada nível de escalabilidade."
    },
    {
      question: "Tem suporte após a compra?",
      answer: "O eBook é autoexplicativo e completo. Todas as dúvidas técnicas são antecipadas e respondidas dentro do próprio material."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Principais <span className="text-neon text-glow">DÚVIDAS</span> respondidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa saber antes de fazer sua compra
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border neon-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-neon transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Ainda tem dúvidas? O eBook é tão completo que vai responder perguntas que você nem sabia que tinha!
          </p>
          
          <CTAButton size="xl">
            📘 Quero o eBook agora por R$ 47,00
          </CTAButton>
        </div>
      </div>
    </section>
  );
};