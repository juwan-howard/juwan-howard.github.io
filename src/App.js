import React from 'react';
import './App.css';

// Import components
import Header from './components/layout/Header';
import Hero from './components/film/Hero';
import WorkGrid from './components/film/WorkGrid';
import About from './components/film/About';
import ShowReel from './components/film/ShowReel';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <WorkGrid />
        <ShowReel />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
