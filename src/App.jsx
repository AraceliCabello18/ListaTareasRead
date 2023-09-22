import { Header } from "./components/header/Header";
import {Fooder} from "./components/Fooder/Fooder";
import { FormularioTareas } from "./components/FormularioTareas/FormularioTareas";
import { CardTarea } from "./components/CardTarea/CardTarea";
import { useEffect, useReducer, useState } from "react";
import { tareaReducer } from "./reducers/tareaReducer";

export const App = () => {
  const init=()=>{
    return JSON.parse(localStorage.getItem("tarea")) || []
}

const [state,dispatch] = useReducer(tareaReducer, [], init);

const [descripcion, setDescripcion] = useState("");

useEffect(()=>{
  localStorage.setItem("tarea", JSON.stringify(state))
}, [state])

const handleInputChange = (evento) =>{
  setDescripcion(evento.target.value)
  console.log(descripcion)
}
const handleSubmit = (evento) =>{
  evento.preventDefault();
  console.log(evento);
  
  const tareaNueva ={
    id: new Date().getTime(),
    descripcion: descripcion,
    finalizado: false
  }
  const action ={
    type: "agregar",
    payload: tareaNueva
  
  }

  dispatch(action)
  setDescripcion("")
}
const handleCambiar = (id) => {
  dispatch({
    type: "cambiar",
    payload: id
  })
}
const handleEliminar = (id) => {
  dispatch({
    type: "borrar",
    payload: id
  })
}

let terminadas = 0
  for(let i = 0; i< state.length; i++){
    if(state[i].realizado === true){
      terminadas++;
    }
  }

  let porcentaje = terminadas / state.length

  return(
      <>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <FormularioTareas descripcion={descripcion} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
            </div>
            <div className="col-8">
              <div className="row row-cols-1 row-cols-md-2 g-4">
            <div>
              {state.map((tarea, index)=>{
                  return<CardTarea key={index} handleCambiar={handleCambiar} handleEliminar={handleEliminar} tarea={tarea} id={tarea.id} index={index}/>
                })
              }
            </div>
            </div>
              <Fooder porcentaje={porcentaje}/>
          </div>
        </div>
        </div>
        
      </>
    )
}