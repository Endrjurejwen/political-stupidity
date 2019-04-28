import React, { useState } from 'react';
import { shape, func, bool } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteQuotation } from 'quotes/actions';
import { getIsLoadingState } from 'quotes/selectors';
import { quotationType } from 'quotes/propTypes';
import { spacing } from 'utils';
import { WithLoader } from 'common';
import { H3 } from 'elements';
import Confirmation from 'quotes/components/Confirmation';

const deleteQuotationConfirmation = ({
  actions,
  closeModal,
  quotation,
  history
}) => {
  const handleDeleteQuotationClick = () => {
    const isQuotesLocation = history.location.pathname === '/quotes';
    actions.deleteQuotation(quotation.id);
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
  actions: shape({
    deleteQuotation: func.isRequired
  }).isRequired,
  onCloseClick: func,
  quotation: quotationType
};

deleteQuotationConfirmation.defaultProps = {
  onCloseClick: () => null,
  quotation: null
};

// const mapStateToProps = state => ({
//   isLoading: getIsLoadingState(state)
// });

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        deleteQuotation
      },
      dispatch
    )
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(deleteQuotationConfirmation)
);
