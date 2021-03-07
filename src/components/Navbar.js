import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: rgb(255, 255, 255, 0.2);
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    text-transform: uppercase;
  }
`

const Navbar = () => {

  return (
    <NavbarContainer>
      <h1>Sistema Solar</h1>
    </NavbarContainer>
  )
}

export default Navbar