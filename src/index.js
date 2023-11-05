import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/App/Import.scss'
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import CustomToastContainer from './components/ToastCont';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(

    <QueryClientProvider client={queryClient}>
      <App />
      <CustomToastContainer />
    </QueryClientProvider>
    
  );







