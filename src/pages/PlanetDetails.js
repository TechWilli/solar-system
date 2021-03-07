import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useFetchPlanets from '../hooks/useFetchPlanets'

const PlanetDetail = () => {

  const routeParams = useParams()
  const data = useFetchPlanets(`planet/${routeParams.id}`)
  const [planetInfo, setPlanetInfo] = useState({})

  // console.log('routeParams', routeParams)

  useEffect(() => {
    setPlanetInfo(data)
    console.log('planet info', planetInfo)    

  }, [planetInfo, data])

  return (
    <div>
      <h1 style={{ color: 'white' }}>infos do planeta aqui</h1>
    </div>
  )
}

export default PlanetDetail