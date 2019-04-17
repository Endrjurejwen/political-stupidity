import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Toggle, Modal } from 'common';
import { Button, Cross } from 'elements';
import { media, flexCenter, spacing, elevation } from 'utils';
import CreateQuotation from 'quotes/containers/CreateQuotation';

const createQuotationButton = ({ desktop, extended, closeMenu, history }) => (
  <Toggle
    open={show => (
      <ActionButton
        desktop={desktop}
        extended={extended}
        onClick={() => {
          history.push('/quotes');
          show();
          closeMenu();
        }}
      >
        <Cross />
        {(desktop || extended) && <Label>Dodaj Cytat</Label>}
      </ActionButton>
    )}
    content={hide => (
      <Modal close={hide}>
        <CreateQuotation closeModal={hide} />
      </Modal>
    )}
  />
);

createQuotationButton.defaultProps = {
  closeMenu: () => null
};

export default withRouter(createQuotationButton);

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

// const ActionButton = styled(Button)`
//   /* ${flexCenter}; */
//   ${elevation[4]};
//   position: ${({ desktop }) => (desktop ? 'static' : 'fixed')};
//   bottom: 1rem;
//   right: 1rem;
//   display: ${({ desktop }) => (desktop ? 'none' : 'flex')};
//   z-index: 2;
//   border-radius: 100px;
//   padding: ${spacing[3]} ${spacing[4]};

//   ${media.tablet`
//     ${elevation[1]};
//     display: ${({ desktop }) => (desktop ? 'flex' : 'none')};
//     padding: ${spacing[1]} ${spacing[4]};
//     justify-content: space-between;
//     align-items: flex-start;
//   `}
// `;

// const Label = styled.div`
//   margin-left: ${spacing[3]};
// `;
