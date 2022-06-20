import './App.css'
import ImageLink from './components/imageLink/ImageLink'
import Logo from './components/logo/Logo'
import Navigation from './components/navigation/Navigation'
import Rank from './components/rank/Rank'
import ParticleBackground from './particleBackground'

function App() {

  return (
    <div className="App">
      <ParticleBackground />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLink />
    </div>
  )
}

export default App
