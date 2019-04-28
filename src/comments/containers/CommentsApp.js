import React, { Component } from 'react';
import { shape, arrayOf, func, string } from 'prop-types';
import { match } from 'react-router-prop-types';
import styled from 'styled-components';
import CommmentsList from 'comments/components/CommentsList';
import CreateComment from 'comments/components/CreateComment';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from 'redux-firestore';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import { getUserInfoState } from 'auth/selectors';
import { getCommentsState } from 'comments/selectors';
import { makeGetQuotationState } from 'quotes/selectors';
import { commentType } from 'comments/propTypes';
import { WithLoader, WithEmptyInfo } from 'common';
import { H2, H5, Card } from 'elements';
import { spacing } from 'utils';
import {
  // createComment,
  deleteComment,
  likeComment,
  dislikeComment
} from 'comments/actions';

class CommentsContainer extends Component {
  // state = {
  //   content: ''
  // };

  static propTypes = {
    actions: shape({
      createComment: func.isRequired,
      deleteComment: func.isRequired,
      likeComment: func.isRequired,
      dislikeComment: func.isRequired
    }).isRequired,
    comments: arrayOf(commentType),
    dispatch: func.isRequired,
    match: match.isRequired,
    user: shape({
      id: string
    })
  };

  static defaultProps = {
    comments: null,
    user: null
  };

  componentWillUnmount = () => {
    this.props.dispatch({ type: actionTypes.CLEAR_DATA });
  };

  // resetTextareaSize = () => {
  //   const element = document.querySelector('.resizeTextArea');
  //   element.style.height = 'inherit';
  // };

  // handleChange = event => {
  //   this.setState({
  //     content: event.target.value
  //   });
  // };

  // handleSubmit = event => {
  //   this.resetTextareaSize();

  //   const { actions, match } = this.props;
  //   const quotationID = match.params.id;
  //   event.preventDefault();
  //   actions.createComment(quotationID, this.state);
  //   this.setState({
  //     content: ''
  //   });
  // };

  handleDeleteClick = commentId => {
    const { match, actions } = this.props;
    actions.deleteComment(match.params.id, commentId);
  };

  handleLikeClick = commentId => {
    const { match, actions } = this.props;
    actions.likeComment(match.params.id, commentId);
  };

  handleDislikeClick = commentId => {
    const { match, actions } = this.props;
    actions.dislikeComment(match.params.id, commentId);
  };

  render() {
    const { comments, user } = this.props;
    // const { content } = this.state;
    return (
      <>
        <CreateComment />
        <WithLoader isLoading={!comments}>
          <WithEmptyInfo
            isEmpty={!comments || !comments.length}
            info={<H5 center>Jeszcze nikt nie dodał komentarza</H5>}
          >
            <CommmentsList
              comments={comments}
              user={user}
              deleteClick={this.handleDeleteClick}
              onLikeClick={this.handleLikeClick}
              onDislikeClick={this.handleDislikeClick}
            />
            {comments && comments.length > 5 && <CreateComment />}
          </WithEmptyInfo>
        </WithLoader>
      </>
    );
  }
}

const makeMapStateToProps = () => {
  const getQuotationState = makeGetQuotationState();
  const mapStateToProps = (state, ownProps) => {
    return {
      quotation: getQuotationState(state, ownProps),
      comments: getCommentsState(state),
      user: getUserInfoState(state)
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        // createComment,
        deleteComment,
        likeComment,
        dislikeComment
      },
      dispatch
    )
  };
};

export default compose(
  withRouter,
  withFirebase,
  firestoreConnect(props => [
    {
      collection: 'quotes',
      doc: props.match.params.id,
      subcollections: [{ collection: 'comments' }],
      orderBy: ['createAt', 'asc'],
      storeAs: 'comments'
    }
  ]),
  connect(
    makeMapStateToProps,
    mapDispatchToProps
  )
)(CommentsContainer);
