import { useState, useEffect } from 'react';
import axios from 'axios';


export function useMovieFav(url) {
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false);
    const [filme, setFilme] = useState({});

    useEffect(() => { 
        const getData = async () => { 
            try { 
                const filmeRes = await axios.get(url);
                setFilme(filmeRes.data);
                console.log("Success:", filmeRes.data);
                setLoading(false); 
            } 
            catch (e) { 
                console.error("Erro ao carregar API", e); 
                setLoading(false); 
                setError(true); 
            } 
        };  
        
        if (url) {
            getData(); 
        }
    }, [url]); // Adicionamos 'url' nas dependências para refazer a requisição caso o link mude

    // É mais útil retornar um objeto contendo os estados para a tela poder exibir o "carregando" ou "erro"
    return [filme,loading,error];
}