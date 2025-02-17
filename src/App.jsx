import './App.css'
import HeroSection from './components/Hero'
import AboutMe from './components/AboutMe'
import Timeline from './components/Timeline'
import Background from './components/Background'
import Projects from './components/Projects'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Background/>
      <HeroSection/>
      <AboutMe/>
      <Timeline/>
      <Projects/>
      <Footer/>
      <Background />
    </>
  )
}

export default App
