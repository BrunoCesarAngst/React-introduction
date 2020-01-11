import React from 'react';
import PropTypes from 'prop-types';

/**
 * como não temos o objeto state para manipular informações, vamos usar função
 * ao invés de class
 * que recebe na desestruturação como parâmetros as propriedades passa através
 * da tag desse arquivo
 */
function TechItem({ tech, onDelete }) {
  return(
    <li>
      {tech}
      {/**
        * para obedecer o onClick colocamos a propriedade que tem o método
        * this.handleDelete
        */}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}

export default TechItem;