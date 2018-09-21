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

  async componentDidUpdate(prevProps) {
    const state = this.props.of;
    if (state !== prevProps.of) {
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

export default List;
