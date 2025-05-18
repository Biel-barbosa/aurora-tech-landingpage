
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "O Neuron transformou completamente a forma como abordamos a análise de dados. Descobrimos insights que anteriormente estavam ocultos e conseguimos tomar decisões mais informadas.",
    author: "Sara Oliveira",
    role: "CTO na TechFlow",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=256&auto=format&fit=crop",
    initials: "SO",
    stars: 5
  },
  {
    quote: "As capacidades de IA no Neuron são realmente de outro nível. O que costumava levar dias para nossa equipe agora acontece automaticamente em minutos. O retorno sobre o investimento tem sido incrível.",
    author: "Miguel Costa",
    role: "Cientista de Dados na InnovateCorp",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&auto=format&fit=crop",
    initials: "MC",
    stars: 5
  },
  {
    quote: "A implementação foi tranquila, e a equipe de suporte ao cliente tem sido incrivelmente responsiva. Vimos um aumento de 40% na eficiência desde que começamos a usar o Neuron.",
    author: "Emília Rodrigues",
    role: "VP de Operações na GrowthBox",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    initials: "ER",
    stars: 5
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Amado por Equipes de Dados em Todo Lugar</h2>
          <p className="text-xl text-foreground/80">
            Não acredite apenas em nossa palavra. Veja o que nossos clientes têm a dizer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 relative"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <blockquote className="mb-6 text-foreground/90 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
