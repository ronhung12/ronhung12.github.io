import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
{/*      <Contact/>*/}
      <Footer/>
    </div>
  );
}

export default App;
