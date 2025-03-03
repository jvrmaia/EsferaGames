import React from 'react';
import { useQuiz } from '../context/QuizContext';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';

const Quiz: React.FC = () => {
  const { questions, state, selectAnswer, nextQuestion, resetQuiz } = useQuiz();
  const { currentQuestionIndex, isCompleted } = state;
  
  // Verificar se as perguntas estão disponíveis e se o índice é válido
  const currentQuestion = questions && questions.length > 0 ? questions[currentQuestionIndex] : null;

  // Se o quiz estiver completo, mostrar os resultados
  if (isCompleted) {
    return <QuizResults onRestart={resetQuiz} />;
  }

  // Se não houver perguntas ou a pergunta atual for nula, mostrar um indicador de carregamento
  if (!questions || questions.length === 0 || !currentQuestion) {
    return (
      <div className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-primary">
        <div className="flex justify-center mb-4">
          <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p className="text-gray-600">Carregando perguntas...</p>
      </div>
    );
  }

  return (
    <div className="quiz-container fade-in">
      <div className="mb-4 text-center p-4 bg-gray-50 rounded-t-lg border-b border-gray-200">
        <p className="text-sm font-medium text-gray-500">
          Pergunta {currentQuestionIndex + 1} de {questions.length}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div 
            className="bg-primary h-1.5 rounded-full transition-all duration-300" 
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <QuizQuestion
        question={currentQuestion}
        onAnswerSelected={selectAnswer}
        onNextQuestion={nextQuestion}
      />
    </div>
  );
};

export default Quiz; 