import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='About' element={<About />}></Route>
          <Route path='Portfolio' element={<Portfolio />}></Route>
          <Route path='Contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
