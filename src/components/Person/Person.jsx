import { useLink } from '../../hooks/useLink'
function Person() {



const [person,error,loading]=  useLink("https://6a79e554674f43f4db11ebc8.mockapi.io/api/person")


  if(loading){ return (<div> Carregando </div>)}
  if(error){ return (<div> Ocorreu um erro </div>)} 
  return (  
    <>
      <section>

        <div>
            <h1 style={{textAlign: 'center'}}>{person[10].nome} </h1>
        </div>
        
      </section>


    </>
  )
}

export default Person;
