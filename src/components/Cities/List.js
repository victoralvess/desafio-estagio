import React, { Component } from 'react';
import { css } from 'react-emotion';

import Ul from '../Layout/Ul';
import City from './City';

/**
 * List of Cities.
 */
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: []
    };
  }

  async fetchCitiesOf(state) {
    if (process.env.NODE_ENV !== 'development') {
      let response, cities = [];

      try {
        response = await fetch(`https://desafio-estagio.now.sh/api/v1/cities/${state}`, {
          mode: 'cors'
        });
        if (!response.ok) throw Error('Request Error');
        cities = await response.json();
      } catch (e) {
        cities = []
      }
      
      this.setState({
        cities
      });
    } else {
      this.setState({
        cities: [{"id":1,"name":"Acrelândia","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":2,"name":"Assis Brasil","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":3,"name":"Brasiléia","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":4,"name":"Bujari","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":5,"name":"Capixaba","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":6,"name":"Cruzeiro do Sul","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":7,"name":"Epitaciolândia","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":8,"name":"Feijó","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":9,"name":"Jordão","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":10,"name":"Mâncio Lima","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":11,"name":"Manoel Urbano","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":12,"name":"Marechal Thaumaturgo","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":13,"name":"Plácido de Castro","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":14,"name":"Porto Acre","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":15,"name":"Porto Walter","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":16,"name":"Rio Branco","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":17,"name":"Rodrigues Alves","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":18,"name":"Santa Rosa do Purus","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":19,"name":"Sena Madureira","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":20,"name":"Senador Guiomard","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":21,"name":"Tarauacá","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}},{"id":22,"name":"Xapuri","state_id":1,"created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42","state":{"id":1,"name":"Acre","uf":"AC","created_at":"2018-09-18 21:58:42","updated_at":"2018-09-18 21:58:42"}}]
      });
    }
  }

  /**
   * Gets all cities of a state
   */
  componentDidMount() {    
    let state = this.props.match.params.stateId;
    this.fetchCitiesOf(state);
  }

  /**
   * Gets the cities of a state after a route changing.
   * @param {*} prevProps 
   */
  componentDidUpdate(prevProps) {
    let state = this.props.match.params.stateId;
    if (state !== prevProps.match.params.stateId) {
      this.fetchCitiesOf(state);
    }
  }

  render() {
    return (
      <Ul className={css`
        pointer-events: ${this.props.pointerEvents? 'all': 'none'};
        overflow-y: ${this.props.pointerEvents? 'auto': 'hidden'}
      `}>
        {
          this.state.cities.map(city => (
            <City key={city.id} name={city.name}/>
          ))
        }
      </Ul>
    );
  }
}

export default List;
