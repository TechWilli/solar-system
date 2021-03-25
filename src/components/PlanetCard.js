import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: #F5F5F5;
  width: 100%;
  text-align: center;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  position: relative;
  transition: transform 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 8px rgb(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
`

const PlanetCard = ({ children }) => <Card>{children}</Card>

export default PlanetCard
