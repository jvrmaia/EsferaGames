import { QuizProvider } from './context/QuizContext';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="./images/esfera-logo.svg" 
              alt="Esfera Papelaria" 
              className="h-24 md:h-32"
            />
          </div>
          
          <h1 className="text-3xl font-bold text-primary mb-2">
            Quiz de Conhecimentos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Responda corretamente às 5 perguntas sobre papelaria e materiais de escritório 
            para ganhar um cupom de 5% de desconto em suas compras!
          </p>
          
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm text-gray-600">Fácil</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
              <span className="text-sm text-gray-600">Médio</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
              <span className="text-sm text-gray-600">Difícil</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            O quiz contém perguntas de diferentes níveis de dificuldade. 
            A cada tentativa, você receberá um conjunto diferente de perguntas!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <QuizProvider>
            <Quiz />
          </QuizProvider>
        </div>
      </div>
    </main>
  );
}

export default App;
