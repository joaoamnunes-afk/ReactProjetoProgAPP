import MovieFav from "../components/MovieFav/MovieFav";
import MoviesSearch from "../components/MovieSearch/MoviesSearch";
import ThemeButton from "../components/themeButton/themeButton";
import NavigateButton from "../components/navigateButton/NavigateButton";
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