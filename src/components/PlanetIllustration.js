import React from 'react'
import styled from 'styled-components'

const PlanetStyled = styled.img`
  width: ${props => props.width && props.width}rem;
  height: 10em;
`

const PlanetIllustration = ({ src, alt, width }) => {

  return (
    <PlanetStyled
      src={src}
      alt={alt}
      width={width}
    />
  )
}
export default PlanetIllustration
