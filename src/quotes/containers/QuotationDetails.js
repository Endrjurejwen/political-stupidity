import React, { Component } from 'react';
import Quotation from 'quotes/components/Quotation';
import CommentsContainer from 'comments/containers/CommentsContainer';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from 'redux-firestore';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import { Spinner } from 'common';
import {
  likeQuotation,
  dislikeQuotation,
  deleteQuotation
} from 'quotes/actions';

class QuotationDetails extends Component {
  componentWillUnmount = () => {
    this.props.dispatch({ type: actionTypes.CLEAR_DATA });
  };

  likeOrDislikeQuotationHandler = () => {
    const {
      match,
      quotation,
      auth,
      likeQuotation,
      dislikeQuotation
    } = this.props;

    if (!(auth.uid in quotation.likes)) {
      likeQuotation(match.params.id);
    }
    if (auth.uid in quotation.likes) {
      dislikeQuotation(match.params.id);
    }
  };

  deleteQuotationHandler = () => {
    const { match, history, deleteQuotation } = this.props;
    deleteQuotation(match.params.id);
    history.push('/home');
  };

  render() {
    const { quotation, auth } = this.props;
    if (!quotation) {
      return <Spinner />;
    }
    return (
      <>
        <Quotation
          quotation={quotation}
          userId={auth.uid}
          likeClick={this.likeOrDislikeQuotationHandler}
          deleteClick={this.deleteQuotationHandler}
        />
        <CommentsContainer />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { quotes } = state.firestore.data;
  const quotation = quotes ? quotes[id] : null;

  return {
    quotation,
    comments: state.firestore.ordered.comments,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      likeQuotation,
      dislikeQuotation,
      deleteQuotation
    },
    dispatch
  );

export default compose(
  withFirebase,
  firestoreConnect(props => [
    { collection: 'quotes', doc: props.match.params.id }
  ]),
  connect(
    mapStateToProps,
    mapDispatchToProps
    // ({ firestore }) => {
    //   return {
    //     quotes: firestore.ordered.quotes || []
    //   };
    // }
  )
)(QuotationDetails);
