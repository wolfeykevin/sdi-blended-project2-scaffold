import './App.css';
import { AppProvider, RoverContext } from './RoverContext';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Gallery, Winning, Quiz, Landing, Header } from './components/'




function App() {
  

  return (
    <AppProvider>
      <Router>
        <Header />
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

