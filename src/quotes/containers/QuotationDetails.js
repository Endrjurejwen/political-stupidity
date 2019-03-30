import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Quotation from 'quotes/components/Quotation';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from 'redux-firestore';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import { getUserInfoState } from 'auth/selectors';
import { makeGetQuotationState } from 'quotes/selectors';
import { quotationType } from 'quotes/propTypes';
import { LikeButton, CloseButton, WithLoader } from 'common';
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
    children: PropTypes.element,
    history: ReactRouterPropTypes.history.isRequired,
    match: ReactRouterPropTypes.match.isRequired
  };

  static defaultProps = {
    quotation: null,
    user: null,
    children: null
  };

  componentWillUnmount = () => {
    this.props.dispatch({ type: actionTypes.CLEAR_DATA });
  };

  // likeOrDislikeQuotationHandler = () => {
  //   const { match, quotation, user, actions } = this.props;

  //   if (!(user.id in quotation.likes)) {
  //     actions.likeQuotation(match.params.id);
  //   }
  //   if (user.id in quotation.likes) {
  //     actions.dislikeQuotation(match.params.id);
  //   }
  // };

  handleLikeClick = () => {
    const { match, actions } = this.props;
    actions.likeQuotation(match.params.id);
  };

  handleDislikeClick = () => {
    const { match, actions } = this.props;
    actions.dislikeQuotation(match.params.id);
  };

  handleDeleteClick = () => {
    const { match, history, actions } = this.props;
    actions.deleteQuotation(match.params.id);
    history.push('/home');
  };

  render() {
    const { quotation, user, children } = this.props;
    return (
      <WithLoader isLoading={!quotation}>
        <Quotation
          quotation={quotation}
          closeButton={
            <CloseButton
              click={this.handleDeleteClick}
              isDisplay={!quotation || quotation.author.id === user.id}
            />
          }
        >
          <Button secondary>Zobacz źródło</Button>
          <LikeButton
            likes={!quotation ? 0 : quotation.likesCount}
            full={!quotation || user.id in quotation.likes}
            click={
              !quotation || user.id in quotation.likes
                ? this.handleDislikeClick
                : this.handleLikeClick
            }
          />
        </Quotation>
        {children}
      </WithLoader>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   const { id } = ownProps.match.params;
//   const { quotes } = state.firestore.data;
//   const quotation = quotes ? quotes[id] : null;

//   return {
//     quotation,
//     user: {
//       id: state.firebase.auth.uid
//     }
//   };
// };

const makeMapStateToProps = () => {
  const getQuotationState = makeGetQuotationState();
  const mapStateToProps = (state, ownProps) => {
    return {
      quotation: getQuotationState(state, ownProps),
      user: getUserInfoState(state)
    };
  };
  return mapStateToProps;
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
  firestoreConnect([{ collection: 'quotes' }]),
  connect(
    makeMapStateToProps,
    mapDispatchToProps
  )
)(QuotationDetails);
