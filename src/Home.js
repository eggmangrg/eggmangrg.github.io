import React, { useCallback } from 'react';
import Particles from "react-particles";
import './App.css';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

function Home () {
    const particlesInit = useCallback(async (engine) => {
        await loadFireworksPreset(engine);
    }, [])
    const particlesConfig={
        preset: "fireworks",
    }
    return (
        <div>
            <Particles options={particlesConfig} init={particlesInit}/>
        <header className="App-header">
            <h1>HAPPY BIRTHDAY TEEK</h1>
        </header>
        </div>
    );
}
export default Home;