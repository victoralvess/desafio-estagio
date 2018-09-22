import React, { Component } from 'react';
import { css } from 'react-emotion';
// Layout components
import Ul from '../Layout/Ul';
import SectionTitle from '../Layout/SectionTitle';
import LoaderPage from '../Layout/LoaderPage';
// City List Item
import City from './City';
// Assets
import loading from '../../assets/loading.svg';

/**
 * List of Cities.
 */
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      isLoading: true
    };
  }

  async fetchCitiesOf(state) {
			this.props.onLoadItems();
			this.setState({ isLoading: true });
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
        cities,
        isLoading: false
      });
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
    let component;
    if (this.state.isLoading) {
      component = <LoaderPage icon={loading}/>
    } else {
      component = (
        <Ul className={css`
          pointer-events: ${this.props.pointerEvents? 'all': 'none'};
          overflow-y: ${this.props.pointerEvents? 'auto': 'hidden'}
        `}>
					<SectionTitle>Cidades</SectionTitle>
          {
            this.state.cities.map(city => (
              <City key={city.id} name={city.name}/>
            ))
          }
        </Ul>
      );
    }
    return component;
  }
}

export default List;
