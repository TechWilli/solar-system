import React, { useEffect, useState, Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import PlanetCard from '../components/PlanetCard'
import PlanetTitle from '../components/PlanetTitle'
import useFetchPlanets from '../hooks/useFetchPlanets'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const PlanetIllustration = lazy(() => import('../components/PlanetIllustration'))
const PlanetCard = lazy(() => import('../components/PlanetCard'))

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin: 3rem auto;
  max-width: 90vw;

  @media (max-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1025px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 805px) {
    grid-template-columns: 1fr;
  }
`

const Wrapper = styled.div`

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
    <Wrapper>
      <Container>
        {
          planetsData && planetsData.map((planet, index) => {
            return (
              <LinkToDetails
                to={`planets/${planet.id}`}
                key={index}
              >
                <Suspense fallback={<SkeletonTheme color="#dbdbdb" highlightColor="#ededed"><Skeleton width={320} height={287} /></SkeletonTheme>}>
                  <PlanetCard>
                    <Suspense fallback={<SkeletonTheme color="#dbdbdb" highlightColor="#ededed"><Skeleton circle={true} width="10rem" height="10rem" /></SkeletonTheme>}>
                      <PlanetIllustration
                        src={planet.image}
                        alt="planet svg illustration"
                        width={planet.name === 'Saturno' ? 15 : 10}
                      />
                    </Suspense>
                    <PlanetTitle>{planet.name}</PlanetTitle>
                  </PlanetCard>
                </Suspense>
              </LinkToDetails>
            )
          })
        }
      </Container>
    </Wrapper>
  )
}

export default ListPlanets