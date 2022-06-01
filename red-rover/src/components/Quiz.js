 import React, {useState, useContext, useEffect} from 'react';
import { RoverContext } from '../RoverContext';
import { RoverPicture } from './index'

const Quiz = () => {
  const {values, setters} = useContext(RoverContext);
  const rovers = ['curiosity', 'spirit', 'opportunity', 'perseverance'];
  const [photos, setPhotos] = useState({
    curiosity: [],
    spirit: [],
    opportunity: [],
    perseverance: []
  });

  const roverPhotos = {
    curiosity: [],
    spirit: [],
    opportunity: [],
    perseverance: []
  };

  const finalPhotos = {
    curiosity: [],
    spirit: [],
    opportunity: [],
    perseverance: []
  };

  

  const [sol, setSol] = useState(0);

  let promiseArray = [];

  useEffect(() => {
    rovers.forEach((roverName) => {
      //generate number between 0 and values.maxSol.[rover]
      // console.log(values.maxSol)
      // setSol(Math.floor((Math.random() * values.maxSol[roverName])))
      promiseArray.push(fetch(`https://mars-photos.herokuapp.com/api/v1/rovers/${roverName}/photos?sol=10`)
        .then(response => response.json())
        .then(data => data.photos.map(photo => photo["img_src"]))
        .then(data => roverPhotos[roverName] = data))
    
    })
    Promise.all(promiseArray)
      .then(()=> {
        console.log(`roverPhotos: `, roverPhotos);
        let photoNumbers = [0, 1, 2, 3, 4];
        // for(let i = 0; i < 5; i++) {
        //   photoNumbers.push(Math.floor((Math.random() * data.photos.length)))
        // }
        rovers.forEach((roverName) => {
          finalPhotos[roverName] = photoNumbers.map( (num) => {
            //fix img_src stuff
            return roverPhotos[roverName][num];
          })
        })
        console.log(`finalPhotos: `, finalPhotos)
        setters.setQuizPhotos(finalPhotos);
        
      })
  
  }, [])

  
  return (
    <>
    <div>
      {photos.curiosity.map((element, index) => {
        return (
          <img key={index} src={element} alt="curiosity" width="200px" />
        )
      })}
    </div>

      {/* {values.quizPhotos.curiosity.map((element, index) => {
        return (
          <img key={index} src={element} alt={"curiosity"} width='200px'/>
        )
      })} */}

    <div>
      <div>
        <p>Each of these photographs were taken by one of the rovers!</p>
        <p>Select your favorite photograph below to determine your favorite Mars photographer!</p>
      </div>
      <div>
        <p>Selection {values.votes.total + 1}/5 </p>
        <div> 
          {/* pictures */}
          {/* // <Link to={`/quiz/${values.votes.total + 1}`} onClick={() => {setters.setVotes(prev => {...prev, values.votes.curiosity++})}} >
          //   <img src="values.quizPhotos.curiosity[values.votes.total]" alt="Curiosity"  />
          // </Link> */}
          <RoverPicture roverName='curiosity'/>
          <RoverPicture roverName='spirit'/>
          <RoverPicture roverName='opportunity'/>
          <RoverPicture roverName='perseverence'/>
        </div>
      </div>

    </div>



    </>
  )
}

export default Quiz;

/*
Runs only once
  page renders, fetches for all quizzes
  1 fetch (to determine maxSol)
    https://mars-photos.herokuapp.com/api/v1/rovers
    [data].rovers.[index].max_sol

  4 fetches, (1 for each rover) (all from ranom sol)
    https://mars-photos.herokuapp.com/api/v1/rovers/[rover]/photos?sol=[sol]
    [data].photos.[index].img_src
  get length of photos array
  if empty array, re-fetch with different sol
  pick 5 random numbers from 0 to length
  store fetch data into context
    quizPhotos.[rover]
runs each quiz (1-5)
  display photos for index [votes.total]
  when a photo is clicked on
    navigates to next quiz (unless it's that last quiz) (/quiz/:quizNumber)
    store which rover they clicked on in votes.[rover]

on last quiz
  determine winning rover based on votes
  move winnning rover's photos to quizPhotos.winner
  navigate to /winning/:rover

*/
