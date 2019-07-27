import React from "react"

let TengoONoMensajes = (props) => {
  // props.mensajes => [String]

  console.log(props)
  
  let mensajes = 
  props.mensajes ?
    props.mensajes.map(elem => <li>{elem}</li>) 
      :
    []

  return <div>
    {
      props.mensajes && props.mensajes.length > 0 
        ?
      <ul>
        { mensajes }
      </ul>
        :
      <p>No tienes mensajes</p>
    }
  </div>
}

export default TengoONoMensajes