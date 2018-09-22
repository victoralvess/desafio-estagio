import styled from 'react-emotion';

export default styled('div')`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(300px, 25%) auto;
  }
`;
