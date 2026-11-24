import { useState } from "react";
import { useLink } from "../hooks/useLink";


const gerarNumeroAleatorio = () => Math.floor(Math.random() * 1024) + 1;

function PokeRandom() {
   
    const [randomPoke, setRandomPoke] = useState(1);

   
    const [poke, loading, error] = useLink(`https://pokeapi.co/api/v2/pokemon/${randomPoke}/`);

    if (error) {
        return <div>Ocorreu um erro</div>;
    }

    if (loading) {
        return <div>Carregando...</div>; 
    }

    return (
        <div  >
           
            <button onClick={() => setRandomPoke(gerarNumeroAleatorio())}>
               Gere Um Pokemon Aleatório
            </button>
            
            
            <p >{poke.name}</p>
            <img src={poke.sprites.front_default} alt="" />
        </div>
    );
}

export default PokeRandom;