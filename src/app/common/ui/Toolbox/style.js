import styled from 'styled-components';
import { absolute, flexCenter } from 'utils';

const Toolbox = styled.aside`
  ${absolute({ side: 'right', y: '4px' })};
  ${flexCenter({ justifyContent: 'space-between' })};
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  padding: 0;
`;

export { Toolbox };
