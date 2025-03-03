import { QuizQuestion } from '../types/quiz';

export const allQuizQuestions: QuizQuestion[] = [
  // Perguntas Fáceis
  {
    id: 1,
    question: 'Qual é o tipo de papel mais utilizado para impressão de documentos em escritórios?',
    options: [
      'Papel Vergê',
      'Papel Sulfite A4',
      'Papel Kraft',
      'Papel Couchê',
      'Papel Cartão'
    ],
    correctAnswer: 1,
    difficulty: 'fácil'
  },
  {
    id: 2,
    question: 'Qual destas canetas é conhecida por sua tinta à base de gel?',
    options: [
      'Caneta Esferográfica',
      'Caneta Tinteiro',
      'Caneta Hidrográfica',
      'Caneta Roller Ball',
      'Caneta Gel'
    ],
    correctAnswer: 4,
    difficulty: 'fácil'
  },
  {
    id: 3,
    question: 'Qual é a medida padrão de um papel A4?',
    options: [
      '210 x 297 mm',
      '215 x 315 mm',
      '200 x 300 mm',
      '220 x 330 mm',
      '180 x 250 mm'
    ],
    correctAnswer: 0,
    difficulty: 'fácil'
  },
  {
    id: 4,
    question: 'Qual destes materiais é mais comumente usado para fazer lápis?',
    options: [
      'Alumínio',
      'Plástico',
      'Cedro',
      'Carvalho',
      'Bambu'
    ],
    correctAnswer: 2,
    difficulty: 'fácil'
  },
  {
    id: 5,
    question: 'Qual destas tintas é mais adequada para pintura em aquarela?',
    options: [
      'Tinta Acrílica',
      'Tinta a Óleo',
      'Tinta Guache',
      'Tinta Aquarela',
      'Tinta Nanquim'
    ],
    correctAnswer: 3,
    difficulty: 'fácil'
  },
  {
    id: 6,
    question: 'Qual é a função principal de uma borracha?',
    options: [
      'Colorir desenhos',
      'Apagar marcas de lápis',
      'Colar papéis',
      'Marcar textos',
      'Perfurar papéis'
    ],
    correctAnswer: 1,
    difficulty: 'fácil'
  },
  {
    id: 7,
    question: 'Qual destes itens é utilizado para organizar folhas de papel?',
    options: [
      'Grampeador',
      'Tesoura',
      'Pasta',
      'Régua',
      'Pincel'
    ],
    correctAnswer: 2,
    difficulty: 'fácil'
  },
  
  // Perguntas Médias
  {
    id: 8,
    question: 'Qual é a diferença entre papel couchê brilho e papel couchê fosco?',
    options: [
      'O brilho é mais fino que o fosco',
      'O fosco é mais resistente à água',
      'O brilho tem acabamento reflexivo enquanto o fosco não',
      'O fosco é mais colorido que o brilho',
      'Não há diferença, são apenas nomes comerciais diferentes'
    ],
    correctAnswer: 2,
    difficulty: 'médio'
  },
  {
    id: 9,
    question: 'Qual é a gramatura ideal para cartões de visita profissionais?',
    options: [
      '75g/m²',
      '120g/m²',
      '180g/m²',
      '250g/m² a 300g/m²',
      '400g/m²'
    ],
    correctAnswer: 3,
    difficulty: 'médio'
  },
  {
    id: 10,
    question: 'O que significa a sigla "HB" em um lápis?',
    options: [
      'Hard Black (Preto Duro)',
      'High Brightness (Alta Luminosidade)',
      'Hard and Black (Duro e Preto)',
      'Hard and Bright (Duro e Brilhante)',
      'Hard and Bold (Duro e Marcante)'
    ],
    correctAnswer: 2,
    difficulty: 'médio'
  },
  {
    id: 11,
    question: 'Qual é a principal diferença entre uma caneta esferográfica e uma caneta roller ball?',
    options: [
      'A esferográfica usa tinta à base de óleo, a roller ball usa tinta à base de água',
      'A roller ball é descartável, a esferográfica é recarregável',
      'A esferográfica tem ponta fina, a roller ball tem ponta grossa',
      'A roller ball é mais cara que a esferográfica',
      'Não há diferença significativa entre elas'
    ],
    correctAnswer: 0,
    difficulty: 'médio'
  },
  {
    id: 12,
    question: 'Qual destes papéis é mais indicado para desenho com lápis de cor?',
    options: [
      'Papel Jornal',
      'Papel Vegetal',
      'Papel Canson',
      'Papel Kraft',
      'Papel Glossy'
    ],
    correctAnswer: 2,
    difficulty: 'médio'
  },
  {
    id: 13,
    question: 'O que é uma "Washi Tape"?',
    options: [
      'Uma fita adesiva decorativa japonesa',
      'Um tipo de grampeador sem grampos',
      'Uma marca de canetas premium',
      'Um tipo de papel para origami',
      'Uma técnica de encadernação'
    ],
    correctAnswer: 0,
    difficulty: 'médio'
  },
  {
    id: 14,
    question: 'Qual é a principal característica de uma caneta brush pen?',
    options: [
      'Tinta permanente à prova d\'água',
      'Ponta flexível que imita um pincel',
      'Tinta que muda de cor com o tempo',
      'Corpo ergonômico para uso prolongado',
      'Tinta que brilha no escuro'
    ],
    correctAnswer: 1,
    difficulty: 'médio'
  },
  
  // Perguntas Difíceis
  {
    id: 15,
    question: 'Qual é o processo de impressão que utiliza chapas de metal gravadas em baixo relevo?',
    options: [
      'Serigrafia',
      'Litografia',
      'Rotogravura',
      'Flexografia',
      'Tipografia'
    ],
    correctAnswer: 2,
    difficulty: 'difícil'
  },
  {
    id: 16,
    question: 'Qual é o sistema de cores utilizado em impressão profissional?',
    options: [
      'RGB',
      'CMYK',
      'HSL',
      'Pantone',
      'HSB'
    ],
    correctAnswer: 1,
    difficulty: 'difícil'
  },
  {
    id: 17,
    question: 'Qual destas técnicas é utilizada para criar efeitos de profundidade em desenhos a lápis?',
    options: [
      'Pontilhismo',
      'Sfumato',
      'Chiaroscuro',
      'Hatching e Cross-hatching',
      'Impasto'
    ],
    correctAnswer: 3,
    difficulty: 'difícil'
  },
  {
    id: 18,
    question: 'Qual é o nome da escala que mede a dureza do grafite em lápis?',
    options: [
      'Escala Mohs',
      'Escala Richter',
      'Escala Pantone',
      'Escala Rockwell',
      'Escala Graphite'
    ],
    correctAnswer: 0,
    difficulty: 'difícil'
  },
  {
    id: 19,
    question: 'Qual é o tipo de encadernação que utiliza uma espiral de plástico ou metal?',
    options: [
      'Encadernação Wire-o',
      'Encadernação Brochura',
      'Encadernação Capa Dura',
      'Encadernação Térmica',
      'Encadernação Japonesa'
    ],
    correctAnswer: 0,
    difficulty: 'difícil'
  },
  {
    id: 20,
    question: 'Qual é o nome da técnica de pintura que utiliza cera derretida como meio?',
    options: [
      'Acrílica',
      'Guache',
      'Encáustica',
      'Têmpera',
      'Aquarela'
    ],
    correctAnswer: 2,
    difficulty: 'difícil'
  }
];

