import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Calendar, MessageCircle, Users, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/20" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative z-10 px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="glass" className="mb-6 animate-fade-in px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2 text-accent" />
            Revolucionando o atendimento em saúde com IA
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up leading-tight">
            Agentes de IA para{" "}
            <span className="text-gradient">Clínicas e Consultórios</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Automatize atendimentos, agendamentos e dúvidas frequentes. 
            Reduza a carga da sua equipe e ofereça atendimento 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/demo">
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/login">
                Acessar Sistema
              </Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {[
              { icon: Bot, label: "Atendimento Inteligente" },
              { icon: Calendar, label: "Agendamento Automático" },
              { icon: MessageCircle, label: "Suporte 24/7" },
              { icon: Users, label: "Multi-especialidades" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="hidden lg:block absolute top-1/3 left-10 animate-float">
          <div className="p-4 rounded-2xl bg-card shadow-xl border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Agente IA</p>
                <p className="text-sm font-medium text-foreground">Online agora</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute top-1/2 right-10 animate-float" style={{ animationDelay: "2s" }}>
          <div className="p-4 rounded-2xl bg-card shadow-xl border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center">
                <Calendar className="w-5 h-5 text-success-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Consulta Confirmada</p>
                <p className="text-sm font-medium text-foreground">Dr. Silva - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
