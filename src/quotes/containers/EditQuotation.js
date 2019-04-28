import React, { useState } from 'react';
import { shape, func, bool } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editQuotation } from 'quotes/actions';
import { getIsLoadingState } from 'quotes/selectors';
import { quotationType } from 'quotes/propTypes';
import { spacing } from 'utils';
import { WithLoader } from 'common';
import { H3 } from 'elements';
import QuotationForm from 'quotes/components/QuotationForm';

const editQuotationForm = ({ actions, closeModal, isLoading, quotation }) => {
  const [content, setContent] = useState(quotation.content);
  const [politician, setPolitician] = useState(quotation.politician);

  const setNewQuotation = () => ({ content, politician });

  const handleEditQuotationSubmit = event => {
    const newQuotation = setNewQuotation();
    event.preventDefault();
    actions.editQuotation(quotation.id, newQuotation);
    closeModal();
  };

  return (
    <WithLoader isLoading={isLoading}>
      <H3 center marginBottom={spacing[3]}>
        Edytuj cytat
      </H3>
      <QuotationForm
        onQuotationSubmit={handleEditQuotationSubmit}
        onContentChange={setContent}
        onPoliticianChange={setPolitician}
        isLoading={isLoading}
        buttonLabel="Zapisz zmiany"
        content={content}
        politician={politician}
      />
    </WithLoader>
  );
};

editQuotationForm.propTypes = {
  actions: shape({
    editQuotation: func.isRequired
  }).isRequired,
  closeModal: func,
  isLoading: bool,
  quotation: quotationType
};

editQuotationForm.defaultProps = {
  closeModal: () => null,
  isLoading: false,
  quotation: null
};

const mapStateToProps = state => ({
  isLoading: getIsLoadingState(state)
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        editQuotation
      },
      dispatch
    )
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(editQuotationForm)
);
