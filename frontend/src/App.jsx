import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Career from "./components/Career";
import Project from "./components/Project"
import Contact from "./components/Contact";
function App() {
  return (
    <><Header/>
    <Home/>
    <About/>
    <WhatIDo/>
    <Career/>
    <Project/>
    <Contact/>
    </>
  
  );
}

export default App;
