import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlanetsList from './pages/PlanetsList'
import PlanetDetail from './pages/PlanetDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<PlanetsList />} />
          <Route path='/planets/:id' element={<PlanetDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
