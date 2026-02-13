import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import ContactSummary from './components/ContactSummary'
import Contact from './components/Contact'

function App() {

  return (
    <div className='w-full min-h-screens'>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <ContactSummary />
      <Contact />
    </div>
  )
}

export default App
