import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Navbar from './components/Navbar';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <main className="background">
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/work" exact component={Project} />
          <Route path="/contact-me" exact component={Contact} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
