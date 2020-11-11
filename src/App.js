import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from './components/ListaDeCategorias/';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
    }
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(indice) {
    let arrayNotas = this.state.notas;

    arrayNotas.splice(indice, 1);
    const novoEstado = {
      notas: arrayNotas
    }

    this.setState(novoEstado);
  }

  adicionaCategoria(valorCategoria) {

    const novoArrayCategorias = [...this.state.categorias, valorCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategorias };

    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.state.categorias}
            adicionaCategoria={this.adicionaCategoria.bind(this)}
          />
          <ListaDeNotas notas={this.state.notas} apagarNota={this.deletarNota.bind(this)} />
        </main>
      </section>
    );
  }
}

export default App;