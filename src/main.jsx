import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Page/LandingPage';
import './Services/i18n';
import './assets/styles/index.css';
import './assets/styles/app.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </StrictMode>,
)
