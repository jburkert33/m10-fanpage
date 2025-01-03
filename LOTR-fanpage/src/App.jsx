import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Map from "./components/Map"; 

import './App.css';

const componentMap = {
  "landing": Landing,
  "Map": Map
}

function App() {

  const [view, setView] = useState("landing");
  const Component = componentMap[view];
  
  return (
    <Router>
      <main className="container">
      <Nav view={view} setView={setView} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Map" element={<Map setView={setView} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
