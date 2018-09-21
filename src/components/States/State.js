import React, { Component } from 'react';

/**
 * State list item.
 */
class State extends Component {
  render() {
    const { name } = this.props;

    return <li>{name}</li>;
  }
}

export default State;
