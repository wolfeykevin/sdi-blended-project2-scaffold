// import React, {useState} from 'react';

// const RoverContext = React.createContext({});


import React, { useState } from "react";

const RoverContext = React.createContext();

// Use AppProvider at the root of your project to provided to all children
const AppProvider = ({ children }) => {

  const [votes, setVotes] = useState( {
    curiosity: 0,
    spirit: 0,
    opportunity: 0,
    perseverance: 0,
    total: 0
  });

  const [maxSol, setMaxSol] = useState( {
      curiosity: 0,
      spirit: 0,
      opportunity: 0,
      perseverance: 0
  });

  const [ quizPhotos, setQuizPhotos ] = useState( {
    curiosity: ["http://mars.nasa.gov/mer/gallery/all/1/f/200/1F145938997ESF3505P1127L0M1-BR.JPG", "http://mars.nasa.gov/mer/gallery/all/1/f/200/1F145938997ESF3505P1127L0M1-BR.JPG", "http://mars.nasa.gov/mer/gallery/all/1/f/200/1F145938997ESF3505P1127L0M1-BR.JPG"],
    spirit: [],
    opportunity: [],
    perseverance: []
  });

  const [galleryRover, setGalleryRover] = useState('')

  const [isLoading, setIsLoading] = useState('false');

  const values = {
    votes,
    maxSol,
    quizPhotos,
    galleryRover,
    isLoading
  }

  const setters = {
    setVotes,
    setMaxSol,
    setQuizPhotos,
    setGalleryRover,
    setIsLoading
  }

  return (
    <RoverContext.Provider value={{values, setters}}>
      {children}
    </RoverContext.Provider>
  );
};



export { AppProvider, RoverContext };