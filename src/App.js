import React,{useEffect,useState} from 'react';
import axios from 'axios'

function Frase({frase}){
  return(
    <div className='frase'>
     <h1>{frase.quote}</h1>
     <p>{frase.author}</p>
    </div>
  )
}

function App() {

  let [frase,obtenerFrase]=useState({})


  let consultarAPI = async()=>{
    let resultado = await axios("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    // console.log(resultado.data[0])
    //agregar el resultado de la API al state (similar a this.setState)
    obtenerFrase(resultado.data[0])

  }

  //consulta a una rest API
  useEffect(
    ()=>{
      consultarAPI()
    },[]
  )

  
  return (
    <div className='contenedor'>
      <Frase
      frase={frase}
      />
      <button
     onClick={consultarAPI}
     >
       Generar nueva
    </button>
    </div>
  );
}

export default App;
