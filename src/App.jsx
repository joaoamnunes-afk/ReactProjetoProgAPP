import { useState } from 'react'
import MoviesSearch from './components/MovieSearch/MoviesSearch.jsx'
import DragonBall from './components/dragonBall/dragonBall.jsx';
import Poke from "./components/Poke/Poke.jsx"
import Person from './components/Person/Person.jsx';
import ThemeButton from './components/themeButton/themeButton.jsx';
import  MovieFav  from './components/movieFav/movieFav.jsx';
import trasition from "./styles/trasition.module.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
  
function App() {
  const [dark, setDark] = useState(false)
  const theme = dark? 'lighttheme':'darktheme'
  return (
    
      <section className={`d-flex flex-column align-items-center w-100 ${theme} ${trasition.trasitionSlow}`}> 
       <div className=''> 
          <DragonBall />
          <Person />
          <MovieFav />
        </div>
        <div className={'container'}>
          <div className={`row`}>
  
            <div className={`col-sm-6`}>
              <MoviesSearch />
            </div> 
  
            <div className={`col-sm-6`} > 
              <Poke />
            </div> 
        </div>
        </div>
        <div style={{width:'100%',height:'200px'}}></div>

          <ThemeButton className={`${trasition.trasitionSlow}`} dark={dark}
              onToggle={()=> setDark(!dark)}
          />

      </section>
      

 
  )
}

export default App
