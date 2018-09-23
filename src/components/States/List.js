import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

// Layout components
import Ul from '../Layout/Ul';
import SectionTitle from '../Layout/SectionTitle';
// State List Item
import State from './State';

import Fetcher from '../../utils/Fetcher';

// Adds custom styles to Ul
const StatesList = styled(Ul)`
  position: absolute;
  background: #f7f8fa;
  width: 80%;

  @media (max-width: 767px) {
    transform: translateX(${({ visible }) => visible ? '0': '-100%'});
    transition: transform 0.5s linear;
    z-index: 1000;
  }

  @media (min-width: 768px) {
    position: initial;
    width: 100%;
  }
`;
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

  get loader() {
    return (
      <div className={css`
        background:#f7f8fa;
        height: calc(100vh - 80px);
      `}></div>
    );
  }

  get loaded() {
    const { states } = this.state;
    const { visible } = this.props;

    return (
      <StatesList pointerEvents="true" visible={visible}>
        <SectionTitle>Estados</SectionTitle>
        {states.map(state => <State key={state.id} {...state}/>)}
      </StatesList>
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
