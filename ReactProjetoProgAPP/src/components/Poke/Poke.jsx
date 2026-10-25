import { useEffect, useState } from 'react'
import './Poke.css'
import axios from 'axios'
import { useLink } from '../../hooks/useLink';
function Poke() {



 
  const [pokeChar,loading,error] = useLink("https://pokeapi.co/api/v2/pokemon/768/")
useLink



  if(loading){ return (<div> Carregando </div>)}
  if(error){ return (<div> Ocorreu um erro </div>)} 

  
  return (  
    <>
      <section className='d-flex flex-row justify-content-evenly m-1 card'>
          <img className='img' src={pokeChar.sprites.front_default} alt="" />
          <div className='p-2 d-flex flex-column '>
            <h2>{pokeChar.name}</h2>
            <p>Meu pet</p>
            <p> <strong>Primeiro Tipo: </strong>{pokeChar.types[0].type.name} </p>
            <p> <strong>Segundo Tipo: </strong>
            {pokeChar.types[1] ? pokeChar.types[1].type.name : "Sem segundo Tipo"} </p>
          </div>  
      </section>

    </>
  )
}

export default Poke;
