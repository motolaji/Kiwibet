import './App.css';
import Navbar from './navbar'
import Hero from './hero'
import About from './About'
import Feature from './feature';
import Sophia from './sophia';
import Mobile from './mobile'
import Footer from './footer';
import Modal from './Components/modal'
import React, {useState, USeEffect} from "react";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <About/>
    <Feature/>
    <Sophia/>
    <Mobile/>
    <Footer/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;