import React, { memo } from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
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

  span {
    color: white;
    font-size: 1.2rem;
  }
`

const LinkToGithub = styled.a`
  text-decoration: underline;
  font-weight: bold;
  color: #fcdf00;

  & :visited {
    color: #fcdf00;
  }
`

const Footer = memo(() => {

  return (
    <FooterContainer>
      <span>Diretamente da Via Láctea feito por <LinkToGithub href='https://github.com/TechWilli' target="_blank">William Araujo</LinkToGithub></span>
    </FooterContainer>
  )
})

export default Footer