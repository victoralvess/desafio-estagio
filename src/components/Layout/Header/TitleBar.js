import styled from 'react-emotion';

import { main, title } from '../../../styles/colors';
import { toolbar } from '../../../styles/dimensions';

export default styled('header')`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;

  width: 100%;
  height: ${toolbar.height};

  background: ${main};
  color: ${title};
`;
