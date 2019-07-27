import React from 'react';
import logo from './logo.svg';
import './App.css';
// import TengoONoMensajes from "./components/TengoONoMensajes";
// import ConOSinSubtitulo from "./components/ConOSinSubtitulo";
// import SmartDump from "./components/SmartDump/SmartDump";
import PostList from './components/PostList.jsx'

function App() {
  let dummyPosts = [
    {
      text: 'Parrafo Post 1',
          comments: ['Hola', 'Adios']
      },
      {
        text: 'Parrafo Post 2',
        comments: ['Ayiura', 'Nah']
      }
    ]
  return (
    <div className="App">
      {/* <TengoONoMensajes />
      <ConOSinSubtitulo titulo="Hola" subtitulo="Adios" muestraSubtitulo/>
      <SmartDump algo="hola"/> */}
      <PostList posts={dummyPosts}/>
      
    </div>
  );
}

export default App;
