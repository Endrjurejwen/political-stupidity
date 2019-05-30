import styled from 'styled-components';
import { H4 } from 'elements';
import { color, fixed, elevation, spacing, media, flexCenter } from 'utils';

const Title = styled(H4)`
  transform: rotate(-2deg);
  ${elevation[2]};
  padding: 0 ${spacing[4]};
  background-color: ${color.action};
  color: ${color.textLight};
  display: inline-block;
  margin-bottom: ${spacing[1]};
`;

const Wrapper = styled.div`
  ${fixed()};
  ${elevation[3]};
  /* display: flex; */
  /* flex-direction: column; */
  padding: ${spacing[2]} ${spacing[4]};
  height: 100vh;
  width: 100vw;
  z-index: 30;
  background-color: ${color.navigation};
  color: ${color.textLight};
  text-align: center;
  overflow-y: auto;

  transition: all 0.2s cubic-bezier(0.63, 0.21, 0.66, 1);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(100vw)'};

  ${media.desktop`
    display: none;
  `}
`;

const Header = styled.header`
  ${flexCenter()};
  flex-direction: column;
  padding: ${spacing[3]} 0;
`;

const NavContainer = styled.div`
  padding: ${spacing[4]} 0 ${spacing[6]};
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${color.textLight};
  border-bottom: 1px solid ${color.textLight};
  /* flex: 2; */
`;

const Footer = styled.footer`
  ${flexCenter};
  padding: ${spacing[3]} ${spacing[5]};
`;

export { Wrapper, Header, NavContainer, Footer, Title };
