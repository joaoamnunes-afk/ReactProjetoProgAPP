import { useEffect, useState } from 'react'
import axios from 'axios'
import './dragonBall'
import { useLink } from '../../hooks/useLink'
function App() {

  const [DBchar,error,loading ] = useLink("https://dragonball-api.com/api/characters/5") 


  if(loading){ return (<div> Carregando </div>)}
  if(error){ return (<div> Ocorreu um erro </div>)} 
  return (  
    <>
      <section id="center">
        <div className="hero">
          <img style={{ maxWidth: '100%', 
            height: '279px',
            display: 'block',
            margin:'auto'}} 
            src={DBchar.transformations[3].image} 
            className="base" width="170" height="179" alt="" 
          />
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
