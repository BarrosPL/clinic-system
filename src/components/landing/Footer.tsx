import { Link } from "react-router-dom";
import { Bot, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-primary">
                <Bot className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-background leading-tight">
                  HealthAgents
                </span>
                <span className="text-xs text-background/70 leading-tight">
                  IA para Saúde
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Revolucionando o atendimento em saúde com agentes de IA inteligentes 
              e personalizados para sua clínica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#recursos" className="hover:text-background transition-colors">Recursos</a></li>
              <li><a href="#precos" className="hover:text-background transition-colors">Preços</a></li>
              <li><Link to="/demo" className="hover:text-background transition-colors">Demonstração</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">Documentação</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#sobre" className="hover:text-background transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacidade</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contato@healthagents.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2024 HealthAgents. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
