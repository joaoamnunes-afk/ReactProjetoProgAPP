import { useState } from "react";
import { useLink } from "../../hooks/useLink";


const gerarNumeroAleatorio = () => Math.floor(Math.random() * 1024) + 1;

function PokeRandom() {
   
    const [randomPoke, setRandomPoke] = useState(gerarNumeroAleatorio);

   
    const [poke, loading, error] = useLink(`https://pokeapi.co/api/v2/pokemon/${randomPoke}/`);

    if (error) {
        return <div>Ocorreu um erro</div>;
    }

    if (loading) {
        return <div>Carregando...</div>; 
    }

    return (
        <div className="card p-2 bg-dark m-1" style={{background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}>
           
            <button style={{backgroundColor:'white',borderRadius:'5px',height:'30px'}} onClick={() => setRandomPoke(gerarNumeroAleatorio())}>
               Gere Um Pokemon Aleatório
            </button>
            
            
            <p className="text-white">{poke.name}</p>
            <img src={poke.sprites.front_default} alt="" />
        </div>
    );
}

export default PokeRandom;