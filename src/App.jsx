import './App.css'
import { First } from './Components/First/First'
import { Header } from './Components/Header/Header'
// import { Slide } from './Components/Slide/Slide'
// import { Middle } from './Components/Middle/Middle'
// import { After } from './Components/After/After'
// import { End } from './Components/End/End'

// SWEET SCROLL
import Lenis from 'lenis'

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function App() {

  return (
    <>
      <Header />
      <First />
      {/* <Slide />
      <Middle />
      <After />
      <End /> */}
    </>
  )
}

export default App
