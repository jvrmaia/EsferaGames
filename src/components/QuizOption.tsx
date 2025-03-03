import React from 'react';

interface QuizOptionProps {
  option: string;
  index: number;
  selected: boolean;
  onClick: (index: number) => void;
  isCorrect?: boolean;
  isIncorrect?: boolean;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  index,
  selected,
  onClick,
  isCorrect = false,
  isIncorrect = false,
}) => {
  // Determina a classe CSS com base no estado da opção
  const getButtonClass = () => {
    if (isCorrect) {
      return 'bg-green-500 text-white border border-green-600';
    }
    if (isIncorrect) {
      return 'bg-red-500 text-white border border-red-600';
    }
    if (selected) {
      return 'bg-primary text-white';
    }
    return 'bg-white border border-gray-200 hover:border-primary hover:bg-primary-light hover:bg-opacity-10';
  };

  // Determina a classe CSS para o círculo com a letra
  const getCircleClass = () => {
    if (isCorrect) {
      return 'bg-white text-green-600';
    }
    if (isIncorrect) {
      return 'bg-white text-red-600';
    }
    if (selected) {
      return 'bg-white text-primary';
    }
    return 'bg-gray-100 text-gray-600';
  };

  return (
    <button
      className={`w-full p-4 mb-3 mr-3 text-left rounded-lg transition-colors ${getButtonClass()}`}
      onClick={() => onClick(index)}
      disabled={isCorrect || isIncorrect}
    >
      <div className="flex items-center">
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${getCircleClass()}`}
        >
          {String.fromCharCode(65 + index)}
        </div>
        <span>{option}</span>
        {isCorrect && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )}
        {isIncorrect && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </button>
  );
};

export default QuizOption; 