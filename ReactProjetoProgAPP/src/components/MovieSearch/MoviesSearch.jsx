import { useState, useEffect } from "react";
import { useMovies } from "../../hooks/useMovies";
import './MoviesSearch.css'
function MoviesSearch (){
 
    const [query, setQuery] = useState('');
    const API_KEY = 'ee22997f';

  
  const { movies, loading, error } = useMovies(query, API_KEY);
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