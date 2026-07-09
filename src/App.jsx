import { lazy, Suspense } from 'react'
import './App.css'
import HeroSection from './components/Hero'
import Background from './components/Background'

const AboutMe = lazy(() => import('./components/AboutMe'))
const Timeline = lazy(() => import('./components/Timeline'))
const Projects = lazy(() => import('./components/Projects'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <>
      <Background/>
      <HeroSection/>
      <Suspense>
        <AboutMe/>
        <Timeline/>
        <Projects/>
        <Footer/>
      </Suspense>
    </>
  )
}

export default App
