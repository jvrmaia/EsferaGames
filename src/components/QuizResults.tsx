import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { questionReferences, additionalMaterials } from '../data/studyReferences';

interface QuizResultsProps {
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ onRestart }) => {
  const { state, questions } = useQuiz();
  const { score, couponCode, answers } = state;
  const totalQuestions = questions.length;
  const allCorrect = score === totalQuestions;
  
  // Estado para controlar a exibição de todas as referências
  const [showAllReferences, setShowAllReferences] = useState(false);

  // Calcular estatísticas por nível de dificuldade
  const difficultyStats = {
    fácil: { total: 0, correct: 0 },
    médio: { total: 0, correct: 0 },
    difícil: { total: 0, correct: 0 }
  };

  // Identificar perguntas respondidas incorretamente
  const incorrectQuestions = questions.filter((question, index) => 
    answers[index] !== question.correctAnswer
  );

  questions.forEach((question, index) => {
    const difficulty = question.difficulty;
    difficultyStats[difficulty].total += 1;
    
    if (answers[index] === question.correctAnswer) {
      difficultyStats[difficulty].correct += 1;
    }
  });

  const handleRedirectToStore = () => {
    if (couponCode) {
      window.location.href = `https://www.esferapapelaria.com.br/?cupom=${couponCode}`;
    }
  };

  // Função para obter a cor do badge de dificuldade
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
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
    <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-primary">
      <h2 className="text-2xl font-bold mb-4 text-primary">Resultado do Quiz</h2>
      
      <div className="mb-6">
        <p className="text-lg mb-2">
          Você acertou {score} de {totalQuestions} perguntas!
        </p>
        
        {/* Estatísticas por nível de dificuldade */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Desempenho por Nível</h3>
          <div className="space-y-2">
            {Object.entries(difficultyStats).map(([difficulty, stats]) => (
              stats.total > 0 && (
                <div key={difficulty} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium mr-2 ${getDifficultyColor(difficulty)}`}>
                      {difficulty}
                    </span>
                    <span>
                      {stats.correct} de {stats.total} ({Math.round((stats.correct / stats.total) * 100)}%)
                    </span>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${(stats.correct / stats.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
        
        {allCorrect ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-green-700 font-medium mb-2">
              Parabéns! Você ganhou um cupom de desconto de 5%!
            </p>
            <div className="bg-white border border-green-300 rounded-md p-3 mb-4">
              <p className="text-xl font-bold text-secondary">{couponCode}</p>
            </div>
            <button
              onClick={handleRedirectToStore}
              className="btn btn-primary w-full mb-4"
            >
              Usar Cupom na Loja
            </button>
            
            {/* Material adicional para quem acertou tudo */}
            <div className="mt-6 text-left">
              <h3 className="text-lg font-semibold mb-2 text-green-700">Material Adicional para Aprofundar seus Conhecimentos</h3>
              <p className="text-sm text-green-600 mb-3">
                Você já domina os conceitos básicos! Que tal explorar estes tópicos avançados?
              </p>
              <div className="space-y-3">
                {additionalMaterials.map((material, index) => (
                  <div key={index} className="bg-white border border-green-200 rounded-md p-3">
                    <h4 className="font-medium text-primary">{material.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{material.description}</p>
                    <a 
                      href={material.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-secondary hover:text-secondary-dark font-medium inline-flex items-center"
                    >
                      Ler artigo
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <p className="text-yellow-700 mb-3">
              Você precisa acertar todas as perguntas para ganhar um cupom de desconto.
            </p>
            
            {/* Referências de estudo para perguntas erradas */}
            <div className="mt-4 text-left">
              <h3 className="text-lg font-semibold mb-2 text-yellow-700">Material de Estudo Recomendado</h3>
              <p className="text-sm text-yellow-600 mb-3">
                Confira estes recursos para aprender mais sobre os tópicos que você errou:
              </p>
              
              <div className="space-y-3 mb-3">
                {incorrectQuestions.slice(0, showAllReferences ? incorrectQuestions.length : 2).map((question, index) => {
                  const reference = questionReferences[question.id];
                  return (
                    <div key={index} className="bg-white border border-yellow-200 rounded-md p-3">
                      <div className="flex items-start mb-2">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-2 mt-1">
                          Pergunta {question.id}
                        </span>
                        <p className="text-gray-700">{question.question}</p>
                      </div>
                      <h4 className="font-medium text-primary">{reference.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{reference.description}</p>
                      <a 
                        href={reference.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-secondary hover:text-secondary-dark font-medium inline-flex items-center"
                      >
                        Ler artigo
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  );
                })}
              </div>
              
              {incorrectQuestions.length > 2 && (
                <button 
                  onClick={() => setShowAllReferences(!showAllReferences)}
                  className="text-sm text-primary hover:text-primary-dark font-medium"
                >
                  {showAllReferences ? 'Mostrar menos' : `Ver mais ${incorrectQuestions.length - 2} referências`}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Lojas Físicas */}
      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold mb-3 text-primary">Visite Nossas Lojas Físicas</h3>
        <p className="text-gray-600 mb-4">
          Utilize seu cupom ou venha conhecer nosso amplo catálogo de produtos em uma de nossas lojas:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Loja 1 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-left">
            <h4 className="font-medium text-primary mb-2">Esfera Papelaria - Jardim da Penha
            </h4>
            <p className="text-sm text-gray-600 mb-3">
            Av. Anísio Fernandes Coelho, 1.730 - Loja 2 - Jardim da Penha, Vitória - ES, 29060-670
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Seg-Sex: 09h às 19h | Sáb: 9h às 13h
              </div>
              <a 
                href="https://maps.app.goo.gl/ejVD9AVLE2doiBnX7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-secondary-dark font-medium inline-flex items-center"
              >
                Ver no mapa
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Loja 2 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-left">
            <h4 className="font-medium text-primary mb-2">Esfera Papelaria - Praia do Canto</h4>
            <p className="text-sm text-gray-600 mb-3">
            Av. Rio Branco, 1645 - lojas 15 e 16 - Praia do Canto, Vitória - ES, 29055-642
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Seg-Sex: 09h às 19h | Sáb: 9h às 13h
              </div>
              <a 
                href="https://maps.app.goo.gl/NT278NwsETEonNqWA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-secondary-dark font-medium inline-flex items-center"
              >
                Ver no mapa
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button onClick={onRestart} className="btn btn-secondary mt-6">
        Tentar Novamente
      </button>
    </div>
  );
};

export default QuizResults; 