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

  //run the first fetch on the landing page
  fetch(`https://mars-photos.herokuapp.com/api/v1/rovers`)
  .then(response => response.json())
  .then( data => {
    setters.setMaxSol({
      curiosity:    data.rovers[0].max_sol,
      spirit:       data.rovers[1].max_sol,
      opportunity:  data.rovers[2].max_sol,
      perseverance: data.rovers[3].max_sol
    })
  })

  return (

      <StyledBackground>
        <StyledHeader data-testid='header'>Mars Rover Photo Gallery and Quiz</StyledHeader>

        <StyledRoverDiv>
          <StyledParagraph>
            Select a rover to see its photo gallery or click the blue button below to start the quiz!
          </StyledParagraph>
          <div>
            <Link data-testid='linkOne' to={`/gallery/spirit`} onClick={() => {setters.setGalleryRover("spirit")}}>
              {<StyledImage src={"/images/rover-portrait-2-spirit.png"} alt="Spirit"/>}
            </Link>
            <Link data-testid='linkTwo' to={`/gallery/opportunity`} onClick={() => {setters.setGalleryRover("opportunity")}}>
              {<StyledImage src={"/images/rover-portrait-3-opportunity.png"} alt="Opportunity"/>}
            </Link>
            <Link data-testid='linkThree' to={`/gallery/curiosity`} onClick={() => {setters.setGalleryRover("curiosity")}}>
              {<StyledImage src={"/images/rover-portrait-4-curiosity.png"} alt="Curiosity"/>}
            </Link>
            <Link data-testid='linkFour' to={`/gallery/perseverance`} onClick={() => {setters.setGalleryRover("perseverance")}}>
              {<StyledImage src={"/images/rover-portrait-5-perseverance.png"} alt="Opportunity"/>}
            </Link>
          </div>
            <StyledButton>
              <Button className="btn" data-testid='btn' onClick={() => {
                  setters.setQuizPhotos({
                    curiosity: [],
                    spirit: [],
                    opportunity: [],
                    perseverance: [],
                    winner: []
                  });
                  setters.setVotes( {
                    curiosity: 0,
                    spirit: 0,
                    opportunity: 0,
                    perseverance: 0,
                    total: 0
                  });
                  nav(`/quiz/1`)
                }}
                variant="contained" size="large">
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
  height: 97.3vh;
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
  top: 35%;
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