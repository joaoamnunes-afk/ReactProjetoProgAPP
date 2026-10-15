import { useState, useEffect } from "react";
import './MoviesSearch.css'
function MoviesSearch (){
    const api_key = 'ee22997f'
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(false)
    const [query,setQuery] = useState('')
    useEffect(() =>{
        const getData = async () =>{
                setLoading(true)
                try{
                    const response = await
                    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${api_key}`)
                    const data = await response.json()
                    if(data.Response === 'True'){
                        setMovies(data.Search)
                    }else{
                        setMovies([])
                    }
                }catch(err){
                    console.loading('Erro ao buscar Filmes')
                }
                finally{
                    setLoading(false)
                }               
        }
        const delayDebounceFN = setTimeout(() =>{
            if(query.trim() !== ''){
                getData()
            }else{
                setMovies([])
            }
        },800)
        return () => clearTimeout(delayDebounceFN)
    },[query])
    return(
        <div  className=''>
            <h2> Nivel Médio: Consumo de API <br />OMDB com Debounce</h2>
            <p>Busca filmes assim que você para de digitar.</p>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busque Filmes"
            />
            {!loading && movies.length > 0 &&(
                <ul>
                    {movies.map((movie) => (
                        <li className="card-movie" key={movie.imdbID}>
                            <strong>{movie.Title}</strong>({movie.Year})
                        </li>
                    ))}
                </ul>
            )}
            {!loading && movies.length === 0 && (
                <p> Nenhum filme encontrado</p>
            )}
        </div>
    )
}

export default MoviesSearch