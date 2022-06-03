/* ---------- Import Statements ---------- */
import React, {useState, useContext, useEffect} from 'react';
import { RoverContext } from '../RoverContext';
import { RoverPicture } from './index';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Quiz.css';

/* ------------------------------------ */

const Quiz = () => {

  /* --- Section I - Define Function Variables --- */   

  // import context values & setters
  const {values, setters} = useContext(RoverContext);

  // create array of rover names to loop over in upcoming forEach
  const rovers = ['curiosity', 'spirit', 'opportunity', 'perseverance'];

  // is the state variable "photos" still being used here?
  const [photos, setPhotos] = useState({
    curiosity: [],
    spirit: [],
    opportunity: [],
    perseverance: []
  });

  // local scope variable storing the fetched image urls
  const roverPhotos = {
    curiosity: [],
    spirit: [],
    opportunity: [],
    perseverance: []
  };

  // stores the five selected photos for each rover used in the quiz rounds
  const finalPhotos = {
    curiosity: [],
    spirit: [],
    opportunity: [],
    perseverance: [],
    winner: []
  };

  /* --- Section II - Fetch and Select Rover Photos --- */   

  // sol will be used
  let sol = 1;

  // define accumulator variable to store an array of promises for Promise.all
  let promiseArray = [];

  // fetch photos by sol date for each rover
  useEffect(() => {
    setters.setIsLoading(true);
    rovers.forEach((roverName) => {
      // generate number between 1 and values.maxSol.[rover]
      // console.log(values.maxSol[roverName])
      sol = (Math.floor((Math.random() * values.maxSol[roverName])) + 1)
      // console.log(`sol for ${roverName}: `, sol);

      promiseArray.push(fetch(`https://mars-photos.herokuapp.com/api/v1/rovers/${roverName}/photos?sol=${sol}`)
        .then(response => response.json())
        .then(data => data.photos.map(photo => photo["img_src"]))
        .then(data => roverPhotos[roverName] = data)) 
    })
    Promise.all(promiseArray)
      .then(()=> {
        rovers.forEach((roverName) => {
          let photoNumbers = [];
          for(let i = 0; i < 5; i++) {
            photoNumbers.push(Math.floor((Math.random() * roverPhotos[roverName].length)))
          }
          finalPhotos[roverName] = photoNumbers.map( (num) => {
            return roverPhotos[roverName][num];
          })
        })
        setters.setQuizPhotos(finalPhotos);
        setters.setIsLoading(false);
      })
  }, [])

  /* --- Section III - Render Quiz Photos & Navigate to Winner Page --- */  
  const nav= useNavigate();
  let winningRover = '';
  let winningScore = 0;

  // if(values.isLoading === true) {
  //   return (<img src="/images/mars.gif" alt="loading" />)
  /* } else */ if(values.votes.total < 5) {
    return (
      <>
        <div className='flex-column'>
          <StyledDiv>
            <StyledParagraph data-testid='p1'>Each of these photographs were taken by one of the rovers!</StyledParagraph>
            <StyledParagraph data-testid='p2'>Select your favorite photograph below to determine your favorite Mars photographer!</StyledParagraph>
          </StyledDiv>
          <StyledQuiz>
            <StyledParagraph>Selection {values.votes.total + 1}/5 </StyledParagraph>
              <StyledPhotoLayout data-testid='photos'> 
              { values.isLoading ? <img src="/images/mars.gif" width="240px" alt="loading" /> : (
                <>
                  <RoverPicture roverName='curiosity'/>
                  <RoverPicture roverName='spirit'/>
                  <RoverPicture roverName='opportunity'/>
                  <RoverPicture roverName='perseverance'/>
                </>
                )}
              </StyledPhotoLayout>
          </StyledQuiz>
        </div>
      </>
    )
  } else {
    // calculate winner based on most votes
    rovers.forEach(currentRover => {
      if(values.votes[currentRover] > winningScore) {
        winningScore = values.votes[currentRover]
        winningRover = currentRover
      };
    });

    // nav to winner page
    nav(`/winning/${winningRover}`)
  };
};

export default Quiz;


/* --- Styled Components --- */

const StyledPhotoLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledParagraph = styled.p`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const StyledQuiz = styled.div`
  padding-top: 10vh;
`

const StyledDiv = styled.div`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 75px;
  padding: 15px;
  line-height: 30px;
  background: rgba(25, 25, 25, 0.5);
  color: white;
  font-weight: bold;
  font-size: 28px;
  font-style: italic;
`