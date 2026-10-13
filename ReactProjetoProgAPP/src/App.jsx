import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import MoviesSearch from './components/MoviesSearch'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';   
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='movie'>
        <div className='row movie  '>
          <MoviesSearch />
          <div className='col-sm-5 card border'><p>TESTE</p></div>
        </div>  
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
