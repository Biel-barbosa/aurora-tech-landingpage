
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center relative overflow-hidden glass-card py-16 px-6">
          {/* Background Effects */}
          <div className="absolute -z-10 top-0 left-0 right-0 bottom-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-violet-500/20 opacity-50"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/30 rounded-full blur-3xl"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seus dados em insights?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de empresas inovadoras que já usam o Neuron para impulsionar seus negócios com análises baseadas em IA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="gradient-button text-white h-12 px-8 text-lg">
              Comece Hoje Mesmo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="h-12 px-8 text-lg">
              Agende uma Demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
