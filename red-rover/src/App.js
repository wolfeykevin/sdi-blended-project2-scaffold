import './App.css';
import { AppProvider, RoverContext } from './RoverContext';
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { Gallery, Winning, Quiz, Landing } from './components/'

function App() {

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/quiz/:id" element={<Quiz/>} />
          <Route path="/gallery/:rover" element={<Gallery/>} />
          <Route path="/winning/:rover" element={<Winning/>} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;


/*
structure:
RoverContext:
  {
    values: {
      votes: {
        Curiosity: 0,
        Spirit: 0,
        Opportunity: 0,
        Perseverance: 0,
        total: 0,
      }
      maxSol: {
        Curiosity: 0,
        Spirit: 0,
        Opportunity: 0,
        Perseverance: 0
      }
    }
    setters: {
      setVotes: () => {},
      setMaxSol: () => {},
    }
  }

<App>
  <RoverContext.Provider value="" >
    <Router>
      <Landing/>

      <Quiz/>

      <Gallery/>

      <Winning/>
    </Router>
  </RoverContext.Provider>
</App>

*/