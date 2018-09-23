import styled from 'react-emotion';

import { toolbar } from '../../styles/dimensions';

export default styled('section')`
  height: calc(100vh - ${toolbar.height});
  overflow-y: ${({ pointerEvents }) => pointerEvents === 'true'? 'auto': 'hidden'};
  pointer-events: ${({ pointerEvents }) => pointerEvents === 'true'? 'all': 'none'};
`;
