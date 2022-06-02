import React, {useContext, useEffect} from 'react';
import { RoverContext } from '../RoverContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RoverPicture = ({roverName}) => {
  const {values, setters} = useContext(RoverContext);

  return (
    <StyledPhoto>
      <Link to={`/quiz/${values.votes.total + 2}`} onClick={() => {setters.setVotes(prev => ({[roverName]: values.votes[roverName]++, total: values.votes.total++, ...prev}))}} >
        <img src={values.quizPhotos[roverName][values.votes.total]} alt="Mars Rover Photo" width="240px" height="240px" />
      </Link>
    </StyledPhoto>
  )
}

export default RoverPicture;


const StyledPhoto = styled.div`
width: 200px;
margin: 24px 48px 24px;
border-radius: 1rem;
transition: all 0.75s ease;
&:hover {
  // border-style: solid;
  // border-size: flex;
  // border-width: 7px;
  // border-color: yellow;
  transform: matrix(1.2, 0, 0, 1.2, -16, 32)
}
`;