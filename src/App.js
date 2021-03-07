import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListPlanets from './pages/ListPlanets'
import PlanetDetail from './pages/PlanetDetails'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ListPlanets />} />
          <Route path='/planets/:id' element={<PlanetDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
