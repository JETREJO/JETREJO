import './App.css'
import About from './components/about/about'
import Certifications from './components/certifications/certifications'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
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
      <Contact/>
      <Footer />
    </>
  )
}

export default App
