import DragonBall from '../components/dragonBall.jsx'
import NavigateButton from '../components/NavigateButton.jsx';
import Person from '../components/Person.jsx'
import ThemeButton from '../components/themeButton.jsx'
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css'
import './DBZ.css'
function DBZ(){
    const [dark, setDark] = useState(false)
    return(
        <div id='DBZ' className={`${dark ? "Dark" : "Light"} `}>

            <div id='dbz-Char' className='center card '> 
                <DragonBall />
                <Person />
            </div>
           <ThemeButton 
                dark={dark}
                onToggle={() =>{setDark(!dark)}}/>
           <div>
                <NavigateButton path='/pokemon' nome='Pokemon' />
                <br />
                <NavigateButton path='/filmes' nome='FILMES' />
            </div>
        </div>
    )
}
export default DBZ;