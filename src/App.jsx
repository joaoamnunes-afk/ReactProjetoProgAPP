import { useState } from 'react'
import MoviesSearch from './components/MovieSearch/MoviesSearch.jsx'
import DragonBall from './components/dragonBall/dragonBall.jsx';
import Poke from "./components/Poke/Poke.jsx"
import Person from './components/person/person.jsx';
import ThemeButton from './components/themeButton/themeButton.jsx';
import  MovieFav  from './components/movieFav/movieFav.jsx';
import PokeRandom from './components/PokeRandom/PokeRandom.jsx';
import trasition from "./styles/trasition.module.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
  
function App() {
  const [dark, setDark] = useState(false)
  const theme = dark? 'lighttheme':'darktheme'
  return (
    
      <section className={`d-flex flex-column align-items-center w-100 ${theme} ${trasition.trasitionSlow}`}> 
      <div style={{position:'absolute',left:'0px'}}>  <ThemeButton className={`${trasition.trasitionSlow}`} dark={dark}
              onToggle={()=> setDark(!dark)}
          /> </div>
       <div className='d-flex flex-row p-2'style={{marginTop:'50PX'}}> 
        <div className='align-self-center m-5'> <DragonBall />
          <Person />
        </div>
          <MovieFav />
        </div>

        <div className={`row w-100 justify-content-evenly p-2`}>

          <div className={`col-md-5  col-sm-12`}>
            <MoviesSearch />
          </div> 

          <div className={`col-md-5 col-sm-12 h-100`}> 
            <Poke />
          </div> 
          
          <div className={`col-md-5 col-sm-12 `}><PokeRandom /></div>
        </div>
        
          
        <div style={{width:'100%',height:'200px'}}></div>

      </section>
      

 
  )
}

export default App
