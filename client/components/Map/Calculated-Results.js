import React from 'react'
import styled from 'styled-components'

const ResultsContainer = styled.div`
background: white;
padding: 4em;
`

const CalculateButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 0;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
// const MapContainer = styled.div`
// border-left: 1px solid #fff;
// position: absolute;
// left: 33.3333%;
// width: 66.6666%;
// top: 0;
// bottom: 0;
// `

const Results = () => {
  return (
    <ResultsContainer>
      Click Here:
    <CalculateButton>Find the nearest accessible MTA stop</CalculateButton>
    </ResultsContainer>
  )
}

export default Results
