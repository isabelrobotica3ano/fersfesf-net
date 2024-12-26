import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RoboticsInfo } from './components/RoboticsInfo';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <RoboticsInfo />
        <Technologies />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;