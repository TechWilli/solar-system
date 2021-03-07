import React from 'react'
import styled from 'styled-components'

const PlanetStyled = styled.img`
  width: 100%;
  height: 100%;
`

const PlanetIllustration = ({ src, alt}) => {

  return (
    <PlanetStyled
      src={src}
      alt={alt}
    />
  )
}
export default PlanetIllustration
