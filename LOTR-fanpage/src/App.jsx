import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from "./components/Landing";
import Nav from "./components/Nav";

const componentMap = {
  "landing": Landing
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
        </Routes>
      </main>
    </Router>
  );
}

export default App
