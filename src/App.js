import React, { Component } from 'react';

import StatesList from './components/States/List';
import CitiesList from './components/Cities/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedState: null
    };
  }

  render() {
    return (
      <div>
        <StatesList onStateSelection={(stateId) => (ev) => this.setState({ selectedState: stateId })}/>
        <CitiesList of={this.state.selectedState}/>
      </div>
    );
  }
}

export default App;
