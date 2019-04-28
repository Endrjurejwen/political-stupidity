import React from 'react';
import { quotationType } from 'quotes/propTypes';
import { EditButton, Toggle, Modal } from 'common';
import EditQuotation from 'quotes/containers/EditQuotation';

const editQuotationToggle = ({ quotation }) => (
  <Toggle
    open={show => <EditButton click={show} />}
    content={hide => (
      <Modal close={hide}>
        <EditQuotation quotation={quotation} />
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
