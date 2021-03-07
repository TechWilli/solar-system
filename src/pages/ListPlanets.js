import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PlanetCard from '../components/PlanetCard'
import PlanetTitle from '../components/PlanetTitle'
import useFetchPlanets from '../hooks/useFetchPlanets'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin: 3rem auto 0;
  max-width: 90vw;

  @media (max-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1025px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 805px) {
    display: block;
  }
`

const PlanetSvg = styled.img`
  width: ${props => props.width && props.width}rem;
  height: 10em;
`

const TitleContainer = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255, 0.2);
  text-align: center;
  padding: 2.5rem 1rem;

  h1 {
    color: white;
  text-transform: uppercase;
  }
`

const LinkToDetails = styled(Link)`
  text-decoration: none;
  color: #333333;
`

const ListPlanets = () => {

  const [planetsData, setPlanetsData] = useState([])
  const data = useFetchPlanets('planets')

  useEffect(() => {

    setPlanetsData(data)
    console.log('planetsData', planetsData)

  }, [planetsData, data])

  return (
    <>
      <TitleContainer>
        <h1>Sistema Solar</h1>
      </TitleContainer>
      <Container>
        {
          planetsData && planetsData.map((planet, index) => {
            return (
              <LinkToDetails
                to={`planets/${planet.id}`}
                key={index}
              >
                <PlanetCard>
                  <PlanetSvg
                    src={planet.image}
                    alt="planet svg illustration"
                    width={planet.name === 'Saturno' ? 15 : 10}
                  />
                  <PlanetTitle>{/* {!!Number(planet.id) && `${planet.id}º - `} */}{planet.name}</PlanetTitle>
                </PlanetCard>
              </LinkToDetails>
            )
          })
        }
      </Container>
    </>
  )
}

export default ListPlanets