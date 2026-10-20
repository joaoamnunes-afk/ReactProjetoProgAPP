import { useEffect, useState } from 'react'
import './Poke.css'
import axios from 'axios'
function Poke() {

  const [person, setPerson] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false);
  const [DBchar, setDBchar] = useState({}) 
  const [pokeChar, setPokeChar] = useState({})
  const [filme, setFilme] = useState({})


useEffect(() => { 
  const getData = async () => { 
    try { 
    const res = await axios.get( "https://6a79e554674f43f4db11ebc8.mockapi.io/api/person" ); 
    const pokeres = await axios.get("https://pokeapi.co/api/v2/pokemon/768/" )
    setPokeChar(pokeres.data);
    console.log("Success:", res.data); 
    setLoading(false); 
    } 
      catch (e) { 
      console.error( "Erro ao carregar API", e ); 
      setLoading(false); 
      setError(true); 
      } 
      }  
      getData(); 
     }, []);

  if(loading){ return (<div> Carregando </div>)}
  if(error){ return (<div> Ocorreu um erro </div>)} 
  let contador = 1
  setInterval(()=>{
  contador++
  return 
  },500)
  return (  
    <>
      <section className='d-flex justify-content-evenly'>
          <img className='img' src={pokeChar.sprites.front_default} alt="" />
          <div className='p-2'>
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
