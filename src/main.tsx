import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { FirstStartModalContextProvider } from './context';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FirstStartModalContextProvider>
        <App />
      </FirstStartModalContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
