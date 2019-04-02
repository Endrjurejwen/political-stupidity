import React, { Component } from 'react';
import { shape, func, element, string } from 'prop-types';
import { match, history } from 'react-router-prop-types';
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
    actions: shape({
      deleteQuotation: func.isRequired,
      dislikeQuotation: func.isRequired,
      likeQuotation: func.isRequired
    }).isRequired,
    children: element,
    dispatch: func.isRequired,
    history: history.isRequired,
    match: match.isRequired,
    quotation: quotationType,
    user: shape({
      id: string
    })
  };

  static defaultProps = {
    children: null,
    quotation: null,
    user: null
  };

  componentWillUnmount = () => {
    this.props.dispatch({ type: actionTypes.CLEAR_DATA });
  };

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
    history.push('/quotes');
  };

  handleNavigateReturn = () => {
    this.props.history.push({
      pathname: '/quotes',
      state: this.props.location.state
    });
  }

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
        <button onClick={this.handleNavigateReturn}>powrót</button>
        {children}
      </WithLoader>
    );
  }
}

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
