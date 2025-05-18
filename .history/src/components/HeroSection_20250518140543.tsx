
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text">IA Avançada</span> para Análise de Dados do seu Negócio
            </h1>
            <p className="text-xl text-foreground/80 max-w-xl">
              Transforme seus dados em insights acionáveis com nossa plataforma de IA de ponta. Tome decisões melhores e mais rápidas com Neuron.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="gradient-button text-white h-12 px-8 text-lg">
                Comece Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="h-12 px-8 text-lg">
                Assistir Demo
              </Button>
            </div>
            <div className="pt-8">
              <p className="text-sm text-foreground/60 mb-3">Confiado por empresas inovadoras</p>
              <div className="flex flex-wrap items-center gap-8">
                <img 
                  src="/nextjs.svg" 
                  alt="Next.js" 
                  className="h-6 opacity-70 dark:invert" 
                />
                <img 
                  src="/shopify-circle.svg" 
                  alt="Shopify" 
                  className="h-6 opacity-70 dark:invert" 
                />
                <img 
                  src="/slack.svg" 
                  alt="Slack" 
                  className="h-6 opacity-70 dark:invert" 
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" 
                  alt="OpenAI" 
                  className="h-6 opacity-70 dark:invert" 
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-violet-600 rounded-2xl blur opacity-50"></div>
              <div className="relative glass-card p-6">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Painel de Analytics"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