// Função para selecionar 5 perguntas aleatórias com pelo menos uma de cada nível de dificuldade
export const getRandomQuestions = (): QuizQuestion[] => {
  const easyQuestions = allQuizQuestions.filter(q => q.difficulty === 'fácil');
  const mediumQuestions = allQuizQuestions.filter(q => q.difficulty === 'médio');
  const hardQuestions = allQuizQuestions.filter(q => q.difficulty === 'difícil');
  
  // Seleciona aleatoriamente 1 pergunta de cada nível
  const randomEasy = easyQuestions[Math.floor(Math.random() * easyQuestions.length)];
  const randomMedium = mediumQuestions[Math.floor(Math.random() * mediumQuestions.length)];
  const randomHard = hardQuestions[Math.floor(Math.random() * hardQuestions.length)];
  
  // Seleciona aleatoriamente mais 2 perguntas de qualquer nível
  const remainingQuestions = allQuizQuestions.filter(q => 
    q.id !== randomEasy.id && 
    q.id !== randomMedium.id && 
    q.id !== randomHard.id
  );
  
  const shuffledRemaining = [...remainingQuestions].sort(() => Math.random() - 0.5);
  const additionalQuestions = shuffledRemaining.slice(0, 2);
  
  // Combina as perguntas selecionadas e as embaralha
  const selectedQuestions = [randomEasy, randomMedium, randomHard, ...additionalQuestions];
  return selectedQuestions.sort(() => Math.random() - 0.5);
};

// Exporta 5 perguntas aleatórias
export const quizQuestions = getRandomQuestions(); 