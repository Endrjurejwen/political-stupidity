import React, { useState } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createQuotation } from 'app/quotes/operations';
import { getIsLoadingState } from 'app/quotes/selectors';
import { spacing } from 'utils';
import { WithLoader } from 'app/common';
import QuotationForm from 'app/quotes/components/QuotationForm';

import * as S from 'elements';

const CHECKBOXES_VALUES = {
  historia: false,
  przyroda: false
};

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
    // event.preventDefault();
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

// import React, { useState } from 'react';
// import { func, bool } from 'prop-types';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { createQuotation } from 'quotes/actions';
// import { getIsLoadingState } from 'quotes/selectors';
// import { spacing } from 'utils';
// import { WithLoader } from 'common';
// import { H3 } from 'elements';
// import QuotationForm from 'quotes/components/QuotationForm';

// const createQuotationForm = ({ createQuotation, closeModal, isLoading }) => {
//   const [content, setContent] = useState('');
//   const [politician, setPolitician] = useState('');

//   const setNewQuotation = () => ({ content, politician });

//   const handleCreateQuotationSubmit = event => {
//     const newQuotation = setNewQuotation();
//     event.preventDefault();
//     createQuotation(newQuotation).then(res => res && closeModal());
//   };

//   return (
//     <WithLoader isLoading={isLoading}>
//       <H3 center marginBottom={spacing[3]}>
//         Stwórz cytat
//       </H3>
//       <QuotationForm
//         onQuotationSubmit={handleCreateQuotationSubmit}
//         onContentChange={setContent}
//         onPoliticianChange={setPolitician}
//         content={content}
//         politician={politician}
//       />
//     </WithLoader>
//   );
// };

// createQuotationForm.propTypes = {
//   closeModal: func,
//   createQuotation: func.isRequired,
//   isLoading: bool
// };

// createQuotationForm.defaultProps = {
//   closeModal: () => null,
//   isLoading: false
// };

// const mapStateToProps = state => ({
//   isLoading: getIsLoadingState(state)
// });

// export default withRouter(
//   connect(
//     mapStateToProps,
//     { createQuotation }
//   )(createQuotationForm)
// );
