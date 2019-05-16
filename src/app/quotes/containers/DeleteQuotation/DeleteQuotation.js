import React from 'react';
import { func } from 'prop-types';
import { history } from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteQuotation } from 'app/quotes/actions';
import { quotationType } from 'app/quotes/propTypes';
import { Confirmation } from 'app/common';

const deleteQuotationConfirmation = ({
  deleteQuotation,
  onCloseModal,
  quotation,
  history
}) => {
  const handleDeleteQuotationClick = () => {
    const isQuotesLocation = history.location.pathname === '/quotes';
    deleteQuotation(quotation.id);
    if (!isQuotesLocation) {
      history.push('/quotes');
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
  history: history.isRequired,
  onCloseModal: func,
  quotation: quotationType
};

deleteQuotationConfirmation.defaultProps = {
  onCloseModal: () => null,
  quotation: null
};

export default withRouter(
  connect(
    null,
    { deleteQuotation }
  )(deleteQuotationConfirmation)
);

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(
//       {
//         deleteQuotation
//       },
//       dispatch
//     )
//   };
// };
