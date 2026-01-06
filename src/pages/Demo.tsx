import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bot, ArrowLeft, Building2, User, Mail, Phone, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const specialties = [
  "Clínica Médica",
  "Odontologia",
  "Fisioterapia",
  "Psicologia",
  "Dermatologia",
  "Cardiologia",
  "Ortopedia",
  "Pediatria",
  "Ginecologia",
  "Outro",
];

export default function Demo() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em até 24 horas.",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card variant="elevated" className="max-w-md w-full text-center">
          <CardContent className="pt-8 pb-8">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Solicitação Enviada!
            </h2>
            <p className="text-muted-foreground mb-6">
              Obrigado pelo interesse! Nossa equipe entrará em contato em até 24 horas 
              para agendar sua demonstração personalizada.
            </p>
            <Button variant="hero" asChild>
              <Link to="/">Voltar ao Início</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero py-12 px-4">
        <div className="container max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary-foreground/20 backdrop-blur-sm">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-primary-foreground">HealthAgents</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Solicitar Demonstração
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Preencha o formulário abaixo e nossa equipe entrará em contato para 
            agendar uma demonstração personalizada do sistema.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="container max-w-2xl px-4 py-12 -mt-8">
        <Card variant="elevated" className="border-0">
          <CardHeader>
            <CardTitle>Dados da Clínica</CardTitle>
            <CardDescription>
              Conte-nos um pouco sobre sua clínica para personalizarmos a demonstração
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="clinic">Nome da Clínica</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="clinic"
                      placeholder="Nome da clínica"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialty">Especialidade Principal</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a especialidade" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty.toLowerCase()}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Conte-nos mais (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Descreva suas principais necessidades ou dúvidas sobre o sistema..."
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                className="w-full" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Solicitar Demonstração Gratuita"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
