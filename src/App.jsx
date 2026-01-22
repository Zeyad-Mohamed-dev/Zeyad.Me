import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {

  return (
    <div className='w-full min-h-screens'>
      <Navbar />
      <Hero />
      <Services />
    </div>
  )
}

export default App
