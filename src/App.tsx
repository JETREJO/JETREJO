import './App.css'
import About from './components/about/about'
import Certifications from './components/certifications/certifications'
import Experience from './components/experience/experience'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Stack from './components/technologies/stack'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Stack/>
      <Certifications/>
    </>
  )
}

export default App
