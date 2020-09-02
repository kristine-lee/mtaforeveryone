import React, {useState} from 'react'
import styled from 'styled-components'

//I'm guessing this is going to be like a container?

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  `;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Homepage = () => {
  const [loadState, setLoadState] = useState(false)

  return (
      <Wrapper>
        <Title>
          The Subway Is Every New Yorker's Right
        </Title>
      </Wrapper>
  )
}

export default Homepage
