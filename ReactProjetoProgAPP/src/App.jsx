import { useState } from 'react'
import MoviesSearch from './components/MovieSearch/MoviesSearch.jsx'
import DragonBall from './components/dragonBall/dragonBall.jsx';
import Poke from "./components/Poke/Poke.jsx"
import Person from './components/person/person.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';   
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <section className='App d-flex flex-column  justify-content-evenly '> 
       <div className='d-flex flex-column m-auto p-3 shadow'> 
          <DragonBall />
          <Person />
        </div>

        <div className='row justify-content-evenly gap-1 '>

          <div className='col-sm-5 card border'>
            <MoviesSearch />
          </div> 

          <div className='col-sm-5 card border'> 
            <Poke />
          </div> 

        </div>
        <div style={{width:'100%',height:'200px'}}></div>
      </section>


 
  )
}

export default App
