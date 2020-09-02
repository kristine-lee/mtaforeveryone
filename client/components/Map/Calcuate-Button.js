import React from 'react'
import styled from 'styled-components'

const styledButton = styled.button`
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

const CalculateButton = () => {

  const handleClick = (evt) => {
    evt.preventDefault();
  }

  return (
    <styledButton>

    </styledButton>
  )

}
