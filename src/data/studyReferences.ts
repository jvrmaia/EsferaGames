import { QuizQuestion } from '../types/quiz';

// Interface para as referências de estudo
export interface StudyReference {
  title: string;
  description: string;
  link: string;
}

// Referências de estudo para cada pergunta, indexadas pelo ID da pergunta
export const questionReferences: Record<number, StudyReference> = {
  1: {
    title: "Tipos de Papel para Impressão",
    description: "Conheça os diferentes tipos de papel para impressão e suas aplicações específicas.",
    link: "https://www.esferapapelaria.com.br/blog/tipos-de-papel-para-impressao"
  },
  2: {
    title: "Guia Completo sobre Canetas",
    description: "Descubra as diferenças entre os diversos tipos de canetas e suas aplicações.",
    link: "https://www.esferapapelaria.com.br/blog/guia-completo-canetas"
  },
  3: {
    title: "Formatos de Papel - Normas ISO",
    description: "Entenda os padrões internacionais de tamanho de papel e suas medidas exatas.",
    link: "https://www.esferapapelaria.com.br/blog/formatos-papel-iso"
  },
  4: {
    title: "Materiais para Fabricação de Lápis",
    description: "Conheça os diferentes tipos de madeira e materiais usados na fabricação de lápis.",
    link: "https://www.esferapapelaria.com.br/blog/materiais-fabricacao-lapis"
  },
  5: {
    title: "Tintas para Pintura Artística",
    description: "Aprenda sobre os diferentes tipos de tintas para pintura e suas características.",
    link: "https://www.esferapapelaria.com.br/blog/tintas-pintura-artistica"
  },
  6: {
    title: "Tipos de Borrachas e suas Aplicações",
    description: "Conheça os diferentes tipos de borrachas e para quais materiais são mais indicadas.",
    link: "https://www.esferapapelaria.com.br/blog/tipos-borrachas"
  },
  7: {
    title: "Organização de Documentos no Escritório",
    description: "Dicas e produtos para manter seus documentos organizados no ambiente de trabalho.",
    link: "https://www.esferapapelaria.com.br/blog/organizacao-documentos"
  },
  8: {
    title: "Papel Couchê: Tipos e Aplicações",
    description: "Entenda as diferenças entre os tipos de papel couchê e suas aplicações específicas.",
    link: "https://www.esferapapelaria.com.br/blog/papel-couche-tipos"
  },
  9: {
    title: "Gramaturas de Papel e suas Aplicações",
    description: "Guia completo sobre gramaturas de papel e como escolher a ideal para cada projeto.",
    link: "https://www.esferapapelaria.com.br/blog/gramaturas-papel"
  },
  10: {
    title: "Escala de Dureza de Lápis",
    description: "Entenda o significado das marcações em lápis (HB, 2B, 6H) e suas aplicações.",
    link: "https://www.esferapapelaria.com.br/blog/escala-dureza-lapis"
  },
  11: {
    title: "Diferenças entre Tipos de Canetas",
    description: "Comparativo detalhado entre canetas esferográficas, roller ball, gel e outras.",
    link: "https://www.esferapapelaria.com.br/blog/diferencas-tipos-canetas"
  },
  12: {
    title: "Papéis para Desenho Artístico",
    description: "Conheça os diferentes tipos de papel para desenho e suas características.",
    link: "https://www.esferapapelaria.com.br/blog/papeis-desenho-artistico"
  },
  13: {
    title: "Washi Tape: História e Aplicações",
    description: "Descubra a origem das washi tapes e como utilizá-las em projetos criativos.",
    link: "https://www.esferapapelaria.com.br/blog/washi-tape-historia"
  },
  14: {
    title: "Brush Pens e Técnicas de Lettering",
    description: "Aprenda sobre canetas brush pen e técnicas básicas de lettering e caligrafia.",
    link: "https://www.esferapapelaria.com.br/blog/brush-pens-lettering"
  },
  15: {
    title: "Processos de Impressão Profissional",
    description: "Conheça os diferentes métodos de impressão utilizados na indústria gráfica.",
    link: "https://www.esferapapelaria.com.br/blog/processos-impressao"
  },
  16: {
    title: "Sistemas de Cores na Impressão",
    description: "Entenda as diferenças entre RGB, CMYK e outros sistemas de cores.",
    link: "https://www.esferapapelaria.com.br/blog/sistemas-cores-impressao"
  },
  17: {
    title: "Técnicas de Sombreamento em Desenho",
    description: "Aprenda diferentes técnicas para criar profundidade e volume em desenhos.",
    link: "https://www.esferapapelaria.com.br/blog/tecnicas-sombreamento"
  },
  18: {
    title: "Escalas de Dureza em Materiais",
    description: "Conheça as diferentes escalas usadas para medir dureza em diversos materiais.",
    link: "https://www.esferapapelaria.com.br/blog/escalas-dureza"
  },
  19: {
    title: "Métodos de Encadernação",
    description: "Guia completo sobre os diferentes tipos de encadernação e suas aplicações.",
    link: "https://www.esferapapelaria.com.br/blog/metodos-encadernacao"
  },
  20: {
    title: "Técnicas de Pintura com Cera",
    description: "Descubra a técnica de encáustica e outras formas de pintura com cera.",
    link: "https://www.esferapapelaria.com.br/blog/tecnicas-pintura-cera"
  }
};

// Material adicional para quem acertar todas as perguntas
export const additionalMaterials: StudyReference[] = [
  {
    title: "História da Papelaria no Brasil",
    description: "Conheça a evolução dos materiais de escritório e papelaria no Brasil ao longo dos anos.",
    link: "https://www.esferapapelaria.com.br/blog/historia-papelaria-brasil"
  },
  {
    title: "Técnicas Avançadas de Organização",
    description: "Métodos profissionais para organizar seu espaço de trabalho e aumentar a produtividade.",
    link: "https://www.esferapapelaria.com.br/blog/tecnicas-avancadas-organizacao"
  },
  {
    title: "Materiais Sustentáveis para Escritório",
    description: "Opções ecológicas e sustentáveis para substituir materiais convencionais de escritório.",
    link: "https://www.esferapapelaria.com.br/blog/materiais-sustentaveis-escritorio"
  }
]; 