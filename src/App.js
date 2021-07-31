import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [ projectSelected, setProjectSelected] = useState(false);
  const [ contactSelected, setContactSelected] = useState(false);
  const [ resumeSelected, setResumeSelected] = useState(false);


  return (
    <div>
      <Navigation
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}

      ></Navigation>
      <main>
      {(!aboutSelected && !contactSelected && !resumeSelected) ?(
          <>
            <Project></Project>
          </>  
        ) :(!projectSelected && !aboutSelected && !resumeSelected) ? (
          <>
            <Contact></Contact>
          </>
        ) : (!projectSelected && !contactSelected && !aboutSelected) ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <About></About>
        )} 
      </main>
      <Footer />
    </div>
  );
}

export default App;
