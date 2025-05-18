
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/70 dark:bg-secondary/40 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Neuron</h3>
            <p className="text-foreground/70 mb-6">
              Plataforma de análise alimentada por IA que transforma seus dados em insights acionáveis.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Produto</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Recursos</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Integrações</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Casos de Estudo</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Imprensa</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Recursos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Documentação</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Guias</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Webinars</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Comunidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Neuron AI. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Termos de Serviço</a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Cookies</a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Segurança</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
