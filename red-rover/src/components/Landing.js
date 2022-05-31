import React, { useContext }from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RoverContext } from '../RoverContext';
import styled from 'styled-components';
import Button from '@mui/material/Button';




const Landing = () => {
  const nav= useNavigate()
  const {values, setters} = useContext(RoverContext);
  return (
    
      <StyledBackground>
        <StyledHeader>Mars Rover Photo Gallery and Quiz</StyledHeader>
        <StyledParagraph>
          Select a rover to see its photo gallery or click the blue button below to start the quiz!
        </StyledParagraph>
        <StyledImageLinks>
          <div>
            <Link to={`/gallery/spirit`} onClick={() => {setters.setGalleryRover("spirit")}}>
              {<StyledImage src={"/images/rover-portrait-2-spirit.png"} alt="Spirit"/>}
            </Link>
            <Link to={`/gallery/opportunity`} onClick={() => {setters.setGalleryRover("opportunity")}}>
              {<StyledImage src={"/images/rover-portrait-3-opportunity.png"} alt="Opportunity"/>}
            </Link>
            <Link to={`/gallery/curiosity`} onClick={() => {setters.setGalleryRover("curiosity")}}>
              {<StyledImage src={"/images/rover-portrait-4-curiosity.png"} alt="Curiosity"/>}
            </Link>
            <Link to={`/gallery/perseverance`} onClick={() => {setters.setGalleryRover("perseverance")}}>
              {<StyledImage src={"/images/rover-portrait-5-perseverance.png"} alt="Opportunity"/>}
            </Link>
          </div>
            <p>
              <Button onClick={() => { nav(`/quiz/1`) }} variant="contained" size="large">Start Quiz!</Button>
            </p>
        </StyledImageLinks>
      </StyledBackground>

  )
}

export default Landing;

/*
2 - Spirit Portrait: "/images/rover-portrait-2-spirit.png"
3 - Opportunity Portrait: "/images/rover-portrait-3-opportunity.png"
4 - Curiosity Portrait: "/images/rover-portrait-4-curiosity.png"
5 - Perseverance Portrait url: "/images/rover-portrait-5-perseverance.png"
*/

const StyledBackground = styled.div`
  background-image: url("/images/background-landing.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  webkit-background-size: cover;
  text-align: center;
  width: 100vw;
  height: 100vh;

  button: {
    
  }
`;
const StyledHeader = styled.h1`
  font-size: 40px;
  text-shadow: 1px 2px #1e1e1e;
  color: white;
  margin: 0px;
  padding: 100px;
`;

const StyledImage = styled.img`
  width: 200px;
  padding: 20px;
  margin-top: auto;
  margin-bottom: auto;
  justify-content: center;
`;

const StyledParagraph = styled.p`
  width: 700px;
  line-height: 30px;
  font-size: 28px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(25, 25, 25, 0.5);
  color: white;
  padding: 15px;
  font-weight: bold;
  font-style: italic;
`;
const StyledImageLinks = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
gap: 10px;
padding: 10px;
position: absolute;
bottom: 80px;
`;