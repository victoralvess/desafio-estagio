import React, { Component } from 'react';
import { css } from 'react-emotion';

// Layout components
import Ul from '../Layout/Ul';
import SectionTitle from '../Layout/SectionTitle';
import LoaderPage from '../Layout/LoaderPage';
// State List Item
import State from './State';
// Assets
import loading from '../../assets/loading.svg';

/**
 * List of States.
 */
class List extends Component {
  listStyle = visible => css`
    position: absolute;
    background: #f7f8fa;
    width: 80%;
    
    @media (max-width: 767px) {
      transform: translateX(${visible===true ? '0': '-100%'});
      transition: transform 0.5s linear;
      z-index: 1000;
    }
    
    @media (min-width: 768px) {
      position: initial;
      width: 100%;
    }
  `;

  constructor(props) {
    super(props);

    this.state = {
      states: [],
			isLoading: true
    }; 
  }  

  /**
   * Gets the list of states and updates the List state.
   */
  async componentDidMount() {
    //if (process.env.NODE_ENV !== 'development') {
      let response, states = [];
      
      try {
        response = await fetch('https://desafio-estagio.now.sh/api/v1/states', {
          mode: 'cors'
        });
        if (!response.ok) throw Error('Request Error');
        states = await response.json();
      } catch (e) {
        states = []
      }

      this.setState({
        states,
				isLoading: false
      });
   // } else {
     // this.setState({
       // states: [{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":2,"name":"Alagoas","uf":"AL","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":3,"name":"Amapá","uf":"AP","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":4,"name":"Amazonas","uf":"AM","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":5,"name":"Bahia","uf":"BA","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":6,"name":"Ceará","uf":"CE","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":7,"name":"Distrito Federal","uf":"DF","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":8,"name":"Espírito Santo","uf":"ES","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":9,"name":"Goiás","uf":"GO","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":10,"name":"Maranhão","uf":"MA","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":11,"name":"Mato Grosso","uf":"MT","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":12,"name":"Mato Grosso do Sul","uf":"MS","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":13,"name":"Minas Gerais","uf":"MG","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":14,"name":"Pará","uf":"PA","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":15,"name":"Paraíba","uf":"PB","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":16,"name":"Paraná","uf":"PR","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":17,"name":"Pernambuco","uf":"PE","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":18,"name":"Piauí","uf":"PI","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":19,"name":"Rio de Janeiro","uf":"RJ","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":20,"name":"Rio Grande do Norte","uf":"RN","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":21,"name":"Rio Grande do Sul","uf":"RS","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":22,"name":"Rondônia","uf":"RO","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":23,"name":"Roraima","uf":"RR","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":24,"name":"Santa Catarina","uf":"SC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":25,"name":"São Paulo","uf":"SP","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":26,"name":"Sergipe","uf":"SE","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"},{"id":27,"name":"Tocantins","uf":"TO","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}]
      //})
    //}
  }

  render() {
    const { states } = this.state;
		let component;
    if (this.state.isLoading) {
      component = (
				<div className={css`
					background:#f7f8fa;
					height: calc(100vh - 80px);
				`}></div>
			);
    } else {
		  component = (
		    <Ul className={this.listStyle(this.props.visible)}>
					<SectionTitle>Estados</SectionTitle>
		      {
		        states.map(state => (
		            <State
		              key={state.id}
		              {...state}
		            />
		          )
		        )
		      }
		    </Ul>            
		  );
		}

		return component;
  }
}

export default List;
