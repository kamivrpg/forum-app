import React from 'react'

class ListaPost extends React.Component {
    constructor (props) {
      super(props)
      console.log('constructor')
      this.state = {
        marks: [],
        mensaje: 'Hola adios'
      }
    }

    dejaMarca = () => {
      console.log('dejando marca')
      console.log('this', this)
      let nuevaMarca = new Date().toLocaleTimeString()
      // this.state.marks.push(nuevaMarca) 
      // no corre render cuando se modifica directamente state 
      // Es mejor modificar el state con el método setState

      this.setState({
        marks: [...this.state.marks, nuevaMarca],
        mensaje: this.state.mensaje + ' ' + (this.state.marks.length + 1)
      })
    }

    cambiaMensaje = (mensaje) => {
      this.setState({
        mensaje: mensaje
      })
    }
    
    render () {
      console.log('render')

      console.log('this', this)
      console.log('state.marks', this.state.marks)
      // map de marcas a JSX
      let marcas = this.state.marks.map(m => <li>{m}</li>)
      return <div>
        <div> { this.state.mensaje} </div>
        <div><button onClick={this.dejaMarca}>Marca</button></div>

        <p> los event Listeners como onClick, reciben una función, no la ejecutan</p>
        <p> si queremos accesar a this desde esta función, la función debe de ser una arrow function </p>
        <div><button onClick={() => this.cambiaMensaje('asd')}>Cambia mensaje</button></div>
        <p> si quiero mandar argumentos a la función, creo una arrow function y dentro ejecuto mi función mandándole los argumentos </p>
        {
          this.state.marks.length > 0 ?
          <ul>
            { marcas }
          </ul>
            :
          <div>
            Pica el botón de marcar para dejar una marca
          </div>

        }
      </div>
    }
  }

export default ListaPost
