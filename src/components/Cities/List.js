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
import empty  from '../../assets/empty.svg';

import Fetcher from '../../utils/Fetcher';

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
    // Closes the menu
    this.props.onFetch();
    // Shows the loader
    this.setState({ isLoading: true });
    // Request the data
    const cities = await Fetcher.fetch(`https://desafio-estagio.now.sh/api/v1/cities/${state}`);
    // Save the data
    this.setState({
      cities,
      isLoading: false
    });
  }

  /**
   * Gets all cities of a state
   */
  componentDidMount() {
    const state = this.props.match.params.stateId;
    this.fetchCitiesOf(state);
  }

  /**
   * Gets the cities of a state after a route changing.
   * @param {*} prevProps 
   */
  componentDidUpdate(prevProps) {
    const state = this.props.match.params.stateId;
    // Verifies whether the route changed
    if (state !== prevProps.match.params.stateId) {
      this.fetchCitiesOf(state);
    }
  }

  // It'll be shown if the data is loading
	get loader() {
		return <LoaderPage icon={loading}/>;
  }
  
  // It'll be shown if the data was not found
  get noDataComponent() {
    return (
      <LoaderPage icon={empty}>
        <SectionTitle>Opa! Não achei nenhuma cidade.</SectionTitle>
      </LoaderPage>
    );
  }

  // It'll be shown if the data is loaded
	get loaded() {
    const { cities } = this.state;
    const { pointerEvents } = this.props;
		return (
			<Ul pointerEvents={pointerEvents.toString()}>
				<SectionTitle>Cidades</SectionTitle>
        {cities.map(city => <City key={city.id} name={city.name}/>)}
				<a href="https://icons8.com"
					target="_blank"
					rel="noopener noreferrer"
					className={css`
						margin: 0 0 2em 0;
						display: block;
						text-align: center;
					`}>Icon pack by Icons8</a>
      </Ul>
		);
	}

  render() {
    const { isLoading, cities } = this.state;
    let component;
    // Will return the loader / placeholder if data is loading
    if (isLoading) {
      component = this.loader;
    } else if(cities && cities.length === 0) {
      component = this.noDataComponent;
    } else {
		  component = this.loaded;
		}

		return component;
  }
}

export default List;
