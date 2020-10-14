import React from 'react';
import ListaDeNotas from './components/src/ListaDeNotas/';
import FormularioCadastro from './components/src/FormularioCadastro/';
import './assets/App.css'
import './assets/index.css'

function App() {
  return (
    <section className="conteudo">
      <FormularioCadastro />
      <ListaDeNotas />
    </section>
  );
}

export default App;