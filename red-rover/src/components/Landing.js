import React, { useContext }from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RoverContext } from '../RoverContext';
import styled from 'styled-components';


const Landing = () => {
  const nav= useNavigate()
  const {values, setters} = useContext(RoverContext);
  return (
    <>
      <h1>Mars Rover Photo Gallery and Quiz</h1>
      <div className='instructionsText'> 
        <p>Select a rover to see its photo gallery or click the blue button below to start the quiz!</p>
      </div>
      <div className='images'>
        <Link to={`/gallery/spirit`} onClick={() => {setters.setGalleryRover("spirit")}}>
          {<img src={"/images/rover-portrait-2-spirit.png"} alt="Spirit"/>} 
        </Link>
        <Link to={`/gallery/opportunity`} onClick={() => {setters.setGalleryRover("opportunity")}}>
          {<img src={"/images/rover-portrait-3-opportunity.png"} alt="Opportunity"/>} 
        </Link>
        <Link to={`/gallery/curiosity`} onClick={() => {setters.setGalleryRover("curiosity")}}>
          {<img src={"/images/rover-portrait-4-curiosity.png"} alt="Curiosity"/>}
        </Link>
        <Link to={`/gallery/perseverance`} onClick={() => {setters.setGalleryRover("perseverance")}}>
          {<img src={"/images/rover-portrait-5-perseverance.png"} alt="Opportunity"/>} 
        </Link>
      </div>
      <button onClick={() => { nav(`/quiz/1`) }}>Start Quiz!</button>
    </>
  )
}

export default Landing;

/*
2 - Spirit Portrait: "/images/rover-portrait-2-spirit.png"
3 - Opportunity Portrait: "/images/rover-portrait-3-opportunity.png"
4 - Curiosity Portrait: "/images/rover-portrait-4-curiosity.png"
5 - Perseverance Portrait url: "/images/rover-portrait-5-perseverance.png"
*/