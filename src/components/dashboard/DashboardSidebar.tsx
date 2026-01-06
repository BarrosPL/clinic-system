import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Bot,
  LayoutDashboard,
  Building2,
  Users,
  Calendar,
  MessageCircle,
  Settings,
  LogOut,
  ChevronLeft,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  badge?: number;
}

interface DashboardSidebarProps {
  type: "admin" | "clinic";
}

const adminNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Building2, label: "Clínicas", href: "/admin/clinicas" },
  { icon: Users, label: "Usuários", href: "/admin/usuarios" },
  { icon: Settings, label: "Configurações", href: "/admin/configuracoes" },
];

const clinicNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/clinica" },
  { icon: Bot, label: "Agentes IA", href: "/clinica/agentes", badge: 3 },
  { icon: Calendar, label: "Agenda", href: "/clinica/agenda" },
  { icon: MessageCircle, label: "Atendimentos", href: "/clinica/atendimentos", badge: 5 },
  { icon: Users, label: "Profissionais", href: "/clinica/profissionais" },
  { icon: Settings, label: "Configurações", href: "/clinica/configuracoes" },
];

export function DashboardSidebar({ type }: DashboardSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navItems = type === "admin" ? adminNavItems : clinicNavItems;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 rounded-xl gradient-primary shadow-md flex-shrink-0">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-bold text-sidebar-foreground leading-tight">
                HealthAgents
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                {type === "admin" ? "Admin" : "Clínica"}
              </span>
            </div>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform",
              collapsed && "rotate-180"
            )}
          />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 flex-shrink-0",
                  isActive && "text-sidebar-primary"
                )}
              />
              {!collapsed && (
                <>
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <Badge variant="default" className="h-5 min-w-5 flex items-center justify-center text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </>
              )}
              {collapsed && item.badge && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-sidebar-border space-y-1">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 text-muted-foreground hover:text-sidebar-foreground",
            collapsed && "justify-center"
          )}
        >
          <Bell className="h-5 w-5" />
          {!collapsed && <span>Notificações</span>}
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10",
            collapsed && "justify-center"
          )}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Sair</span>}
        </Button>
      </div>
    </aside>
  );
}
