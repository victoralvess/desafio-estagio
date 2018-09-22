import React from 'react';
import { Link } from 'react-router-dom';

/**
 * State list item.
 */
function State({ id, name }) {
  return (
    <li>
      <Link to={`/cities/${id}`}>{name}</Link>
    </li>
  );
}

export default State;
