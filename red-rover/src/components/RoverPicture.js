import React, {useContext} from 'react';
import { RoverContext } from '../RoverContext';
import { Link } from 'react-router-dom';

const RoverPicture = ({roverName}) => {
  const {values, setters} = useContext(RoverContext);


  return (
    <>
    {/* need to make work with rovername instead of just hard coding */}
{/* make onclick work */}
      <Link to={`/quiz/${values.votes.total + 1}`} onClick={() => {setters.setVotes(prev => ({[roverName]: values.votes.curiosity++, total: values.votes.total++, ...prev}))}} >
        <img src={values.quizPhotos.curiosity[values.votes.total]} alt={roverName} width="300px" />
      </Link>
    </>
  )
}

export default RoverPicture;