import React from 'react'
import styled from 'styled-components'

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.5rem;
  width: 100%;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(0, 0, 0, 0.3);
    margin-bottom: 1rem;
  }
`

const PlanetTitle = ({ children }) => {

  return (
    <Title>{children}</Title>
  )
}

export default PlanetTitle