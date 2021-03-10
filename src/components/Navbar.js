import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const NavbarContainer = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: rgb(255, 255, 255, 0.2);
  /* background-color: rgb(0, 0, 0, 0.4); */
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    color: white;
    font-size: 2rem;
    text-transform: uppercase;
    /* background: -webkit-linear-gradient(-70deg, #a2facf, #64acff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
`

const GoBackArrow = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
  position: absolute;
  top: 30px;
  left: 30px;

  &:hover {
    cursor: pointer;
  }
`

const Navbar = () => {

  const location = useLocation()

  useEffect(() => {
    console.log('location', location)

  }, [location])

  return (
    <NavbarContainer>
      {location.pathname !== '/' && <Link to='/'>
        <GoBackArrow />
      </Link>}
      <h1>Sistema Solar</h1>
    </NavbarContainer>
  )
}

export default Navbar