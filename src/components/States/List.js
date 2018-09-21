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
      states
    });
  }

  render() {
    const { states } = this.state;
    const { onStateSelection } = this.props;
    return (
      <ul>
        {
          states.map(state => (
              <State
                key={state.id}
                {...state}
                onStateSelection={(id) => onStateSelection(id)}
              />
            )
          )
        }
      </ul>            
    );
  }
}

export default List;
