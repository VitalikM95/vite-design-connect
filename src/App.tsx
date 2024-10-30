import { useState } from 'react'
import { Header, Hero } from './components'

function App() {
  // const [modalActive, setModalActive] = useState(false)
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        {/* <About /> */}
      </div>
      {/* <Join /> */}
      {/* <div className='container'>
        <Opportunities />
        <Features />
      </div>
      <Ticker setActive={setModalActive} />
      <Reviews />
      <Questions />
      <Footer /> */}
      {/* <Modal active={modalActive} setActive={setModalActive} /> */}
    </>
  )
}

export default App
