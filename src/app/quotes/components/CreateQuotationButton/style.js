import styled from 'styled-components';
import { Button, Cross } from 'elements';
import { media, spacing, elevation, color } from 'utils';

const ActionButton = styled(Button)`
  ${props => (props.isExtended ? elevation[1] : elevation[4])};
  position: ${({ isExtended }) => (isExtended ? 'static' : 'fixed')};
  bottom: 1rem;
  right: 1rem;
  display: ${({ isDesktop }) => (isDesktop ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: 100px;
  padding: ${props => (props.isExtended ? spacing[2] : spacing[3])}
    ${spacing[4]};
  border: 2px solid ${color.textLight};

  div {
    transition: background-color 0.25s ease-in-out;
  }

  &:hover div {
    background-color: ${color.action};
  }

  ${media.desktop`
    position: static;
    display: ${({ isDesktop }) => (isDesktop ? 'flex' : 'none')};
    padding: ${spacing[1]} ${spacing[4]};
  `}
`;

const Label = styled.span`
  margin-left: ${spacing[3]};
  margin-top: ${props => (props.isExtended ? -spacing[1] : '0')};
`;

export { ActionButton, Label, Cross };
