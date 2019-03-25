import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Quotation from 'quotes/components/Quotation';
import CommentsContainer from 'comments/containers/CommentsContainer';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from 'redux-firestore';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import { quotationType } from 'types';
import { WithLoader } from 'hoc';
import { LikeButton, CloseButton } from 'common';
import { Button } from 'elements';
import {
  likeQuotation,
  dislikeQuotation,
  deleteQuotation
} from 'quotes/actions';

class QuotationDetails extends Component {
  static propTypes = {
    quotation: quotationType,
    auth: PropTypes.shape().isRequired, // zamienić na userId
    dispatch: PropTypes.func.isRequired,
    likeQuotation: PropTypes.func.isRequired,
    dislikeQuotation: PropTypes.func.isRequired,
    deleteQuotation: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    match: ReactRouterPropTypes.match.isRequired
  };

  static defaultProps = {
    quotation: null
  };

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
    return (
      <WithLoader isLoading={!quotation}>
        <Quotation
          quotation={quotation}
          userId={auth.uid}
          closeButton={
            <CloseButton
              click={this.deleteQuotationHandler}
              isDisplay={!quotation || quotation.authorId === auth.uid}
            />
          }
        >
          <Button secondary>Zobacz źródło</Button>
          <LikeButton
            likes={!quotation || quotation.likesCount}
            click={this.likeOrDislikeQuotationHandler}
            full={!quotation || auth.uid in quotation.likes}
          />
        </Quotation>
        <CommentsContainer />
      </WithLoader>
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
