import { useEffect, useState } from 'react'
import axios from 'axios'
function Person() {

  const [person, setPerson] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false);


useEffect(() => { 
  const getData = async () => { 
    try { 
    const res = await axios.get( "https://6a79e554674f43f4db11ebc8.mockapi.io/api/person" ); 
    setPerson(res.data); 
   
    console.log("Success:", res.data); 
    setLoading(false); 
    } 
      catch (e) { 
      console.error( "Erro ao carregar API", e ); 
      setLoading(false); 
      setError(true); 
      } 
      }  
      getData(); 
     }, []);

  if(loading){ return (<div> Carregando </div>)}
  if(error){ return (<div> Ocorreu um erro </div>)} 
  let contador = 1
  setInterval(()=>{
  contador++
  return 
  },500)
  return (  
    <>
      <section>

        <div>
            <h1>{person[10].nome} </h1>
        </div>
        
      </section>


    </>
  )
}

export default Person;
