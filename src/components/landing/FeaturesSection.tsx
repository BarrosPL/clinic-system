import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Bot, 
  Calendar, 
  MessageCircle, 
  Users, 
  Brain, 
  Clock,
  Shield,
  Zap,
  HeartPulse,
  Stethoscope,
  Smile,
  Activity
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Atendimento Inteligente",
    description: "Agentes de IA personalizados para cada especialidade, capazes de responder dúvidas e coletar informações do paciente.",
    color: "primary",
  },
  {
    icon: Calendar,
    title: "Agendamento Automático",
    description: "Consulta disponibilidade em tempo real, sugere horários e confirma, reagenda ou cancela consultas automaticamente.",
    color: "success",
  },
  {
    icon: MessageCircle,
    title: "FAQ Automatizado",
    description: "Responde perguntas frequentes sobre procedimentos, valores, convênios aceitos e horários de funcionamento.",
    color: "info",
  },
  {
    icon: Brain,
    title: "Triagem Inicial",
    description: "Realiza triagem não diagnóstica, classificando a prioridade do atendimento de forma inteligente.",
    color: "warning",
  },
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Seus pacientes podem tirar dúvidas e agendar consultas a qualquer hora, sem depender de horário comercial.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Handoff Inteligente",
    description: "Transfere automaticamente para atendimento humano quando necessário ou em casos sensíveis.",
    color: "destructive",
  },
];

const specialties = [
  { icon: Stethoscope, name: "Médicos" },
  { icon: Smile, name: "Dentistas" },
  { icon: Activity, name: "Fisioterapeutas" },
  { icon: HeartPulse, name: "Psicólogos" },
];

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo que sua clínica precisa em{" "}
            <span className="text-gradient">uma única plataforma</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Agentes de IA personalizados para automatizar o atendimento e 
            aumentar a eficiência da sua equipe de saúde.
          </p>
        </div>

        {/* Specialties Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {specialties.map((specialty) => (
            <div
              key={specialty.name}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <specialty.icon className="w-5 h-5" />
              <span>{specialty.name}</span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="interactive"
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "95%", label: "Satisfação" },
            { value: "24/7", label: "Disponibilidade" },
            { value: "-60%", label: "Carga Manual" },
            { value: "+40%", label: "Eficiência" },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
