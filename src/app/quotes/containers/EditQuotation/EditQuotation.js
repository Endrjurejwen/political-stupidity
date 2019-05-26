import React, { useState } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editQuotation } from 'app/quotes/operations';
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

export const editQuotationForm = ({
  editQuotation,
  onCloseModal,
  isLoading,
  quotation: { topics, content, politician, id }
}) => {
  const newCheckboxesValues = topics.reduce((acc, current) => {
    if (current in acc) {
      acc = {
        ...acc,
        [current]: true
      };
    }
    return acc;
  }, CHECKBOXES_VALUES);

  const [newQuotation, setNewQuotation] = useState({
    content,
    politician,
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

  const handleEditQuotationSubmit = () => {
    // event.preventDefault();
    const newQuotationWithTopics = setNewQuotationWithTopics();
    editQuotation(id, newQuotationWithTopics);
    onCloseModal();
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
  editQuotation: func.isRequired,
  isLoading: bool,
  onCloseModal: func,
  quotation: quotationType
};

editQuotationForm.defaultProps = {
  isLoading: false,
  onCloseModal: () => null,
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
