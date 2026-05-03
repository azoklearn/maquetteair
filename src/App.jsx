import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import useLenis from './hooks/useLenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Estimation from './pages/Estimation'
import PageTransition from './components/PageTransition'

export default function App() {
  useLenis()
  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/estimation" element={<PageTransition><Estimation /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
