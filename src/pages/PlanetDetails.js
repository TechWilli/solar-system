import React, { useEffect, useState, Suspense, lazy } from 'react'
import styled from 'styled-components'
import { useParams, useLocation, Link } from 'react-router-dom'
import useFetchPlanets from '../hooks/useFetchPlanets'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const PlanetIllustration = lazy(() => import('../components/PlanetIllustration'))

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoContainer = styled.div`
  background-color: #F5F5F5;
  box-shadow: 3px 3px 8px rgb(0, 0, 0, 0.3);
  padding: 2rem;
  border-radius: 4px;
  width: 70%;
  height: auto;
  margin: 2rem 0;
  position: relative;

  @media (max-width: 1600px) {
    width: 95%;
  }
`

const Title = styled.span`
  font-size: 3rem;
  font-weight: bold;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(0, 0, 0, 0.3);
    margin-top: 1rem;
  }
`

const FlexContainer = styled.div`
  display: flex;
  height: 92%;

  @media (max-width: 885px) {
    display: block;
  }
`

const PlanetContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */

  @media (max-width: 885px) {
    width: 100%;
    /* margin-top: 2rem; */
  }
`

const PlanetInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: purple; */

  @media (max-width: 885px) {
    width: 100%;
  }
`

const Separator = styled.hr`
  border-left: 1px solid rgb(0, 0, 0, 0.3);
  margin: 2rem;

  @media (max-width: 885px) {
    margin: 0;
  }
`

const Text = styled.span`
  display: block;
  font-size: 1.5rem;
  line-height: 1.5;

  @media (max-width: 1150px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`

const SvgWrapper = styled.div`
  width: ${props => props.width && props.width}rem;
  height: ${props => props.height && props.height}rem;
  margin: 2rem 0;

  @media (max-width: 1150px) {
    width: ${props => props.mediaWidth && props.mediaWidth}rem;
    height: ${props => props.mediaHeight && props.mediaHeight}rem;
  }
`

const GoBackArrow = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(45deg);
  margin-right: 1rem;
  position: absolute;
  left: -40px;
  top: 245px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1600px) {
    width: 1.5rem;
    height: 1.5rem;
    border-left: 3px solid black;
    border-bottom: 3px solid black;
    left: 20px;
    top: 45px;
  }
`

const GoForwardArrow = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-right: 3px solid white;
  border-top: 3px solid white;
  transform: rotate(45deg);
  margin-left: 1rem;
  position: absolute;
  right: -40px;
  top: 245px;
  
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1600px) {
    width: 1.5rem;
    height: 1.5rem;
    border-right: 3px solid black;
    border-top: 3px solid black;
    right: 20px;
    top: 45px;
  }
`

const PlanetDetail = () => {

  const routeParams = useParams()
  const location = useLocation()
  const data = useFetchPlanets(`planet/${routeParams.id}`)
  const [planetInfo, setPlanetInfo] = useState({})

  useEffect(() => {
    setPlanetInfo(data)
    console.log('planet info', planetInfo)

  }, [planetInfo, data])

  return (
    <Wrapper>
      <InfoContainer>
        {location.pathname !== '/planets/0' && <Link to={`/planets/${Number(routeParams.id) - 1}`}>
          <GoBackArrow />
        </Link>}
        <div style={{ textAlign: 'center' }}>
          <Title>{planetInfo.name}</Title>
        </div>
        <FlexContainer>
          <PlanetContainer>
            <SvgWrapper
              width={planetInfo.name === 'Saturno' ? 30 : 20}
              height={20}
              mediaWidth={planetInfo.name === 'Saturno' ? 22 : 15}
              mediaHeight={15}
            >
              <Suspense fallback={<SkeletonTheme color="#dbdbdb" highlightColor="#ededed"><Skeleton circle={true} width="20rem" height="20rem" /></SkeletonTheme>}>
                <PlanetIllustration
                  src={planetInfo.image}
                  alt="planet svg illustration"
                />
              </Suspense>
            </SvgWrapper>
          </PlanetContainer>
          <Separator />
          <PlanetInfo>
            <div>
              {
                (planetInfo && planetInfo.features) && <>
                  <Text><strong>Diâmetro:</strong> {planetInfo.features.Diameter ? planetInfo.features.Diameter : '-'}</Text>
                  {planetInfo.name !== "Sol" && <Text><strong>Distância do Sol:</strong> {planetInfo.features.sunDistance ? planetInfo.features.sunDistance : '-'}</Text>}
                  {planetInfo.name !== "Sol" && <Text><strong>Tempo para orbitar o Sol:</strong> {planetInfo.features.orbitalPeriod[0] ? planetInfo.features.orbitalPeriod[0] : '-'}</Text>}
                  {planetInfo.name !== "Sol" && <Text><strong>Velocidade da orbita:</strong> {planetInfo.features.orbitalSpeed ? planetInfo.features.orbitalSpeed : '-'}</Text>}
                  <Text><strong>Tempo de rotação:</strong> {planetInfo.features.rotationDuration ? planetInfo.features.rotationDuration : '-'}</Text>
                  <Text><strong>Temperatura:</strong> {planetInfo.features.temperature ? planetInfo.features.temperature : '-'}</Text>
                </>
              }
            </div>
          </PlanetInfo>
        </FlexContainer>
        {location.pathname !== '/planets/9' && <Link to={`/planets/${Number(routeParams.id) + 1}`}>
          <GoForwardArrow />
        </Link>}
      </InfoContainer>
    </Wrapper>
  )
}

export default PlanetDetail