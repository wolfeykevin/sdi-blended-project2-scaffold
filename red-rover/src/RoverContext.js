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
    curiosity: [],
    spirit: [],
    opportunity: [],
    perseverance: [],
    winner: []
  });

  const [galleryRover, setGalleryRover] = useState('')

  const values = {
    votes,
    maxSol,
    quizPhotos,
    galleryRover,
  }

  const setters = {
    setVotes,
    setMaxSol,
    setQuizPhotos,
    setGalleryRover,
  }

  return (
    <RoverContext.Provider value={{values, setters}}>
      {children}
    </RoverContext.Provider>
  );
};



export { AppProvider, RoverContext };