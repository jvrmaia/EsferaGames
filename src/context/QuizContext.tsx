import React, { createContext, useContext, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { QuizContextType, QuizQuestion, QuizState } from '../types/quiz';
import { getRandomQuestions } from '../data/quizQuestions';

const initialState: QuizState = {
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  isCompleted: false,
  couponCode: null,
};

// Inicializa com algumas perguntas para evitar undefined
const initialQuestions = getRandomQuestions();

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [state, setState] = useState<QuizState>(initialState);
  const [questions, setQuestions] = useState<QuizQuestion[]>(initialQuestions);

  // Não precisamos mais deste useEffect, pois já inicializamos com perguntas
  // useEffect(() => {
  //   setQuestions(getRandomQuestions());
  // }, []);

  const selectAnswer = (answerIndex: number) => {
    const currentQuestion = questions[state.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    setState((prev) => ({
      ...prev,
      answers: [...prev.answers, answerIndex],
      score: isCorrect ? prev.score + 1 : prev.score,
    }));
  };

  const nextQuestion = () => {
    const isLastQuestion = state.currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      const allCorrect = state.score === questions.length;
      const couponCode = allCorrect ? generateCouponCode() : null;

      setState((prev) => ({
        ...prev,
        isCompleted: true,
        couponCode,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
  };

  const resetQuiz = () => {
    // Seleciona novas perguntas aleatórias quando o quiz é reiniciado
    setQuestions(getRandomQuestions());
    setState(initialState);
  };

  const generateCouponCode = (): string => {
    // Generate a unique coupon code with prefix ESFERA
    const uniqueId = uuidv4().substring(0, 8).toUpperCase();
    return `ESFERA${uniqueId}`;
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        state,
        selectAnswer,
        nextQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}; 