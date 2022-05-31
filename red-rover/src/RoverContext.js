// import React, {useState} from 'react';

// const RoverContext = React.createContext({});


import React, { useState } from "react";

const RoverContext = React.createContext();

// Use AppProvider at the root of your project to provided to all children
const AppProvider = ({ children }) => {

  const [votes, setVotes] = useState( {
    Curiosity: 0,
    Spirit: 0,
    Opportunity: 0,
    Perseverance: 0,
    total: 0
  });

  const [maxSol, setMaxSol] = useState( {
    Curiosity: 0,
      Spirit: 0,
      Opportunity: 0,
      Perseverance: 0
  })

  const [galleryRover, setGalleryRover] = useState('')

  const values = {
    votes,
    maxSol,
    galleryRover,
  }

  const setters = {
    setVotes: () => {},
    setMaxSol: () => {},
    setGalleryRover: () => {}
  }

  return (
    <RoverContext.Provider value={{values, setters}}>
      {children}
    </RoverContext.Provider>
  );
};



export { AppProvider, RoverContext };