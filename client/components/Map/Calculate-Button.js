import React from 'react';
import styled from 'styled-components';
import { GET_DISTANCE } from './getDistance';

const StyledButton = styled.button`
  background-color: #FFC1CC
  aria-label: "calculate"
`

// import { setOriginStation,
//   setDestinationStation,
//   resetStations,
//   addStep } from '../../redux/route';
// import { fitBounds,
//   calculateRoute,
//   calcLatLngDistance } from '../../google-maps/utils';

const CalculateButton = ({userLocation}) => {

//TODO: if we want to do the calculation FIRST then show the user the closest stations, there needs to be a way to sort the stations from the user by the distance. That'd require a function to calculate the stations way before. OR we can get the distance to the station that the user selects. Might be easier to handle it that way.
  const handleClick = (evt) => {
    evt.preventDefault();
    GET_DISTANCE(userLocation.longitude, userLocation.latitude, 0, 0)
  }

  return (
    <StyledButton onClick={handleClick}>
      /*need to get the user's location */
    </StyledButton>
  )

}

export default CalculateButton;
