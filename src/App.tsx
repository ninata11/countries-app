
import './App.css'
import Header from './components/header/Header'
import Card from './components/hero/card/view/Card'
import Hero from './components/hero/hero-section/Hero'



const App = () => {
  

  return (
    <>
    <div className='container'>
      <Header />
      <Hero />
      <Card/>
      </div>
    </>
  )
}

export default App
