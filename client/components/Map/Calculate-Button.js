import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { GET_DISTANCE } from './utils';
import Results from './Calculated-Results';

const StyledButton = styled.button`
  background-color: #FFC1CC
  aria-label: "calculate"
  color: palevioletred;
  font-size: 1em;
  margin: 0;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

// import { setOriginStation,
//   setDestinationStation,
//   resetStations,
//   addStep } from '../../redux/route';
// import { fitBounds,
//   calculateRoute,
//   calcLatLngDistance } from '../../google-maps/utils';

const CalculateButton = ({userLocation}) => {
  const [distance, setDistance] = useState(0);

//TODO: if we want to do the calculation FIRST then show the user the closest stations, there needs to be a way to sort the stations from the user by the distance. That'd require a function to calculate the stations way before. OR we can get the distance to the station that the user selects. Might be easier to handle it that way.
  const handleClick = (evt) => {
    evt.preventDefault();
    const calculatedDistance = GET_DISTANCE(userLocation.longitude, userLocation.latitude, 0, 0);
    setDistance(calculatedDistance);
  }

  return (
    <div className="calculate-container">
    <StyledButton onClick={handleClick}>
      Click Here to See How Far You Are!
    </StyledButton>
    <Results distance={distance}/>
    </div>
  )

}

export default CalculateButton;

CalculateButton.propTypes = {
  handleClick: propTypes.func,
  distance: propTypes.number
}
