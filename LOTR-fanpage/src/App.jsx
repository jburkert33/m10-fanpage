
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Films from './components/Films';
import Books from './components/Books';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/films' element={<Films />} />
                <Route path='/books' element={<Books />} />
            </Routes>
        </Router>
    );

}

export default App
