import styled from 'react-emotion';

import { toolbar } from '../../styles/dimensions';

export default styled('ul')`
  height: calc(100vh - ${toolbar.height});
  overflow-y: auto;
`;
