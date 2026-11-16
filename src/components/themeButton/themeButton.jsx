import { useEffect } from "react";
import  "./themeButton"
function themeButton({dark,onToggle}){
    return(
        <button
            className="theme-button"
            onClick={onToggle}
        >
         {dark? 'tema claro':'tema escuro'}
        </button>
    )
}
export default themeButton;