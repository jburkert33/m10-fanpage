import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './components/AppRouter.jsx'
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>,
)
