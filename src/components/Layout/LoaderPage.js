import React from 'react';
import { css } from 'react-emotion';

import { toolbar } from '../../styles/dimensions';

const loader = icon => css`
  background: url(${icon});
  height: calc(100vh - ${toolbar.height});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function({ icon }) {
	return <div className={loader(icon)}></div>;
}
