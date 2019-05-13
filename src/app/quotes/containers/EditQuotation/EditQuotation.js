import React, { useState } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editQuotation } from 'app/quotes/actions';
import { getIsLoadingState } from 'app/quotes/selectors';
import { quotationType } from 'app/quotes/propTypes';
import { spacing } from 'utils';
import { WithLoader } from 'app/common';
import QuotationForm from 'app/quotes/components/QuotationForm';

import * as S from 'elements';

const CHECKBOXES_VALUES = {
  historia: false,
  przyroda: false
};

const editQuotationForm = ({
  editQuotation,
  closeModal,
  isLoading,
  quotation
}) => {
  const newCheckboxesValues = quotation.topics.reduce((acc, current) => {
    if (current in acc) {
      acc = {
        ...acc,
        [current]: true
      };
    }
    return acc;
  }, CHECKBOXES_VALUES);

  const [newQuotation, setNewQuotation] = useState({
    content: quotation.content,
    politician: quotation.politician,
    ...newCheckboxesValues
  });

  const handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setNewQuotation({
      ...newQuotation,
      [target.name]: value
    });
  };

  const setTopicsArray = () => {
    const arr = [];
    Object.keys(newQuotation).forEach(key => {
      if (newQuotation[key] === true) {
        arr.push(key);
      }
    });
    return arr;
  };

  const setNewQuotationWithTopics = () => {
    const topicsArray = setTopicsArray();
    const newQuotationWithTopics = {
      content: newQuotation.content,
      politician: newQuotation.politician,
      topics: topicsArray
    };
    return newQuotationWithTopics;
  };

  const handleEditQuotationSubmit = event => {
    event.preventDefault();
    const newQuotationWithTopics = setNewQuotationWithTopics();
    editQuotation(quotation.id, newQuotationWithTopics);
    closeModal();
  };

  return (
    <WithLoader isLoading={isLoading}>
      <S.H3 center marginBottom={spacing[3]}>
        Edytuj cytat
      </S.H3>
      <QuotationForm
        onQuotationSubmit={handleEditQuotationSubmit}
        onInputChange={handleInputChange}
        isLoading={isLoading}
        buttonLabel="Zapisz zmiany"
        newQuotation={newQuotation}
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