
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default App
