import React, { useState, useEffect } from 'react';
import { QuizQuestion as QuizQuestionType } from '../types/quiz';
import QuizOption from './QuizOption';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswerSelected: (answerIndex: number) => void;
  onNextQuestion: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswerSelected,
  onNextQuestion,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Efeito para avançar automaticamente após responder
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (answered) {
      // Aguarda 1.5 segundos antes de avançar para a próxima pergunta
      timer = setTimeout(() => {
        handleNext();
      }, 1500);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [answered]);

  const handleOptionClick = (index: number) => {
    if (answered) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    // Verifica se a resposta está correta
    const correct = selectedOption === question.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Registra a resposta
    onAnswerSelected(selectedOption);
    setAnswered(true);
  };

  const handleNext = () => {
    onNextQuestion();
    setSelectedOption(null);
    setAnswered(false);
    setShowFeedback(false);
  };

  // Função para obter a cor do badge de dificuldade
  const getDifficultyColor = () => {
    switch (question.difficulty) {
      case 'fácil':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'médio':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'difícil':
        return 'bg-red-100 text-red-800 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-t-4 border-primary">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{question.question}</h2>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
          {question.difficulty}
        </span>
      </div>
      
      <div className="mb-6">
        {question.options.map((option, index) => (
          <QuizOption
            key={index}
            option={option}
            index={index}
            selected={selectedOption === index}
            onClick={handleOptionClick}
            isCorrect={answered && index === question.correctAnswer}
            isIncorrect={answered && selectedOption === index && index !== question.correctAnswer}
          />
        ))}
      </div>

      {showFeedback && (
        <div className={`mb-4 p-3 rounded-md ${isCorrect ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          <div className="flex items-center">
            {isCorrect ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Resposta correta! Avançando para a próxima pergunta...</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Resposta incorreta. A resposta correta era: {question.options[question.correctAnswer]}</span>
              </>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-end">
        {!answered ? (
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={selectedOption === null}
          >
            Confirmar Resposta
          </button>
        ) : (
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-3">Avançando automaticamente...</span>
            <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion; 