import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListPlanets from './pages/ListPlanets'
import PlanetDetail from './pages/PlanetDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ListPlanets />} />
          <Route path='/planets/:id' element={<PlanetDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
