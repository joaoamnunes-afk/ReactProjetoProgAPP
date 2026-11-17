import DragonBall from '../components/DragonBall/DragonBall.jsx'
import NavigateButton from '../components/navigateButton/NavigateButton.jsx';
import Person from '../components/Person/Person.jsx'
import themeButton from '../components/themeButton/themeButton.jsx'
import { Link } from "react-router-dom";
function DBZ(){
    return(
        <>
           <DragonBall />
           <Person />
           <themeButton />
           <div>
                <NavigateButton path='/pokemon' nome='Pokemon' />
                <br />
                <NavigateButton path='/filmes' nome='FILMES' />
            </div>
        </>
    )
}
export default DBZ;