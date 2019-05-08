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
  // const [content, setContent] = useState(quotation.content);
  // const [politician, setPolitician] = useState(quotation.politician);

  // const setNewQuotation = () => ({ content, politician });

  // const handleEditQuotationSubmit = event => {
  //   const newQuotation = setNewQuotation();
  //   event.preventDefault();
  //   editQuotation(quotation.id, newQuotation);
  //   closeModal();
  // };

  const newCheckboxesValues = quotation.topics.reduce((acc, current) => {
    if (current in acc) {
      acc = {
        ...acc,
        [current]: true
      }
    };
    return acc;
  }, CHECKBOXES_VALUES);
  console.log(newCheckboxesValues);

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
    console.log(newQuotationWithTopics);
    editQuotation(quotation.id, newQuotationWithTopics);
    closeModal();
  };

  return (
    <WithLoader isLoading={isLoading}>
      <H3 center marginBottom={spacing[3]}>
        Edytuj cytat
      </H3>
      <QuotationForm
        onQuotationSubmit={handleEditQuotationSubmit}
        onInputChange={handleInputChange}
        // onPoliticianChange={setPolitician}
        isLoading={isLoading}
        buttonLabel="Zapisz zmiany"
        // historia={newQuotation.historia}
        // przyroda={newQuotation.przyroda}
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
