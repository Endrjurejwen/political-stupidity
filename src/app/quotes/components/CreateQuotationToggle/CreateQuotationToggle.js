import React from 'react';
import { history } from 'react-router-prop-types';
import { bool, func } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Toggle, Modal } from 'app/common';
import CreateQuotation from 'app/quotes/containers/CreateQuotation';

import * as S from './style';

const createQuotationToggle = ({ desktop, extended, closeMenu, history }) => (
  <Toggle
    open={show => (
      <S.ActionButton
        desktop={desktop}
        extended={extended}
        onClick={() => {
          history.push('/quotes');
          show();
          closeMenu();
        }}
      >
        <S.Cross />
        {(desktop || extended) && <S.Label>Dodaj Cytat</S.Label>}
      </S.ActionButton>
    )}
    content={hide => (
      <Modal close={hide}>
        <CreateQuotation closeModal={hide} />
      </Modal>
    )}
  />
);

createQuotationToggle.propTypes = {
  closeMenu: func,
  desktop: bool,
  extended: bool,
  history: history.isRequired
};

createQuotationToggle.defaultProps = {
  closeMenu: () => null,
  desktop: false,
  extended: false
};

export default withRouter(createQuotationToggle);
