import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  padding: 4em;
  background: pink;
  position: relative;
  `;

const Text = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const ActionButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 0;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  position: absolute;
  top: 70%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

`
const TakeAction = () => {
  return (
    <Wrapper>
      <Text>Only 22% of MTA stations are accessible.</Text>
      <ActionButton>Demand Action Now</ActionButton>
    </Wrapper>
  )
}

export default TakeAction
