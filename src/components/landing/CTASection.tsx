import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Setup em menos de 24 horas",
  "Sem necessidade de conhecimento técnico",
  "Suporte especializado em saúde",
  "Integração futura com WhatsApp",
];

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container relative z-10 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para revolucionar o atendimento da sua clínica?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de clínicas que já estão usando IA para 
            oferecer um atendimento mais eficiente e humanizado.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              >
                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
              asChild
            >
              <Link to="/demo">
                Solicitar Demonstração Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/contato">
                Falar com Especialista
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
