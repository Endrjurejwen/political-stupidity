import React from 'react';
import { func } from 'prop-types';
import { history } from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteQuotation } from 'quotes/actions';
import { quotationType } from 'quotes/propTypes';
import Confirmation from 'quotes/components/Confirmation';

const deleteQuotationConfirmation = ({
  deleteQuotation,
  closeModal,
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
      onCloseClick={closeModal}
      onConfirmClick={handleDeleteQuotationClick}
    />
  );
};

deleteQuotationConfirmation.propTypes = {
  closeModal: func,
  deleteQuotation: func.isRequired,
  history: history.isRequired,
  quotation: quotationType
};

deleteQuotationConfirmation.defaultProps = {
  closeModal: () => null,
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
