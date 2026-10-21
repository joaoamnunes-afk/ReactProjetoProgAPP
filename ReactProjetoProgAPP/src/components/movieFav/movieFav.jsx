import { useEffect, useState } from 'react'


import axios from 'axios'
import {useMovieFav}  from "../../hooks/useMovieFav.js"
function movieFav() {



  const [filme,loading, error] = useMovieFav("https://www.omdbapi.com/?i=tt0363988&apikey=ee22997f")



  if(loading){ return (<div> Carregando </div>)}
  if(error){ return (<div> Ocorreu um erro </div>)} 
  return (  
    <>
      <div>

      
          <img src={filme.Poster} alt="" />
          <h2>{filme.Title}</h2>
          <p>Meu filme favorito</p>
          <p>{filme.Ratings[0].Source}: {filme.Ratings[0].Value}</p>
          
    </div>
      
    </>
  )
}

export default movieFav
