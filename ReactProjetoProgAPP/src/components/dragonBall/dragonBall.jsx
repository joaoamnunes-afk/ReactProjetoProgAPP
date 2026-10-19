import { useEffect, useState } from 'react'
import axios from 'axios'
import './dragonBall'
function App() {

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
    const DB = await axios.get("https://dragonball-api.com/api/characters/5")
    setDBchar(DB.data);
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
      <section id="center">
        <div className="hero">
          <img src={DBchar.transformations[3].image} className="base" width="170" height="179" alt="" />
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
