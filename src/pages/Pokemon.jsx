
import NavigateButton from "../components/NavigateButton";
import Poke from "../components/Poke";
import PokeRandom from "../components/PokeRandom";
import ThemeButton from "../components/themeButton";
import { useState } from "react";
import "./Pokemon.css";
import '../App.css'
function Pokemon() {

    const [dark, setDark] = useState(false)
    //dark theme, from App.css.
   
    return (
      <div id="Pokemon" className={`${dark ? "Dark" : "Light"} `}>
            <nav className="Links"> 
                
    
                    <NavigateButton path="/" nome="DragonBall" />
                    <br />
                    <NavigateButton path="/filmes" nome="FILMES" />
            </nav>

            <section className="center"> 
                <div className="card-Pokemon card">    
                    <Poke />

                    <PokeRandom />
                    
                </div>
            </section>
            <aside className="aside"><ThemeButton 
                        dark={dark}
                        onToggle={() =>{setDark(!dark)}}
                    /></aside>
            <footer className="">
                
            </footer>
     </div>
    )
}

export default Pokemon;
