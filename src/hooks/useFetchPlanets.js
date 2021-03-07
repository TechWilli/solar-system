import { useEffect, useState } from 'react'

const useFetchPlanets = (endPoint) => {
  const [data, setData] = useState([])

  useEffect(() => {

    fetch(`https://api-solar-system.herokuapp.com/${endPoint}`)
      .then(result => result.json())
      .then(json => {

        console.log('data fetched successfully')
        setData(json)
        // console.log('json', json)
      })
      .catch(error => {

        console.log('error', error)
      })
  }, [endPoint])

  return data
}

export default useFetchPlanets