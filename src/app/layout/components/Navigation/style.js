import styled from 'styled-components';
import { media, flexCenter, spacing, color } from 'utils';

const Wrapper = styled.nav`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: ${({ isDesktop }) => (isDesktop ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  ${media.desktop`
    display: flex;
    width: auto;
    flex-direction: row;
    margin-left: 5rem;
  `}
`;

const NavigationList = styled.ul`
  ${flexCenter()};
  flex-flow: column;
  list-style: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  margin-bottom: ${spacing[4]};
  border-bottom: ${({ isLogin }) =>
    isLogin ? `1px solid ${color.action}` : 'none'};

  ${media.desktop`
    width: auto;
    flex-flow: row;
    justify-content: space-between;
    margin-bottom: 0;
    margin-right: ${spacing[3]};
    border-bottom: none;
  `}
`;

export { Wrapper, NavigationList };
