import React, { Component } from 'react';

import State from './State';

/**
 * List of States.
 */
class List extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      states: []
    };
  }
  /**
   * Gets the list of states and updates the List state.
   */
  async componentDidMount() {
    const response = await fetch('http://mis-api.dev.br-mediagroup.com/api/v1/states');
    const states = await response.json();

    this.setState({
      states
    });
  }

  render() {
    return (
      <ul>
        {
          this.state.states.map(state => <State key={state.id} {...state}/>)
        }
      </ul>            
    );
  }
}

export default List;
