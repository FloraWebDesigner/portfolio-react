import React from "react";
import { useState } from 'react'

import Header from './components/Header';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import Skill from './components/Skill';
import Connect from './components/Connect';
import Footer from './components/Footer';

import './App.css';

import { useReducer } from 'react';
import themeReducer from "./themeReducer";
import { ThemeContext } from "./themeContext";

function App() {
const [state, dispatcher] = useReducer(themeReducer, {theme: "yellow"});

function switchTheme(e) {
  const selectedTheme = e.target.value; 
  dispatcher({ type: `switch_${selectedTheme}`, theme: selectedTheme });
}

return (
  <ThemeContext.Provider value={{state, dispatcher}}>
  <div className={state.theme}>
  <div style={{ height: '100%', width: '100%' }}>  
  <Header /> 
  <div className="icon-set p-2 bg-white bg-opacity-50" style={{width:"8rem", position: "absolute", top: 0, right: 0 }}>
  {/* <input type="radio" name="theme" value="yellow" onChange={switchTheme} checked={state.theme === 'yellow'} />  */}
    <i className="fa-solid fa-circle-half-stroke me-3" style={{color:"#fee440"}} onClick={() => switchTheme({ target: { value: 'yellow' } })}></i>
    {/* <label htmlFor='yellow'>Yellow</label> */}
    {/* <input type="radio" name="theme" value="blue" onChange={switchTheme} checked={state.theme === 'blue'}/>  */}
    <i className="fa-solid fa-circle-half-stroke me-3" style={{color:"#98f5e1"}} onClick={() => switchTheme({ target: { value: 'blue' } })}></i>
    {/* <input type="radio" name="theme" value="red" onChange={switchTheme} checked={state.theme === 'red'}/>  */}
    <i className="fa-solid fa-circle-half-stroke me-3" style={{color:"#9a031e"}} onClick={() => switchTheme({ target: { value: 'red' } })}></i>
    {/* <input type="radio" name="theme" value="dark" onChange={switchTheme} checked={state.theme === 'dark'}/>  */}
    <i className="fa-solid fa-circle-half-stroke" style={{color:"#000102"}} onClick={() => switchTheme({ target: { value: 'dark' } })}></i> 
    </div>
  <main>

    <Home />
    <ProjectList />
    <Skill />
    <Connect />
    </main>

    <Footer />
    </div>
    </div>
    </ThemeContext.Provider>

  )
}

export default App
