import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bot,
  Plus,
  Settings,
  MessageCircle,
  Clock,
  Trash2,
  Play,
  Pause,
  Zap,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const agentTypes = [
  "Clínica Médica",
  "Odontologia",
  "Fisioterapia",
  "Psicologia",
  "Cardiologia",
  "Dermatologia",
  "Pediatria",
];

const agents = [
  {
    id: 1,
    name: "Assistente Principal",
    type: "Clínica Médica",
    status: "online",
    conversations: 1234,
    resolution: 94,
    avgResponseTime: "15s",
    prompt: "Você é um assistente virtual da Clínica São Lucas...",
    schedule: "24/7",
  },
  {
    id: 2,
    name: "Agente de Agendamento",
    type: "Agendamentos",
    status: "online",
    conversations: 856,
    resolution: 98,
    avgResponseTime: "8s",
    prompt: "Você é especializado em agendamentos...",
    schedule: "08:00 - 20:00",
  },
  {
    id: 3,
    name: "Suporte Pós-Consulta",
    type: "Suporte",
    status: "offline",
    conversations: 423,
    resolution: 87,
    avgResponseTime: "25s",
    prompt: "Você ajuda pacientes após consultas...",
    schedule: "08:00 - 18:00",
  },
];

export default function AgentsPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="clinic" />
      
      <div className="ml-64 min-h-screen">
        <DashboardHeader 
          title="Agentes de IA" 
          subtitle="Gerencie seus agentes inteligentes" 
        />
        
        <main className="p-6 space-y-6">
          {/* Header Actions */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Seus Agentes ({agents.length})
              </h2>
              <p className="text-sm text-muted-foreground">
                Configure e monitore seus agentes de atendimento
              </p>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="hero">
                  <Plus className="w-4 h-4 mr-2" />
                  Criar Novo Agente
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Criar Novo Agente de IA</DialogTitle>
                  <DialogDescription>
                    Configure um novo agente para atender seus pacientes
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="agent-name">Nome do Agente</Label>
                      <Input id="agent-name" placeholder="Ex: Assistente Principal" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="agent-type">Tipo / Especialidade</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          {agentTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase()}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="agent-prompt">Prompt Personalizado</Label>
                    <Textarea
                      id="agent-prompt"
                      placeholder="Descreva como o agente deve se comportar, que informações ele tem acesso, tom de voz, etc..."
                      rows={6}
                    />
                    <p className="text-xs text-muted-foreground">
                      Este prompt define a personalidade e conhecimento do agente
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Horário de Funcionamento</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="24/7">24 horas, 7 dias</SelectItem>
                          <SelectItem value="commercial">Horário comercial</SelectItem>
                          <SelectItem value="custom">Personalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Handoff Automático</Label>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-muted-foreground">
                          Transferir para humano quando necessário
                        </span>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button variant="hero" onClick={() => setIsCreateDialogOpen(false)}>
                    Criar Agente
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Agents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <Card key={agent.id} variant="interactive" className="group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                        <Bot className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                        <CardDescription>{agent.type}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant={agent.status === "online" ? "success" : "muted"}
                    >
                      {agent.status === "online" ? "Online" : "Offline"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <MessageCircle className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-lg font-semibold text-foreground">
                        {agent.conversations.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">Conversas</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <Zap className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-lg font-semibold text-foreground">
                        {agent.resolution}%
                      </p>
                      <p className="text-xs text-muted-foreground">Resolução</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <Clock className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-lg font-semibold text-foreground">
                        {agent.avgResponseTime}
                      </p>
                      <p className="text-xs text-muted-foreground">Resposta</p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Taxa de resolução automática
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {agent.resolution}%
                      </span>
                    </div>
                    <Progress value={agent.resolution} className="h-2" />
                  </div>

                  {/* Schedule */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Funcionamento: {agent.schedule}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Settings className="w-4 h-4 mr-2" />
                      Configurar
                    </Button>
                    {agent.status === "online" ? (
                      <Button variant="ghost" size="icon" className="text-warning">
                        <Pause className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon" className="text-success">
                        <Play className="w-4 h-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
