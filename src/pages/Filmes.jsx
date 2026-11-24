import MovieFav from "../components/movieFav";
import MoviesSearch from "../components/MoviesSearch";
import ThemeButton from "../components/themeButton";
import NavigateButton from "../components/NavigateButton";
import { useState } from "react";
import './Filmes.css'
import '../App.css'
import { Link } from "react-router-dom";
function Filmes(){
    const [dark, setDark] = useState(false)
    return(
        <div id='Filmes' className={`${dark ? "Dark" : "Light"} `}> 
            <section className="center card card-Filmes">
                 <MovieFav />
                <div id='MovieSearch'><MoviesSearch /></div>
            </section>
               

            <ThemeButton 
                        dark={dark}
                        onToggle={() =>{setDark(!dark)}}
                    />
            <div>
                <NavigateButton path='/' nome='DargonBall' />
                <br />
                <NavigateButton path='/pokemon' nome='Pokemon' />
            </div>
            
        </div>
    )
}export default Filmes;