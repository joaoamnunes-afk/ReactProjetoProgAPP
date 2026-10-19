import { useState, useEffect } from 'react';

export function useMovies(query, api_key) {
  const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

  useEffect(() => {
  
    if (!query || query.trim() === '') {
      setMovies([])
      setLoading(false)
      setError(null)
      return
    }

    const getData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${api_key}`
        )
        const data = await response.json()
        
        if (data.Response === 'True') {
          setMovies(data.Search)
        } else {
          setMovies([])
        }
      } catch (err) {
        setError('Erro ao buscar Filmes')
        console.error(err)
      } finally {
        setLoading(false)
      }
    };

    
    const delayDebounceFN = setTimeout(() => {
      getData()
    }, 800)

   
    return () => clearTimeout(delayDebounceFN)
  }, [query, api_key])

  return { movies, loading, error }
}