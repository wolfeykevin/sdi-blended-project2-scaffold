import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { RoverContext } from '../RoverContext';
import './Winning.css';

const Winning = () => {
const { values, setters } = useContext(RoverContext);

  let spiritObj = {name: 'Spirit', purpose: "NASA's Spirit rover—and it's twin Opportunity—studied the history of climate and water at sites on Mars where conditions may once have been favorable to life.", mass: 374, launchDate: 'June 10, 2003', landingDate: 'Jan 4, 2004', totalImages: 124550, cardImg: '/images/rover-card-2-spirit.png'}
  let curiosityObj = {name: 'Curiosity', purpose: "NASA's Curiosity is the largest and most advanced rover ever sent to Mars. The car-sized rover is part of NASA's Mars Science Laboratory (MSL). Curiosity's ongoing mission is to study the ancient habitability and the potential for life on Mars.", mass: 1982, launchDate: 'Nov 26, 2011', landingDate: 'Aug 6, 2012', totalImages: 573061, cardImg: '/images/rover-card-4-curiosity.png'}
  let perseveranceObj = {name: 'Perseverance', purpose: "The Mars 2020 Perseverance Rover is searching for signs of ancient microbial life, which will advance NASA's quest to explore the past habitability of Mars.", mass: 2260, launchDate: 'Jul 30, 2020', landingDate: 'Feb 18, 2021', totalImages: 74966, cardImg: '/images/rover-card-5-perseverance.png'}
  let opportunityObj = {name: 'Opportunity', purpose: "NASA's Opportunity rover was one of the most successful and enduring interplanetary missions. Opportunity landed on Mars in early 2004 soon after its twin rover Spirit. Opportunity operated almost 15 years, setting several records and making a number of key discoveries.", mass: 374, launchDate: 'Jul 7, 2003', landingDate: 'Jan 25, 2004', totalImages: 198439, cardImg: '/images/rover-card-3-opportunity.png'}
  let noObj = {name: '', purpose: "", mass: 0, launchDate: '', landingDate: '', totalImages: 0, cardImg: ''}
  let selected;

  let location = useLocation();
  let path = location.pathname;
  let roverName = path.slice(9);

  if(path.includes('curiosity')) {
    selected = curiosityObj
  } else if(path.includes('spirit')) {
    selected = spiritObj
  } else if(path.includes('perseverance')) {
    selected = perseveranceObj
  } else if(path.includes('opportunity')) {
    selected = opportunityObj
  } else {
    selected = noObj
  }

  if (roverName === '') {
    roverName = 'curiosity'
  }

  return (
    <div className="body">
      <h1 data-testId='headerOne' className='winning-header'>The winner is... {selected.name}!</h1>

      <div className='flex-contain'>
        <img data-testId='cardImg' className='cardImg' src={selected.cardImg} alt={selected.name}/>

        <table data-testId ='table'>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{selected.name}</td>
              </tr>
              <tr>
                <td>Purpose:</td>
                <td>{selected.purpose}</td>
              </tr>
              <tr>
                <td>Mass:</td>
                <td>{selected.mass} lbs</td>
              </tr>
              <tr>
                <td>Launch Date:</td>
                <td>{selected.launchDate}</td>
              </tr>
              <tr>
                <td>Landing Date:</td>
                <td>{selected.landingDate}</td>
              </tr>
              <tr>
                <td>Total Images:</td>
                <td>{selected.totalImages}</td>
              </tr>
            </tbody>
          </table>
      </div>
      <h2 data-testId='headerTwo' className="winning-header">{selected.name}'s photographs:</h2>
      <div data-testId='photoDiv' className="winning-photos">
        {
          values.quizPhotos[roverName].map((item, index) => {
            return <img key={index}src={item}  alt={'dafs'}/>
          })
        }
      </div>
    </div>
  )
}

export default Winning;