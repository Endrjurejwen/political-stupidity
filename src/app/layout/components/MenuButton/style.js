import styled from 'styled-components';
import { media, color, spacing } from 'utils';

const MenuButton = styled.button`
  display: block;
  z-index: 40;
  cursor: pointer;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0 ${spacing[3]};

  ${media.desktop`
    display: none;
  `}
`;

const MenuIcon = styled.div`
  position: relative;
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? 'transparent' : color.textLight};
  width: 22px;
  height: 2px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${color.textLight};
    width: 22px;
    height: 2px;
    left: 0;
    transition: transform 0.2s ease-out;
  }

  &::before {
    top: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-6px')};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(135deg)' : 'rotate(0deg)'};
  }

  &::after {
    top: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '6px')};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(-135deg)' : 'rotate(0deg)'};
  }
`;

export { MenuButton, MenuIcon };
