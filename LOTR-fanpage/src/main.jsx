import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
  </StrictMode>,
=======
import './index.css'
import AppRouter from './components/AppRouter.jsx'
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>,
>>>>>>> main
)
