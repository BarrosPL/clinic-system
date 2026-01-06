import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Calendar,
  Bot,
  Activity,
  ArrowUpRight,
  MoreVertical,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const clinics = [
  {
    id: 1,
    name: "Clínica São Lucas",
    specialty: "Clínica Geral",
    plan: "Premium",
    status: "active",
    agents: 3,
    appointments: 1234,
  },
  {
    id: 2,
    name: "Odonto Excellence",
    specialty: "Odontologia",
    plan: "Business",
    status: "active",
    agents: 2,
    appointments: 892,
  },
  {
    id: 3,
    name: "FisioLife",
    specialty: "Fisioterapia",
    plan: "Starter",
    status: "active",
    agents: 1,
    appointments: 456,
  },
  {
    id: 4,
    name: "Mente Sã",
    specialty: "Psicologia",
    plan: "Business",
    status: "inactive",
    agents: 2,
    appointments: 321,
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar type="admin" />
      
      <div className="ml-64 min-h-screen">
        <DashboardHeader 
          title="Dashboard" 
          subtitle="Visão geral do sistema" 
        />
        
        <main className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total de Clínicas"
              value={48}
              icon={Building2}
              trend={{ value: 12, isPositive: true }}
              description="vs. mês anterior"
            />
            <StatCard
              title="Atendimentos"
              value="12.4k"
              icon={Users}
              trend={{ value: 8, isPositive: true }}
              description="Este mês"
            />
            <StatCard
              title="Agendamentos"
              value="8.2k"
              icon={Calendar}
              trend={{ value: 15, isPositive: true }}
              description="Este mês"
            />
            <StatCard
              title="Agentes Ativos"
              value={127}
              icon={Bot}
              trend={{ value: 5, isPositive: true }}
              description="Em operação"
            />
          </div>

          {/* Charts and Tables */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Clínicas Recentes</CardTitle>
                <Button variant="ghost" size="sm">
                  Ver todas
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Clínica</TableHead>
                      <TableHead>Especialidade</TableHead>
                      <TableHead>Plano</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Agentes</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clinics.map((clinic) => (
                      <TableRow key={clinic.id}>
                        <TableCell className="font-medium">{clinic.name}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {clinic.specialty}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{clinic.plan}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={clinic.status === "active" ? "success" : "muted"}
                          >
                            {clinic.status === "active" ? "Ativo" : "Inativo"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{clinic.agents}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Atividade Recente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { time: "Agora", text: "Nova clínica cadastrada", type: "success" },
                  { time: "2h", text: "3 agendamentos confirmados", type: "info" },
                  { time: "5h", text: "Atualização de plano", type: "warning" },
                  { time: "1d", text: "Novo agente criado", type: "success" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === "success"
                          ? "bg-success"
                          : activity.type === "info"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.text}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
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
