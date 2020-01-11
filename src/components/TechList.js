import React, { Component } from 'react';

/** importando um componente */
import TechItem from './TechItem';

class TechList extends Component {
  /**
   * armazenando o estado dentro do objeto state, para que possamos manipular,
   * assim, quando o state muda, o componente responde renderizando novamente.
   * para poder utilizar nesse formato instamos um plugin
   * @babel/plugin-proposal-class-properties
   */
  state = {
    /** aqui armazenamos o valor que vem do input */
    newTech: '',
    techs: []
  };

  /** executado assim que o componente aparece na tela */
  componentDidMount() {
    /** se existir carregando os dados */
    const techs = localStorage.getItem('techs');

    /** se tem mostra */
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  /** executado sempre que hover alteração nas props ou estado */
  // componentDidUpdate(prevProps, prevState) {
  componentDidUpdate(_, prevState) {
    /** this.props, this.state */
    /** se o estado anterior é diferente do atual */
    if (prevState.techs !== this.state.techs) {
      /** local Storage não recebe array, então salva como json */
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  /** executado quando o componente deixa de existir */
  componentWillUnmount() {

  }

  /** 
   * criamos um novo método no formato de arrow function para ter acesso ao
   * "this" para poder acessar outras propriedades ou funções
   */
  handleInputChange = e => {
    /* por conta do conceito de imutabilidade aplicamos o setState  */
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    /** para evitar o evento de piscada de tela para atualizar a página */
    e.preventDefault();

    /** atualizando o estado de techs */
    this.setState({
      /** 
       * manipulamos o array ou objetos no caso atualizamos a array de techs,
       * criamos uma nova array usando spread copiamos todo o conteúdo de 
       * techs e incluo na última posição da array o valor que está em newTech
       */
      techs: [...this.state.techs, this.state.newTech],
      /** para limpar o input que reflete o value do input */
      newTech: '',
    });
  }

  /** por cada tech de techs não possuir id, simplesmente passamos tech */
  handleDelete = (tech) => {
    /** filtrando para só receber t se for diferente da tech que estou
     * recebendo no parâmetro, renderizando menos essa.
     */
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  /** todo o componente escrito em class é obrigatório ter o método render */
  render() {
    /**
     * que retorna nosso HTML, como é mais de uma linha colocamos entre
     * parenteses
     */
    return (
      /** definimos uma ação ao enviar o formulário que é disparado pelo button */
      <form onSubmit={this.handleSubmit}>
        <ul>
          {/** 
           * adicionando código JS
           * quando trabalhamos com iterações temos que passar o key que recebe
           * um valor único de cada elemento, que em outro caso estaria
           * recebendo um id de uma listagem do backend
           */}
          {this.state.techs.map(tech => (
            /** o componente externo */
            <TechItem 
              key={tech}
              /**
               * passando a propriedade tech como parâmetro do método para o
               * outro componente
               */
              tech={tech} 
              /** 
               * passando a propriedade contendo o método(função) recebendo o
               * parâmetro tech 
               */
              onDelete={() => this.handleDelete(tech)} 
            />
          ))}
        </ul>
        <input 
          type="text"
          /** 
           * onChange que executa conforme vai mudando o valor do input
           * recebendo o método
          */
          onChange={this.handleInputChange} 
          /**
           * por uma boa prática passamos o value garantindo prováveis mudanças
           * que possam ocorrer em newTech
          */
          value={this.state.newTech}
        />
        {/** disparando a ação do formulário */}
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList;
