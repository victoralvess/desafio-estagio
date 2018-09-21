import React, { Component } from 'react';

/**
 * State list item.
 */
class State extends Component {
  render() {
    const { id, name, onStateSelection} = this.props;

    return <li onClick={onStateSelection(id)}>{name}</li>;
  }
}

export default State;
