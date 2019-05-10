import styled from 'styled-components';
import { Button, Cross } from 'elements';
import { media, spacing, elevation } from 'utils';

const ActionButton = styled(Button)`
  ${props => (props.extended ? elevation[1] : elevation[4])};
  position: ${({ extended }) => (extended ? 'static' : 'fixed')};
  bottom: 1rem;
  right: 1rem;
  display: ${({ desktop }) => (desktop ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: 100px;
  padding: ${props => (props.extended ? spacing[2] : spacing[3])} ${spacing[4]};

  ${media.tablet`
  ${elevation[1]};
  position: static;
  display: ${({ desktop }) => (desktop ? 'flex' : 'none')};
  padding: ${spacing[1]} ${spacing[4]};
`}
`;

const Label = styled.div`
  margin-left: ${spacing[3]};
  margin-top: ${props => (props.extended ? -spacing[1] : '0')};
`;

export { ActionButton, Label, Cross };
