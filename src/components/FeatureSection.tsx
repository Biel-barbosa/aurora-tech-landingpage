
import { CircleCheck, Zap, Lock, BarChart3, Brain, Globe } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: "Análise com IA",
    description: "Nossos algoritmos avançados de aprendizado de máquina analisam seus dados para descobrir insights que seriam impossíveis de encontrar manualmente."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Dashboard em Tempo Real",
    description: "Obtenha uma visão abrangente do desempenho do seu negócio com painéis personalizáveis que atualizam em tempo real."
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Velocidade Impressionante",
    description: "Construído com tecnologia de ponta para garantir que você obtenha os insights necessários sem esperar por longos tempos de processamento."
  },
  {
    icon: <CircleCheck className="w-10 h-10 text-primary" />,
    title: "Integração Simples",
    description: "Conecte-se com suas ferramentas e serviços existentes através de nossa API extensiva e integrações pré-construídas."
  },
  {
    icon: <Lock className="w-10 h-10 text-primary" />,
    title: "Seguro e Conforme",
    description: "Segurança de nível empresarial com criptografia de ponta a ponta e conformidade com as principais regulamentações de proteção de dados."
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "Suporte Global",
    description: "Suporte ao cliente 24/7 da nossa equipe de especialistas para ajudá-lo a aproveitar ao máximo nossa plataforma."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos Poderosos para Equipes Orientadas por Dados</h2>
          <p className="text-xl text-foreground/80">
            Tudo que você precisa para transformar seus dados em insights acionáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card hover:bg-card/80 p-8 rounded-2xl shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="mb-6 p-3 bg-primary/10 rounded-xl inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
