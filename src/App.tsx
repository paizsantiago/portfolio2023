import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Certificados from './components/Certificados/Certificados';
import Contacto from './components/Contacto/Contacto';

const App: React.FC = () => {
  return (
    <div className='lg:grid lg:grid-cols-10 lg:grid-rows-5 scroll-smooth relative'>
        <Navbar/>
        <Main/>
        <Skills/>
        <Projects/>
        <Certificados/>
        <Contacto/>
    </div>
  );
}

export default App;
