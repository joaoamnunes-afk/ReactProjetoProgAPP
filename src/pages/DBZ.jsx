import DragonBall from '../components/dragonBall.jsx'
import NavigateButton from '../components/NavigateButton.jsx';
import Person from '../components/Person.jsx'
import ThemeButton from '../components/themeButton.jsx'
import { Link } from "react-router-dom";
function DBZ(){
    return(
        <>
           <DragonBall />
           <Person />
           <ThemeButton />
           <div>
                <NavigateButton path='/pokemon' nome='Pokemon' />
                <br />
                <NavigateButton path='/filmes' nome='FILMES' />
            </div>
        </>
    )
}
export default DBZ;