import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const Li = styled('li')`
  cursor: pointer;

  &:hover {
    background: whitesmoke;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 2em;

  color: #444;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  &:visited {
    color: none;
  }
`;

/**
 * State list item.
 */
function State({ id, name }) {
  return (
    <Li>
      <StyledLink to={`/cities/${id}`}>{name}</StyledLink>
    </Li>
  );
}

export default State;
