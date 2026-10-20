import { useState } from 'react'
import MoviesSearch from './components/MovieSearch/MoviesSearch.jsx'
import DragonBall from './components/dragonBall/dragonBall.jsx';
import Poke from "./components/Poke/Poke.jsx"
import Person from './components/person/person.jsx';
import ThemeButton from './components/themeButton/themeButton.jsx';
import trasition from "./styles/trasition.module.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
  
function App() {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)
  const theme = dark? 'lighttheme':'darktheme'
  return (
    
      <section className={`d-flex flex-column align-items-center w-100 ${theme} ${trasition.trasitionSlow}`}> 
       <div className=''> 
          <DragonBall />
          <Person />
        </div>

        <div className={`row w-100 justify-content-evenly`}>

          <div className={`col-sm-4`}>
            <MoviesSearch />
          </div> 

          <div className={`col-sm-4`}> 
            <Poke />
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
