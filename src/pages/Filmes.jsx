import MovieFav from "../components/movieFav";
import MoviesSearch from "../components/MoviesSearch";
import ThemeButton from "../components/themeButton";
import NavigateButton from "../components/NavigateButton";
import { Link } from "react-router-dom";
function Filmes(){
    return(
        <> 
            <MovieFav />
            <MoviesSearch /> 
            <ThemeButton />
            <div>
                <NavigateButton path='/' nome='DargonBall' />
                <br />
                <NavigateButton path='/pokemon' nome='Pokemon' />
            </div>
        </>
    )
}export default Filmes;