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
      const response = await fetch(`http://mis-api.dev.br-mediagroup.com/api/v1/cities?state_id=${state}`)
      const cities = await response.json();
      
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
