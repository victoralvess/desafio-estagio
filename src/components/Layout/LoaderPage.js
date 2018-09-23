import styled from 'react-emotion';

import { toolbar } from '../../styles/dimensions';

export default styled('div')`
  background: url(${({ icon }) => icon});
  height: calc(100vh - ${toolbar.height});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;