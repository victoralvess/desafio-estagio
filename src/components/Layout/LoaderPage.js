import React from 'react';
import { css } from 'react-emotion';

const loader = icon => css`
  background: url(${icon});
  height: calc(100vh - 80px);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function({ icon }) {
	return <div className={loader(icon)}></div>;
}
