import React, {useContext, useEffect} from 'react';
import { RoverContext } from '../RoverContext';
import { Link } from 'react-router-dom';

const RoverPicture = ({roverName}) => {
  const {values, setters} = useContext(RoverContext);

  return (
    
    <Link to={`/quiz/${values.votes.total + 2}`} onClick={() => {setters.setVotes(prev => ({[roverName]: values.votes[roverName]++, total: values.votes.total++, ...prev}))}} >
      <img src={values.quizPhotos[roverName][values.votes.total]} alt={roverName} width="300px" />
    </Link>
  )
  
  
}

export default RoverPicture;