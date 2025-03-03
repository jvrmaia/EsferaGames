# Esfera Papelaria - Quiz

Um quiz interativo para a Esfera Papelaria, desenvolvido com React, TypeScript e Tailwind CSS.

## Sobre o Projeto

Este projeto é um quiz interativo que testa o conhecimento dos usuários sobre papelaria, arte e materiais escolares. O quiz apresenta perguntas de diferentes níveis de dificuldade (fácil, médio e difícil) e fornece feedback imediato sobre as respostas.

## Funcionalidades

- Perguntas de múltipla escolha com diferentes níveis de dificuldade
- Feedback visual imediato para respostas corretas e incorretas
- Transição automática para a próxima pergunta após responder
- Exibição da pontuação final ao concluir o quiz
- Opção de reiniciar o quiz
- Informações sobre lojas físicas e referências de estudo

## Tecnologias Utilizadas

- React 19
- TypeScript
- Tailwind CSS 3
- Vite
- GitHub Actions para CI/CD

## Desenvolvimento

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/jvrmaia/EsferaGames.git
   cd EsferaGames
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse o aplicativo em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run lint` - Executa a verificação de linting
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run deploy` - Faz o deploy para o GitHub Pages

## Deploy

### Deploy Automático

O projeto está configurado com GitHub Actions para fazer o build e deploy automaticamente quando há um push para a branch `main`. O workflow está definido no arquivo `.github/workflows/build-deploy.yml`.

### Deploy Manual

Para fazer o deploy manualmente para o GitHub Pages:

```bash
npm run deploy
```

## Acesso ao Site

O quiz está disponível em: [https://jvrmaia.github.io/EsferaGames/](https://jvrmaia.github.io/EsferaGames/)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
