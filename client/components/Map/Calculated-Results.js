import React from 'react'
import styled from 'styled-components'

const ResultsContainer = styled.div`
background: white;
padding: 4em;
`

// const MapContainer = styled.div`
// border-left: 1px solid #fff;
// position: absolute;
// left: 33.3333%;
// width: 66.6666%;
// top: 0;
// bottom: 0;
// `

const Results = ({distance}) => {
  return (
    <ResultsContainer>
      This is how far you are from your nearest accessible MTA station.

      {distance}
    </ResultsContainer>
  )
}

export default Results
