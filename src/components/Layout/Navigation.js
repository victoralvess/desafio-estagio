import styled from 'react-emotion';

import { toolbar } from '../../styles/dimensions';

export default styled('aside')`
  position: absolute;
  background: #f7f8fa;
  width: 80%;
  height: calc(100vh - ${toolbar.height});
  overflow-y: auto;

  @media (max-width: 767px) {
    transform: translateX(${({ visible }) => visible ? '0': '-100%'});
    transition: transform 0.5s linear;
    z-index: 1000;
  }

  @media (min-width: 768px) {
    position: initial;
    width: 100%;
  }
`;