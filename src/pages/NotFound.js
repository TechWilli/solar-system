import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NotFoundImage from '../images/404_not_found.jpg'

const SpaceBackground = styled.div`
  background: url(${NotFoundImage}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const OpacityContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleNotFound = styled.span`
  color: white;
  font-size: 4rem;
  font-weight: bolder;
  text-transform: uppercase;
  display: block;
  width: 50%;
  text-align: center;

  @media (max-width: 860px) {
    font-size: 3rem;
    width: 80%;
  }

  @media (max-width: 860px) {
    font-size: 2rem;
    /* width: 80%; */
  }
`

const GoBackToHome = styled.button`
  background: linear-gradient(to right, rgba(9, 9, 100, 1) 0%, rgba(68, 0, 138, 1) 43%, rgba(68, 0, 138, 1) 100%);
  width: 20rem;
  height: 6rem;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: 2px solid white;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: box-shadow 300ms;
  
  &:hover {
    box-shadow: 0 0 0 5px rgb(255, 255, 255, 0.7);
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 5px;
    background: linear-gradient(to right, rgba(9, 9, 100, 1) 0%, rgba(9, 9, 121, 1) 43%, rgba(68, 0, 138, 1) 100%);
    opacity: 0;
    transition: opacity 400ms;
  }

  &:hover::before {
    opacity: 1;
  }
`

const NotFound = () => {
  return (
    <SpaceBackground>
      <OpacityContainer>
        <TitleNotFound style={{ fontSize: '10rem' }}>404</TitleNotFound>
        <TitleNotFound>ops... parece que você foi para outra galáxia</TitleNotFound>
        <Link to='/'>
          <GoBackToHome type="button">VOLTAR PARA A VIA LÁCTEA</GoBackToHome>
        </Link>
      </OpacityContainer>
    </SpaceBackground>
  )
}

export default NotFound
