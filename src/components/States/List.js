import React, { Component } from 'react';

// Layout components
import Navigation from '../Layout/Navigation';
import SectionTitle from '../Layout/SectionTitle';
// State List Item
import State from './State';

import Fetcher from '../../utils/Fetcher';

/**
 * List of States.
 */
class List extends Component {
	constructor(props) {
    super(props);

    this.state = {
      states: [],
      isLoading: true
    };
	}
	
	async componentDidMount() {
    // Shows the loader
    this.setState({ isLoading: true });
    // Request the data
    const states = await Fetcher.fetch(`https://desafio-estagio.now.sh/api/v1/states`);
    // Save the data
    this.setState({
      states,
      isLoading: false
    });
  }

  // It'll be shown if the data is loading
  get loader() {
    return (
      <Navigation visible={true}/>
    );
  }

  // It'll be shown if the data is loaded
  get loaded() {
    const { states } = this.state;
    const { visible } = this.props;

    return (
      // Navigation
      <Navigation visible={visible}>
        {/* Navigation Title */}
        <SectionTitle>Estados</SectionTitle>
        {/* States */}
        <ul>        
          {states.map(state => <State key={state.id} {...state}/>)}
        </ul>
      </Navigation>
    );
  }

  render() {
    const { isLoading } = this.state;
    let component;
    // Will return the loader / placeholder if data is loading
    if (isLoading) {
      component = this.loader;
    } else {
		  component = this.loaded;
		}

		return component;
  }
}

export default List;
