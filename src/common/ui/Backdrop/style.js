import styled from 'styled-components';
import { fixed, color } from 'utils';

const Backdrop = styled.div`
  ${fixed()};

  width: 100vw;
  height: 100vh;
  background-color: ${color.backdrop};
  z-index: 20;
`;

export { Backdrop };
