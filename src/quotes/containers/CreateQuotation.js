import React, { useState } from 'react';
import { shape, func, bool } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createQuotation } from 'quotes/actions';
import { getIsLoadingState } from 'quotes/selectors';
import { quotationType } from 'quotes/propTypes';
import { spacing } from 'utils';
import { WithLoader } from 'common';
import { H3 } from 'elements';
import QuotationForm from 'quotes/components/QuotationForm';

const createQuotationForm = ({ actions, closeModal, isLoading, quotation }) => {
  const [content, setContent] = useState('');
  const [politician, setPolitician] = useState('');

  const setNewQuotation = () => ({ content, politician });

  const handleCreateQuotationSubmit = event => {
    const newQuotation = setNewQuotation();
    event.preventDefault();
    actions.createQuotation(newQuotation).then(res => res && closeModal());
  };

  return (
    <WithLoader isLoading={isLoading}>
      <H3 center marginBottom={spacing[3]}>
        Stwórz cytat
      </H3>
      <QuotationForm
        onQuotationSubmit={handleCreateQuotationSubmit}
        onContentChange={setContent}
        onPoliticianChange={setPolitician}
        isLoading={isLoading}
        content={content}
        politician={politician}
        buttonLabel="Opublikuj"
      />
    </WithLoader>
  );
};

createQuotationForm.propTypes = {
  actions: shape({
    createQuotation: func.isRequired
  }).isRequired,
  closeModal: func,
  isLoading: bool,
  quotation: quotationType
};

createQuotationForm.defaultProps = {
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
        createQuotation
      },
      dispatch
    )
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(createQuotationForm)
);

// import React, { useState, useRef } from 'react';
// import { shape, func, bool } from 'prop-types';
// import styled from 'styled-components';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { createQuotation, editQuotation } from 'quotes/actions';
// import { getIsLoadingState } from 'quotes/selectors';
// import { quotationType } from 'quotes/propTypes';
// import { spacing, flexCenter } from 'utils';
// import { InputBox, TextareaBox, WithLoader, useAutoFocus } from 'common';
// import { H2, Button } from 'elements';

// const createQuotationForm = ({ actions, closeModal, isLoading, quotation }) => {
//   const [content, setContent] = useState(quotation ? quotation.content : '');
//   const [politician, setPolitician] = useState(
//     quotation ? quotation.politician : ''
//   );
//   const autoFocusRef = useRef(null);
//   useAutoFocus(autoFocusRef);

//   const setNewQuotation = () => ({ content, politician });

//   const handleEditQuotationSubmit = event => {
//     const newQuotation = setNewQuotation();
//     event.preventDefault();
//     actions.editQuotation(quotation.id, newQuotation);
//     closeModal();
//   };

//   const handleCreateQuotationSubmit = event => {
//     const newQuotation = setNewQuotation();
//     event.preventDefault();
//     actions.createQuotation(newQuotation).then(res => res && closeModal());
//   };

//   return (
//     <WithLoader isLoading={isLoading}>
//       <Form
//         onSubmit={
//           quotation ? handleEditQuotationSubmit : handleCreateQuotationSubmit
//         }
//       >
//         <H2 center marginBottom={spacing[4]}>
//           {quotation ? 'Edytuj cytat' : 'Stwórz cytat'}
//         </H2>
//         <TextareaBox
//           marginBottom={spacing[3]}
//           ref={autoFocusRef}
//           onChange={event => setContent(event.target.value)}
//           placeholder="Tutaj wpisz cytat"
//           cols="30"
//           id="content"
//           value={content}
//           required
//         />
//         <InputBox
//           onChange={event => setPolitician(event.target.value)}
//           placeholder="Autor cytatu"
//           id="politician"
//           value={politician}
//           required
//         />
//         <Button type="submit">
//           {quotation ? 'Zapisz zmiany' : 'Opublikuj'}
//         </Button>
//       </Form>
//     </WithLoader>
//   );
//   // }
// };

// createQuotationForm.propTypes = {
//   actions: shape({
//     createQuotation: func.isRequired
//   }).isRequired,
//   closeModal: func,
//   isLoading: bool,
//   quotation: quotationType
// };

// createQuotationForm.defaultProps = {
//   closeModal: () => null,
//   isLoading: false,
//   quotation: null
// };

// const mapStateToProps = state => ({
//   isLoading: getIsLoadingState(state)
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(
//       {
//         createQuotation,
//         editQuotation
//       },
//       dispatch
//     )
//   };
// };

// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(createQuotationForm)
// );

// const Form = styled.form`
//   /* max-width: 30rem; */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* ${flexCenter}; */
//   /* flex-direction: column; */

//   margin: ${spacing[4]} auto 0;
// `;
