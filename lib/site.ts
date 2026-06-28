import type { LucideIcon } from "lucide-react";
import {
  Baby,
  BadgeCheck,
  Check,
  ChevronRight,
  CirclePlay,
  Clapperboard,
  Gamepad2,
  Headphones,
  Laptop,
  Monitor,
  MonitorSmartphone,
  Popcorn,
  Smartphone,
  Sparkles,
  Star,
  Tablet,
  Trophy,
  Tv,
  Users,
  Wifi,
} from "lucide-react";

export const WHATSAPP_URL =
  "https://wa.me/5524981399104?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20a%20Supreme%20Flix";

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const heroPills = [
  { label: "Funciona em Smart TV", Icon: Tv },
  { label: "Celular e Tablet", Icon: Smartphone },
  { label: "TV Box", Icon: MonitorSmartphone },
  { label: "Computador", Icon: Laptop },
];

export const stats = [
  {
    label: "Mais de 10 mil usuários",
    description: "Pessoas utilizando em todo o Brasil.",
    Icon: Users,
  },
  {
    label: "Mais de 40 mil conteúdos",
    description: "Catálogo amplo e atualizado.",
    Icon: Clapperboard,
  },
  {
    label: "Vários dispositivos",
    description: "Compatível com seus aparelhos.",
    Icon: MonitorSmartphone,
  },
  {
    label: "Suporte para instalação",
    description: "Orientação para começar bem.",
    Icon: Headphones,
  },
];

export const features = [
  {
    title: "Filmes e Séries",
    description: "Catálogo com opções para todos os gostos, ideal para maratonar quando quiser.",
    Icon: Popcorn,
  },
  {
    title: "Canais ao Vivo",
    description: "Acompanhe canais variados diretamente no seu dispositivo favorito.",
    Icon: Tv,
  },
  {
    title: "Esportes",
    description: "Veja eventos esportivos e acompanhe seus jogos com mais praticidade.",
    Icon: Trophy,
  },
  {
    title: "Animes",
    description: "Conteúdos para quem gosta de anime, desenhos e programação variada.",
    Icon: Gamepad2,
  },
  {
    title: "Infantil",
    description: "Opções para toda a família, incluindo conteúdos infantis e educativos.",
    Icon: Baby,
  },
  {
    title: "Multidispositivos",
    description: "Compatível com Smart TV, celular, TV Box, computador e outros aparelhos.",
    Icon: MonitorSmartphone,
  },
];

export const devices = [
  { label: "Smart TV", Icon: Tv },
  { label: "Android", Icon: Smartphone },
  { label: "iPhone / iPad", Icon: Smartphone },
  { label: "TV Box", Icon: MonitorSmartphone },
  { label: "Computador", Icon: Monitor },
  { label: "Tablet", Icon: Tablet },
];

export const planFeatures = [
  "Acesso à plataforma",
  "Sem fidelidade",
  "Suporte para instalação",
  "Compatível com vários dispositivos",
  "Qualidade conforme conteúdo, conexão e aparelho",
];

export const plans = [
  {
    name: "Mensal",
    price: "19,90",
    period: "/mês",
  },
  {
    name: "Trimestral",
    price: "54,90",
    period: "/trimestre",
  },
  {
    name: "Semestral",
    price: "99,90",
    period: "/semestre",
    badge: "Mais escolhido",
    highlighted: true,
  },
  {
    name: "Anual",
    price: "169,90",
    period: "/ano",
  },
];

export const testimonials = [
  {
    name: "Marcos A.",
    initials: "MA",
    quote: "Gostei da praticidade. Consegui instalar na TV e no celular sem dificuldade.",
  },
  {
    name: "Renata S.",
    initials: "RS",
    quote: "O suporte me ajudou a configurar e ficou tudo simples de usar.",
  },
  {
    name: "Carlos M.",
    initials: "CM",
    quote: "Achei uma opção bem completa para assistir em casa com a família.",
  },
  {
    name: "Juliana R.",
    initials: "JR",
    quote: "Falei pelo WhatsApp, recebi as orientações e consegui começar rápido.",
  },
];

export const faqItems = [
  {
    question: "Como faço para testar?",
    answer:
      "Clique em Solicitar teste e fale com nosso atendimento pelo WhatsApp. Você receberá as orientações para começar.",
  },
  {
    question: "Funciona na Smart TV?",
    answer:
      "Sim, a Supreme Flix pode ser usada em diversos modelos de Smart TV compatíveis. O atendimento orienta a melhor forma de instalação.",
  },
  {
    question: "Posso assistir no celular?",
    answer:
      "Sim. É possível acessar pelo celular ou tablet, conforme o aplicativo e as instruções enviadas pelo suporte.",
  },
  {
    question: "Preciso de internet boa?",
    answer:
      "Sim. A qualidade da experiência pode variar conforme a velocidade da internet, estabilidade da conexão e aparelho utilizado.",
  },
  {
    question: "Como recebo as instruções?",
    answer:
      "Após falar pelo WhatsApp, você recebe as orientações de acesso e instalação de forma simples.",
  },
  {
    question: "O suporte ajuda na instalação?",
    answer:
      "Sim. O suporte orienta o processo de instalação e configuração para facilitar o início do uso.",
  },
];

export const socialProofMessages = [
  "Marcos A. escolheu o plano mensal.",
  "Renata S. renovou o acesso recentemente.",
  "Carlos M. escolheu o plano anual.",
  "Juliana R. solicitou um teste pelo WhatsApp.",
  "André L. renovou o plano trimestral.",
  "Fernanda C. recebeu orientação para instalar na Smart TV.",
  "Rafael P. conheceu os planos disponíveis.",
  "Camila M. iniciou o atendimento pelo WhatsApp.",
  "Bruno S. recebeu ajuda para configurar o acesso.",
  "Patrícia A. verificou a compatibilidade com Smart TV.",
  "Lucas R. escolheu o plano semestral.",
  "Aline M. solicitou atendimento para começar.",
];

export const footerLegal = [
  {
    title: "Política de Privacidade",
    text: "Respeitamos sua privacidade. Os dados informados pelo WhatsApp são utilizados exclusivamente para atendimento e suporte relacionados ao serviço Supreme Flix.",
  },
  {
    title: "Termos de Uso",
    text: "O uso do serviço está sujeito às orientações enviadas no atendimento. A experiência pode variar conforme dispositivo, conexão e configurações.",
  },
];

export const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  Check,
  ChevronRight,
  CirclePlay,
  Sparkles,
  Star,
  Wifi,
};
