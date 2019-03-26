import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Quotation from 'quotes/components/Quotation';
import CommentsApp from 'comments/containers/CommentsApp';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from 'redux-firestore';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import { quotationType } from 'quotes/types';
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
    user: PropTypes.shape({
      id: PropTypes.string
    }),
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.shape({
      likeQuotation: PropTypes.func.isRequired,
      dislikeQuotation: PropTypes.func.isRequired,
      deleteQuotation: PropTypes.func.isRequired
    }).isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    match: ReactRouterPropTypes.match.isRequired
  };

  static defaultProps = {
    quotation: null,
    user: null
  };

  componentWillUnmount = () => {
    this.props.dispatch({ type: actionTypes.CLEAR_DATA });
  };

  likeOrDislikeQuotationHandler = () => {
    const { match, quotation, user, actions } = this.props;

    if (!(user.id in quotation.likes)) {
      actions.likeQuotation(match.params.id);
    }
    if (user.id in quotation.likes) {
      actions.dislikeQuotation(match.params.id);
    }
  };

  deleteQuotationHandler = () => {
    const { match, history, actions } = this.props;
    actions.deleteQuotation(match.params.id);
    history.push('/home');
  };

  render() {
    const { quotation, user } = this.props;
    return (
      <WithLoader isLoading={!quotation}>
        <Quotation
          quotation={quotation}
          closeButton={
            <CloseButton
              click={this.deleteQuotationHandler}
              isDisplay={!quotation || quotation.author.id === user.id}
            />
          }
        >
          <Button secondary>Zobacz źródło</Button>
          <LikeButton
            likes={!quotation ? 0 : quotation.likesCount}
            click={this.likeOrDislikeQuotationHandler}
            full={!quotation || user.id in quotation.likes}
          />
        </Quotation>
        <CommentsApp />
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
    user: {
      id: state.firebase.auth.uid
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        likeQuotation,
        dislikeQuotation,
        deleteQuotation
      },
      dispatch
    )
  };
};

export default compose(
  withRouter,
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
