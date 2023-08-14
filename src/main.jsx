import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './components/styles/GlobalStyle.js';
import { TokenProvider } from "./contexts/TokenContext.jsx";
import { CategoriesProvider } from './contexts/CategoriesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <TokenProvider>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </TokenProvider>
  </React.StrictMode>,
);