
function themeButton({dark,onToggle}){
    return(
        <button 
            className={`theme-button ${dark? 'active':''}`}
            onClick={onToggle}
        >
         
         <span className="toggle-button">{dark?'🌙':'☀️'} </span>
        </button>
    )
}
export default themeButton;