import { useState, useEffect } from 'react';
import axios from 'axios';

export function useLink(url) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [link, setLink] = useState({})

    useEffect(() => { 
        
         if (!url || typeof(url) != typeof('String') ) {
            setLoading(false)
            setError(true)
            console.error('URL inválida')
            return
        }

        const getData = async () => { 
            setLoading(true) 
            setError(false) 

            try { 
                const linkRes = await axios.get(url)
                setLink(linkRes.data)
                console.log("Success:", linkRes.data)
            } 
            catch (e) { 
                console.error("Erro ao carregar API", e) 
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        
        getData();
    }, [url])
    
    return [link, loading, error];
}