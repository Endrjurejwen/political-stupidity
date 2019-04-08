import React, { Component } from 'react';
import { shape, func } from 'prop-types';
import { history } from 'react-router-prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createQuotation, editQuotation } from 'quotes/actions';
import { getIsLoadingState } from 'quotes/selectors';
import { spacing, flexCenter } from 'utils';
import { InputBox, TextareaBox, WithLoader } from 'common';
import { H2, Button } from 'elements';

class CreateQuotation extends Component {
  state = {
    content: this.props.quotation ? this.props.quotation.content : '',
    politician: this.props.quotation ? this.props.quotation.politician : ''
  };

  static propTypes = {
    actions: shape({
      createQuotation: func.isRequired
    }).isRequired,
    closeModal: func,
    history: history.isRequired
  };

  static defaultProps = {
    closeModal: () => null
  };

  hadleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  // handleSubmit = event => {
  //   const { actions, history, quotation } = this.props;
  //   event.preventDefault();
  //   if (quotation) {
  //     actions.editQuotation(quotation.id, this.state);
  //   } else {
  //     actions.createQuotation(this.state);
  //   }
  //   // actions.createQuotation(this.state);
  //   this.setState({
  //     content: '',
  //     politician: ''
  //   });
  //   history.push('/quotes');
  // };

  handleEditQuotationSubmit = event => {
    const { actions, history, quotation, closeModal } = this.props;
    event.preventDefault();
    actions.editQuotation(quotation.id, this.state);
    this.setState({
      content: '',
      politician: ''
    });
    closeModal();
    // history.push('/quotes');
  };

  handleCreateQuotationSubmit = event => {
    const { actions, history, closeModal } = this.props;
    event.preventDefault();
    actions.createQuotation(this.state).then(res => res && closeModal());
    this.setState({
      content: '',
      politician: ''
    });
    // history.push('/quotes');
  };

  render() {
    const { content, politician } = this.state;
    const { quotation, isLoading } = this.props;
    return (
      <WithLoader isLoading={isLoading}>
        <Form
          onSubmit={
            quotation
              ? this.handleEditQuotationSubmit
              : this.handleCreateQuotationSubmit
          }
        >
          <H2 center marginBottom={spacing[4]}>
            Stwórz cytat
          </H2>
          <TextareaBox
            onChange={this.hadleChange}
            placeholder="Tutaj wpisz cytat"
            rows="5"
            cols="30"
            id="content"
            value={content}
            required
          />
          <InputBox
            onChange={this.hadleChange}
            placeholder="Autor cytatu"
            id="politician"
            value={politician}
            required
          />
          <Button type="submit">Opublikuj</Button>
        </Form>
      </WithLoader>
    );
  }
}

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
  )(CreateQuotation)
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
// import { shape, func } from 'prop-types';
// import { history } from 'react-router-prop-types';
// import styled from 'styled-components';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { createQuotation } from 'quotes/actions';
// import { spacing, flexCenter } from 'utils';
// import { InputBox, TextareaBox } from 'common';
// import { H2, Button } from 'elements';

// class CreateQuotation extends Component {
//   state = {
//     content: '',
//     politician: ''
//   };

//   static propTypes = {
//     actions: shape({
//       createQuotation: func.isRequired
//     }).isRequired,
//     history: history.isRequired
//   };

//   hadleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   };

//   handleSubmit = event => {
//     const { actions, history } = this.props;
//     event.preventDefault();
//     actions.createQuotation(this.state);
//     this.setState({
//       content: '',
//       politician: ''
//     });
//     history.push('/quotes');
//   };

//   render() {
//     const { content, politician } = this.state;
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <H2 center marginBottom={spacing[4]}>
//           Stwórz cytat
//         </H2>
//         <TextareaBox
//           onChange={this.hadleChange}
//           placeholder="Tutaj wpisz cytat"
//           rows="5"
//           cols="30"
//           id="content"
//           value={content}
//           required
//         />
//         <InputBox
//           onChange={this.hadleChange}
//           placeholder="Autor cytatu"
//           id="politician"
//           value={politician}
//           required
//         />
//         <Button type="submit">Opublikuj</Button>
//       </Form>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(
//       {
//         createQuotation
//       },
//       dispatch
//     )
//   };
// };

// export default withRouter(
//   connect(
//     null,
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
