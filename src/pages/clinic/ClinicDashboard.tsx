import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Calendar,
  Bot,
  CheckCircle,
  Clock,
  XCircle,
  ArrowUpRight,
  Plus,
  MoreVertical,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const agents = [
  {
    id: 1,
    name: "Assistente Geral",
    type: "Clínica Médica",
    status: "online",
    conversations: 234,
    resolution: 94,
  },
  {
    id: 2,
    name: "Agente de Agendamento",
    type: "Agendamentos",
    status: "online",
    conversations: 156,
    resolution: 98,
  },
  {
    id: 3,
    name: "Suporte Pós-Consulta",
    type: "Suporte",
    status: "offline",
    conversations: 89,
    resolution: 87,
  },
];

const recentAppointments = [
  {
    id: 1,
    patient: "Maria Silva",
    doctor: "Dr. João Santos",
    time: "14:00",
    status: "confirmed",
  },
  {
    id: 2,
    patient: "Carlos Oliveira",
    doctor: "Dra. Ana Costa",
    time: "14:30",
    status: "pending",
  },
  {
    id: 3,
    patient: "Lucia Ferreira",
    doctor: "Dr. Pedro Lima",
    time: "15:00",
    status: "cancelled",
  },
];

export default function ClinicDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="clinic" />
      
      <div className="ml-64 min-h-screen">
        <DashboardHeader 
          title="Dashboard" 
          subtitle="Clínica São Lucas" 
        />
        
        <main className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Atendimentos Hoje"
              value={47}
              icon={MessageCircle}
              trend={{ value: 12, isPositive: true }}
              description="vs. ontem"
            />
            <StatCard
              title="Agendamentos"
              value={23}
              icon={Calendar}
              trend={{ value: 5, isPositive: true }}
              description="Hoje"
            />
            <StatCard
              title="Taxa de Resolução"
              value="94%"
              icon={CheckCircle}
              trend={{ value: 2, isPositive: true }}
              description="Automática"
            />
            <StatCard
              title="Agentes Ativos"
              value={3}
              icon={Bot}
              description="De 3 configurados"
            />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Agents Status */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Seus Agentes de IA</CardTitle>
                  <CardDescription>
                    Gerencie seus agentes e monitore o desempenho
                  </CardDescription>
                </div>
                <Button variant="hero" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Agente
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {agents.map((agent) => (
                  <div
                    key={agent.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                        <Bot className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">
                            {agent.name}
                          </h4>
                          <Badge
                            variant={agent.status === "online" ? "success" : "muted"}
                          >
                            {agent.status === "online" ? "Online" : "Offline"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {agent.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">
                          {agent.conversations}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Conversas
                        </p>
                      </div>
                      <div className="w-24">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted-foreground">
                            Resolução
                          </span>
                          <span className="text-xs font-medium text-foreground">
                            {agent.resolution}%
                          </span>
                        </div>
                        <Progress value={agent.resolution} className="h-1.5" />
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Próximos Agendamentos</CardTitle>
                <Button variant="ghost" size="sm">
                  Ver todos
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          appointment.status === "confirmed"
                            ? "bg-success/10"
                            : appointment.status === "pending"
                            ? "bg-warning/10"
                            : "bg-destructive/10"
                        }`}
                      >
                        {appointment.status === "confirmed" ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : appointment.status === "pending" ? (
                          <Clock className="w-5 h-5 text-warning" />
                        ) : (
                          <XCircle className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {appointment.patient}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {appointment.doctor}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">
                        {appointment.time}
                      </p>
                      <Badge
                        variant={
                          appointment.status === "confirmed"
                            ? "success"
                            : appointment.status === "pending"
                            ? "warning"
                            : "destructive"
                        }
                        className="text-xs"
                      >
                        {appointment.status === "confirmed"
                          ? "Confirmado"
                          : appointment.status === "pending"
                          ? "Pendente"
                          : "Cancelado"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
