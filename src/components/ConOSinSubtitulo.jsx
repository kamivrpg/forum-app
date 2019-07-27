import React from "react"

let ConOSinSubtitulo = (props) => {
  // Un componente de react puede también definirse con Arrow funcs

  // props.titulo String
  // props.subtitulo String
  // props.muestraSubtitulo Boolean

  return <div>
    <h1> {props.titulo} </h1>
    {
      props.muestraSubtitulo && 
      <h2>{props.subtitulo}</h2>
    }  
  </div>
} 

export default ConOSinSubtitulo