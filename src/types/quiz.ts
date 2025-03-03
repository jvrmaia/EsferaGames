export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct answer in options array
  difficulty: 'fácil' | 'médio' | 'difícil';
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: number[];
  isCompleted: boolean;
  couponCode: string | null;
}

export interface QuizContextType {
  questions: QuizQuestion[];
  state: QuizState;
  selectAnswer: (answerIndex: number) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
} 