
import NavigateButton from "../components/NavigateButton";
import Poke from "../components/Poke";
import PokeRandom from "../components/PokeRandom";
import ThemeButton from "../components/themeButton";
import { useState } from "react";
import "./Pokemon.css";
import '../App.css'
function Pokemon() {

    const [dark, setDark] = useState(false)

    function SetarDark() {
        setDark(!dark)
    }

    return (
      <div className={`${dark ? "Dark" : "Light"} `}>
        <section className="center"> <Poke />

            <PokeRandom />

            <ThemeButton
                dark={dark}
                onToggle={SetarDark}
            />

            <div>
                <NavigateButton path="/" nome="DragonBall" />
                <br />
                <NavigateButton path="/filmes" nome="FILMES" />
            </div>
        </section>
        <br /><br />
           <footer>
            <p className="center">Hi im the page's Footer</p>
           </footer>

        </div>
    )
}

export default Pokemon;
