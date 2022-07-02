import { useState } from 'react'
import './App.css'
import ImageLink from './components/imageLink/ImageLink'
import Logo from './components/logo/Logo'
import Navigation from './components/navigation/Navigation'
import Rank from './components/rank/Rank'
import ParticleBackground from './particleBackground'

function App() {

  const [input, setInput] = useState('')

  const onInputChange = (e) => {
    console.log(e.target.value)
  }

  const onButtonSubmit = () => {
    console.log('click')
  }

  return (
    <div className="App">
      <ParticleBackground />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLink onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
    </div>
  )
}

export default App
