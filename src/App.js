import React from 'react';
import { ListaDeNotas } from './components/src/listaDeNotas';

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="titulo" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas />
    </section>
  );
}

export default App;