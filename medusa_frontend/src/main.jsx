import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { MedusaProvider } from 'medusa-react';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl="http://localhost:9000"
    >
      <App />
    </MedusaProvider>
  </React.StrictMode>
);
