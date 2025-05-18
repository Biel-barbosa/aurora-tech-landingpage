
# Neuron - Plataforma de Análise de Dados com IA

![Banner do Neuron](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop)

## 📌 Visão Geral

Neuron é uma moderna landing page para uma plataforma fictícia de análise de dados baseada em IA. O projeto foi desenvolvido com as tecnologias mais recentes de desenvolvimento web front-end, seguindo as melhores práticas de design e experiência do usuário.

## 🚀 Principais Funcionalidades

- Design moderno, responsivo e visualmente atrativo
- Interface de usuário intuitiva e elegante
- Modo escuro/claro com alternância suave
- Seções detalhadas sobre recursos e casos de uso
- Formulário de contato funcional
- Depoimentos de clientes
- Animações sutis para melhorar a experiência do usuário

## 🛠️ Tecnologias Utilizadas

### Core
- **React** (v18+): Biblioteca JavaScript para construção de interfaces interativas
- **TypeScript**: Superset tipado do JavaScript para melhor segurança e escalabilidade
- **Vite**: Ferramenta de build extremamente rápida para desenvolvimento front-end

### UI/UX
- **Tailwind CSS**: Framework CSS utilitário para designs personalizados
- **shadcn/ui**: Componentes de UI reutilizáveis e acessíveis
- **Framer Motion**: Biblioteca para animações fluidas e responsivas
- **Lucide React**: Ícones SVG modernos e escalonáveis

### Bibliotecas Adicionais
- **React Router DOM**: Roteamento declarativo para aplicativos React
- **React Query**: Gerenciamento de estado e sincronização de servidor
- **React Hook Form**: Validação e gerenciamento de formulários

## 📂 Estrutura do Projeto

```
/src
|-- /components       # Componentes reutilizáveis
|   |-- /ui           # Componentes de UI do shadcn
|   |-- HeroSection.tsx
|   |-- FeatureSection.tsx
|   |-- TestimonialSection.tsx
|   |-- ContactSection.tsx
|   |-- CtaSection.tsx
|   |-- Navbar.tsx
|   |-- Footer.tsx
|   |-- ThemeToggle.tsx
|
|-- /contexts         # Contextos React
|   |-- ThemeContext.tsx
|
|-- /hooks            # Custom hooks
|   |-- use-mobile.tsx
|   |-- use-toast.ts
|
|-- /lib              # Funções utilitárias
|   |-- utils.ts
|
|-- /pages            # Páginas principais
|   |-- Index.tsx
|   |-- NotFound.tsx
|
|-- App.tsx           # Componente principal
|-- index.css         # Estilos globais e temas
|-- main.tsx          # Ponto de entrada da aplicação
```

## 🏁 Como Iniciar

### Pré-requisitos
- Node.js (v18.0.0 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/neuron.git
cd neuron

# Instale as dependências
npm install
# ou
yarn install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

## 📱 Responsividade

O projeto foi desenvolvido com uma abordagem mobile-first, garantindo uma experiência excelente em todos os dispositivos:
- Smartphones
- Tablets
- Laptops
- Desktops

## 🎨 Personalização

O tema e as cores podem ser facilmente personalizados através do arquivo `tailwind.config.ts` e `src/index.css`.

## 🔒 Melhores Práticas Implementadas

- **Acessibilidade**: Componentes acessíveis com suporte a teclado e leitores de tela
- **SEO**: Meta tags otimizadas e estrutura semântica HTML
- **Performance**: Otimização de imagens e carregamento eficiente de recursos
- **Código Limpo**: Organização modular e padrões consistentes
- **TypeScript**: Tipagem estrita para prevenção de erros

Link do projeto : 
