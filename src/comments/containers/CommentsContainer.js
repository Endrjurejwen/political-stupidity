import React, { Component } from 'react';
import styled from 'styled-components';
import CommmentsList from 'comments/components/CommentsList';
import CreateComment from 'comments/components/CreateComment';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from 'redux-firestore';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import { Spinner } from 'common';
import { H2, H5 } from 'elements';
import { spacing } from 'utils';
import {
  createComment,
  deleteComment,
  likeComment,
  dislikeComment
} from 'comments/actions';

class CommentsContainer extends Component {
  state = {
    content: ''
  };

  componentWillUnmount = () => {
    this.props.dispatch({ type: actionTypes.CLEAR_DATA });
  };

  changeCommentHandler = event => {
    this.setState({
      content: event.target.value
    });
  };

  submitCommentHandler = event => {
    const { createComment, match } = this.props;
    const quotationID = match.params.id;
    event.preventDefault();
    console.log(this.state);
    createComment(quotationID, this.state);
    this.setState({
      content: ''
    });
  };

  deleteCommentHandler = commentId => {
    const { match, deleteComment } = this.props;
    deleteComment(match.params.id, commentId);
  };

  likeOrDislikeCommentHandler = commentId => {
    const { auth, comments, likeComment, dislikeComment, match } = this.props;
    const comment = comments.find(comment => comment.id === commentId);
    if (!(auth.uid in comment.likes)) {
      likeComment(match.params.id, commentId);
    }
    if (auth.uid in comment.likes) {
      dislikeComment(match.params.id, commentId);
    }
  };

  render() {
    const { comments, auth } = this.props;
    let commentsBox;
    if (!comments) {
      commentsBox = <Spinner />;
    }
    if (comments && !comments.length) {
      commentsBox = <H5 center>Jeszcze nikt nie dodał komentarza</H5>;
    }
    if (comments && comments.length) {
      commentsBox = (
        <CommmentsList
          comments={comments}
          userId={auth.uid}
          deleteClick={this.deleteCommentHandler}
          likeClick={this.likeOrDislikeCommentHandler}
        />
      );
    }
    return (
      <section>
        <Title>Komentarze</Title>
        {commentsBox}
        <CreateComment
          commentValue={this.state.content}
          onCommentChange={this.changeCommentHandler}
          onCommentSubmit={this.submitCommentHandler}
        />
      </section>
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
      createComment,
      deleteComment,
      likeComment,
      dislikeComment
    },
    dispatch
  );

export default compose(
  withRouter,
  withFirebase,
  firestoreConnect(props => [
    {
      collection: 'quotes',
      doc: props.match.params.id,
      subcollections: [{ collection: 'comments' }],
      storeAs: 'comments'
    }
  ]),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CommentsContainer);

const Title = styled(H2)`
  text-align: center;
  margin-bottom: ${spacing[3]};
`;
