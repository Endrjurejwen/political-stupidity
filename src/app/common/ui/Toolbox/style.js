import styled from 'styled-components';
import { absolute, flexCenter } from 'utils';

const Toolbox = styled.aside`
  ${absolute({ side: 'right' })};
  ${flexCenter({ justifyContent: 'space-between' })};
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 0;
`;

export { Toolbox };
