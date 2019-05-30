import React, { useState } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createQuotation } from 'app/quotes/operations';
import { getIsLoadingState } from 'app/quotes/selectors';
import { spacing } from 'utils';
import { WithLoader } from 'app/common';
import { CHECKBOXES_VALUES } from 'app/quotes/containers/CreateQuotation';
import QuotationForm from 'app/quotes/components/QuotationForm';

import * as S from 'elements';

export const createQuotationForm = ({
  createQuotation,
  onCloseModal,
  isLoading
}) => {
  const [newQuotation, setNewQuotation] = useState({
    content: '',
    politician: '',
    ...CHECKBOXES_VALUES
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
      topics: topicsArray.length ? topicsArray : ['Wiedza ogólna']
    };
    return newQuotationWithTopics;
  };

  const handleCreateQuotationSubmit = () => {
    const newQuotationWithTopics = setNewQuotationWithTopics();
    createQuotation(newQuotationWithTopics).then(res => res && onCloseModal());
  };

  return (
    <WithLoader isLoading={isLoading}>
      <S.H3 center marginBottom={spacing[3]}>
        Stwórz cytat
      </S.H3>
      <QuotationForm
        onQuotationSubmit={handleCreateQuotationSubmit}
        onInputChange={handleInputChange}
        newQuotation={newQuotation}
      />
    </WithLoader>
  );
};

createQuotationForm.propTypes = {
  createQuotation: func.isRequired,
  isLoading: bool,
  onCloseModal: func
};

createQuotationForm.defaultProps = {
  isLoading: false,
  onCloseModal: () => null
};

const mapStateToProps = state => ({
  isLoading: getIsLoadingState(state)
});

export default withRouter(
  connect(
    mapStateToProps,
    { createQuotation }
  )(createQuotationForm)
);
