import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Required for routing
import './index.css';
import App from './App.jsx';
import StoreContextProvider from './context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <StoreContextProvider>
      <App />
      </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>
);
