import React, { Component } from "react";
import './estilo.css';  

class ListaDeCategorias extends Component {

  _handleEventoInput(e) {
    if(e.keyCode !== 13) return;

    const valorCategoria = e.target.value;

    this.props.adicionaCategoria(valorCategoria);

    e.target.value = '';
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
         {
          this.props.categorias.map((categoria, index) => {
           return (
              <li key={index} className="lista-categorias_item">{categoria}</li>
            )
         })}
        </ul>
        <input type="text" className="lista-categorias_input" onKeyUp={this._handleEventoInput.bind(this)} placeholder="Adicionar categoria" />
      </section>
    );
  }
}

export default ListaDeCategorias;
