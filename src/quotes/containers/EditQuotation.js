import React, { useState } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editQuotation } from 'quotes/actions';
import { getIsLoadingState } from 'quotes/selectors';
import { quotationType } from 'quotes/propTypes';
import { spacing } from 'utils';
import { WithLoader } from 'common';
import { H3 } from 'elements';
import QuotationForm from 'quotes/components/QuotationForm';

const editQuotationForm = ({
  editQuotation,
  closeModal,
  isLoading,
  quotation
}) => {
  const [content, setContent] = useState(quotation.content);
  const [politician, setPolitician] = useState(quotation.politician);

  const setNewQuotation = () => ({ content, politician });

  const handleEditQuotationSubmit = event => {
    const newQuotation = setNewQuotation();
    event.preventDefault();
    editQuotation(quotation.id, newQuotation);
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
  closeModal: func,
  editQuotation: func.isRequired,
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

export default withRouter(
  connect(
    mapStateToProps,
    { editQuotation }
  )(editQuotationForm)
);

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(
//       {
//         editQuotation
//       },
//       dispatch
//     )
//   };
// };
