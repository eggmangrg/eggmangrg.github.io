import React, { useCallback } from 'react';
import Particles from "react-particles";
import './App.css';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Game'
import Home from './Home'
function App() {
    const particlesInit = useCallback(async (engine) => {
        await loadFireworksPreset(engine);
    }, [])
    const particlesConfig={
        preset: "fireworks",
    }
    return (
       <Router>
            <Routes>
            <Route path="/Home" Component={Home}></Route>
            <Route index element={<Home />} />
            <Route path='/Game' Component={Game}></Route></Routes>
      <div>
        <nav style={{textAlign:'center'}}>
              <Link to="/Home" style={{color:'green'}}>Home</Link>
<br></br>
              <Link to="/Game"style={{color:'green'}}>Game</Link>

        </nav>
         
        </div>
        </Router>
    );
}

export default App;