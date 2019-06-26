import React from 'react';
import { func, string } from 'prop-types';
import { history } from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteQuotation } from 'app/quotes/operations';
import { Confirmation } from 'app/common';

import ROUTES_NAMES from 'app/pages/Routes/routesNames';

export const deleteQuotationConfirmation = ({
  deleteQuotation,
  onCloseModal,
  quotationID,
  history
}) => {
  const handleDeleteQuotationClick = () => {
    const isQuotesLocation = history.location.pathname === ROUTES_NAMES.quotes;
    deleteQuotation(quotationID).then(res => res && onCloseModal());
    if (!isQuotesLocation) {
      history.push(ROUTES_NAMES.quotes);
    }
  };

  return (
    <Confirmation
      onCloseClick={onCloseModal}
      onConfirmClick={handleDeleteQuotationClick}
    />
  );
};

deleteQuotationConfirmation.propTypes = {
  deleteQuotation: func.isRequired,
  history,
  onCloseModal: func,
  quotationID: string
};

deleteQuotationConfirmation.defaultProps = {
  history: null,
  onCloseModal: () => null,
  quotationID: null
};

export default withRouter(
  connect(
    null,
    { deleteQuotation }
  )(deleteQuotationConfirmation)
);
