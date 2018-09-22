import React, { Component } from 'react';

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
  }

  componentDidMount() {    
    let state = this.props.match.params.stateId;
    this.fetchCitiesOf(state);
  }

  componentDidUpdate(prevProps) {
    let state = this.props.match.params.stateId;
    if (state !== prevProps.match.params.stateId) {
      this.fetchCitiesOf(state);
    }
  }

  render() {
    return (
      <ul>
        {
          this.state.cities.map(city => <li key={city.id}>{city.name}</li>)
        }
      </ul>
    );
  }
}
/*
const List = async ({ match }) => {
  let response, cities = [];
  let state = match.params.stateId;

  try {
    response = await fetch(`https://desafio-estagio.now.sh/api/v1/cities/${state}`, {
      mode: 'cors'
    });
    if (!response.ok) throw Error('Request Error');
    cities = await response.json();
  } catch (e) {
    cities = []
  }

  return (
    <ul>
      {
        cities.map(city => <li key={city.id}>{city.name}</li>)
      }
    </ul>
  )
}*/

export default List;
