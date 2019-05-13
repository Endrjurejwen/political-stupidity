import styled from 'styled-components';
import { color, media } from 'utils';

const Wrapper = styled.div`
  display: none;
  height: 100%;
  padding: 0 1rem;
  border-right: 1px solid ${color.textLight};
  border-left: 1px solid ${color.textLight};
  border-bottom: 2px solid transparent;

  ${media.tablet`
    display: ${({ isLogin }) => (isLogin ? 'flex' : 'none ')};
    justify-content: space-between;
    width: 11rem;
  `}
`;

export { Wrapper };
