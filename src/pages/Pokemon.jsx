import NavigateButton from "../components/navigateButton/NavigateButton";
import Poke from "../components/Poke/Poke";
import PokeRandom from "../components/PokeRandom/PokeRandom";
import ThemeButton from "../components/themeButton/themeButton";
import { Link } from "react-router-dom";
function Pokemon(){
    return(
    <>  
        <Poke />
        <PokeRandom />
        <ThemeButton />
        <div>
            <NavigateButton path='/' nome='DargonBall' />
            <br />
            <NavigateButton path='/filmes' nome='FILMES' />
        </div>
       
    </>
    )
}
export default Pokemon;