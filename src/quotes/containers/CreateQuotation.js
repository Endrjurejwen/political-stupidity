import React, { useState, useRef } from 'react';
import { shape, func, bool } from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createQuotation, editQuotation } from 'quotes/actions';
import { getIsLoadingState } from 'quotes/selectors';
import { quotationType } from 'quotes/propTypes';
import { spacing, flexCenter } from 'utils';
import { InputBox, TextareaBox, WithLoader, useAutoFocus } from 'common';
import { H2, Button } from 'elements';

const createQuotationForm = ({ actions, closeModal, isLoading, quotation }) => {
  const [content, setContent] = useState(quotation ? quotation.content : '');
  const [politician, setPolitician] = useState(
    quotation ? quotation.politician : ''
  );
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  // useEffect(() => {
  //   const focusedElementBeforeModal = document.activeElement;
  //   if (autoFocusRef.current) {
  //     autoFocusRef.current.focus();
  //   }
  //   return () => {
  //     focusedElementBeforeModal.focus();
  //   };
  // }, [autoFocusRef]);

  const setNewQuotation = () => ({ content, politician });

  const handleEditQuotationSubmit = event => {
    const newQuotation = setNewQuotation();
    event.preventDefault();
    actions.editQuotation(quotation.id, newQuotation);
    closeModal();
  };

  const handleCreateQuotationSubmit = event => {
    const newQuotation = setNewQuotation();
    event.preventDefault();
    actions.createQuotation(newQuotation).then(res => res && closeModal());
  };

  return (
    <WithLoader isLoading={isLoading}>
      <Form
        onSubmit={
          quotation ? handleEditQuotationSubmit : handleCreateQuotationSubmit
        }
      >
        <H2 center marginBottom={spacing[4]}>
          Stwórz cytat
        </H2>
        <TextareaBox
          ref={autoFocusRef}
          onChange={event => setContent(event.target.value)}
          placeholder="Tutaj wpisz cytat"
          // rows="5"
          cols="30"
          id="content"
          value={content}
          required
        />
        <InputBox
          onChange={event => setPolitician(event.target.value)}
          placeholder="Autor cytatu"
          id="politician"
          value={politician}
          required
        />
        <Button type="submit">Opublikuj</Button>
      </Form>
    </WithLoader>
  );
  // }
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
        createQuotation,
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
  )(createQuotationForm)
);

const Form = styled.form`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* ${flexCenter}; */
  /* flex-direction: column; */
  
  margin: ${spacing[4]} auto 0;
`;

// import React, { Component } from 'react';
// import { shape, func, bool } from 'prop-types';
// import styled from 'styled-components';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { createQuotation, editQuotation } from 'quotes/actions';
// import { getIsLoadingState } from 'quotes/selectors';
// import { quotationType } from 'quotes/propTypes';
// import { spacing, flexCenter } from 'utils';
// import { InputBox, TextareaBox, WithLoader } from 'common';
// import { H2, Button } from 'elements';

// class CreateQuotation extends Component {
//   state = {
//     content: this.props.quotation ? this.props.quotation.content : '',
//     politician: this.props.quotation ? this.props.quotation.politician : ''
//   };

//   static propTypes = {
//     actions: shape({
//       createQuotation: func.isRequired
//     }).isRequired,
//     closeModal: func,
//     isLoading: bool,
//     quotation: quotationType
//   };

//   static defaultProps = {
//     closeModal: () => null,
//     isLoading: false,
//     quotation: null
//   };

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   };

//   handleEditQuotationSubmit = event => {
//     const { actions, quotation, closeModal } = this.props;
//     event.preventDefault();
//     actions.editQuotation(quotation.id, this.state);
//     this.setState({
//       content: '',
//       politician: ''
//     });
//     closeModal();
//   };

//   handleCreateQuotationSubmit = event => {
//     const { actions, closeModal } = this.props;
//     event.preventDefault();
//     actions.createQuotation(this.state).then(res => res && closeModal());
//     this.setState({
//       content: '',
//       politician: ''
//     });
//   };

//   render() {
//     const { content, politician } = this.state;
//     const { quotation, isLoading } = this.props;
//     return (
//       <WithLoader isLoading={isLoading}>
//         <Form
//           onSubmit={
//             quotation
//               ? this.handleEditQuotationSubmit
//               : this.handleCreateQuotationSubmit
//           }
//         >
//           <H2 center marginBottom={spacing[4]}>
//             Stwórz cytat
//           </H2>
//           <TextareaBox
//             onChange={this.handleChange}
//             placeholder="Tutaj wpisz cytat"
//             // rows="5"
//             cols="30"
//             id="content"
//             value={content}
//             required
//           />
//           <InputBox
//             onChange={this.handleChange}
//             placeholder="Autor cytatu"
//             id="politician"
//             value={politician}
//             required
//           />
//           <Button type="submit">Opublikuj</Button>
//         </Form>
//       </WithLoader>
//     );
//   }
// }

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
//   )(CreateQuotation)
// );

// const Form = styled.form`
//   max-width: 30rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* ${flexCenter}; */
//   /* flex-direction: column; */

//   margin: ${spacing[4]} auto 0;
// `;
