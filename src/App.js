import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SingleCountryPage from './pages/SingleCountryPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='country/:id' element={<SingleCountryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
