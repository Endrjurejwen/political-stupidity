import React from 'react';
import { quotationType } from 'quotes/propTypes';
import { DeleteButton, Toggle, Modal } from 'common';
import DeleteQuotation from 'quotes/containers/DeleteQuotation';

const editQuotationToggle = ({ quotation }) => (
  <Toggle
    open={show => <DeleteButton click={show} />}
    content={hide => (
      <Modal close={hide}>
        <DeleteQuotation quotation={quotation} onCloseClick={hide} />
      </Modal>
    )}
  />
);

editQuotationToggle.propTypes = {
  quotation: quotationType
};

editQuotationToggle.defaultProps = {
  quotation: null
};

export default editQuotationToggle;
