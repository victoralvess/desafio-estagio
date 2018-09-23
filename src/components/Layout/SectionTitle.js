import styled from 'react-emotion';

import Title from './Title.js';

import { title } from '../../styles/colors';

export default styled(Title)`
  text-align: center;
  color: ${title};
  font-size: 1.5em;
  margin: 2em 0;
`;
