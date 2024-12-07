import React from "react";
import { useState } from 'react'

import Header from './components/Header';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import Skill from './components/Skill';
import Connect from './components/Connect';
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
      
    <div style={{ height: '100%', width: '100%' }}>  
    <Header />  
    <main>

    <Home />
    <ProjectList />
    <Skill />
    <Connect />
    </main>

    <Footer />
    </div>

  )
}

export default App
