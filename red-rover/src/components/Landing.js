import React, { useContext }from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RoverContext } from '../RoverContext';
import styled from 'styled-components';
import Button from '@mui/material/Button';
// import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';




const Landing = () => {
  const nav= useNavigate()
  const {values, setters} = useContext(RoverContext);
  return (

      <StyledBackground>
        <StyledHeader data-testId='header'>Mars Rover Photo Gallery and Quiz</StyledHeader>
        <StyledParagraph>
          Select a rover to see its photo gallery or click the blue button below to start the quiz!
        </StyledParagraph>
        <StyledRoverDiv>
          <div>
            <Link data-testId='linkOne' to={`/gallery/spirit`} onClick={() => {setters.setGalleryRover("spirit")}}>
              {<StyledImage src={"/images/rover-portrait-2-spirit.png"} alt="Spirit"/>}
            </Link>
            <Link data-testId='linkTwo' to={`/gallery/opportunity`} onClick={() => {setters.setGalleryRover("opportunity")}}>
              {<StyledImage src={"/images/rover-portrait-3-opportunity.png"} alt="Opportunity"/>}
            </Link>
            <Link data-testId='linkThree' to={`/gallery/curiosity`} onClick={() => {setters.setGalleryRover("curiosity")}}>
              {<StyledImage src={"/images/rover-portrait-4-curiosity.png"} alt="Curiosity"/>}
            </Link>
            <Link data-testId='linkFour' to={`/gallery/perseverance`} onClick={() => {setters.setGalleryRover("perseverance")}}>
              {<StyledImage src={"/images/rover-portrait-5-perseverance.png"} alt="Opportunity"/>}
            </Link>
          </div>
            <StyledButton>
              <Button data-testId='btn' onClick={() => { nav(`/quiz/1`) }} variant="contained" size="large">
                  Start Quiz!
              </Button>
            </StyledButton>
        </StyledRoverDiv>
      </StyledBackground>

  )
}

export default Landing;


const StyledBackground = styled.div`
  background-image: url("/images/background-landing.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  // padding: 20px;
  margin: 20px;
  border-radius: 1rem;
  justify-content: center;
  box-shadow: 8px 8px 32px 8px #000000;
  transition: all 0.75s ease;
  &:hover {
    transform: matrix(1.2, 0, 0, 1.2, -16, 32)
  }
`;

const StyledParagraph = styled.p`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  line-height: 30px;
  background: rgba(25, 25, 25, 0.5);
  color: white;
  font-weight: bold;
  font-size: 28px;
  font-style: italic;
`;

const StyledRoverDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -480px;
`;

const StyledButton = styled.div`
  margin-top: 48px;
  transition: all 0.75s ease;
  &:hover {
    transform: scale(1.2)

  }


`;