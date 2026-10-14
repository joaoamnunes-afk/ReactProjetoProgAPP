import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
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
    const pokeres = await axios.get("https://pokeapi.co/api/v2/pokemon/" + 16)
    const filmeRes = await axios.get("https://www.omdbapi.com/?i=tt0363988&apikey=ee22997f")
    setFilme(filmeRes.data)
    setPerson(res.data); 
    setDBchar(DB.data);
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
  return con
  },500)
  return (  
    <>
      <section id="center">
        <div className="hero">
          <img src={DBchar.transformations[3].image} className="base" width="170" height="179" alt="" />
        </div>
        <div>
			<h1>{DBchar.name} </h1>
			<h1> KI:{ DBchar.ki}</h1>
			<h1>Maximo de ki: { DBchar.maxKi}</h1>
			<h1 style={{lineHeight: "50px"}}>Descricion: { DBchar.description}</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <img src={pokeChar.sprites.front_default} alt="" />
          <h2>{pokeChar.name}</h2>
          <p>Meu pet</p>
          <p> {pokeChar.types[1].type.name} </p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <img src={filme.Poster} alt="" />
          <h2>{filme.Title}</h2>
          <p>Meu filme favorito</p>
          <p>{filme.Ratings[0].Source}: {filme.Ratings[0].Value}</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
