import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import CommmentsList from 'comments/components/CommentsList';
import CreateComment from 'comments/components/CreateComment';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from 'redux-firestore';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import { commentType } from 'types';
import { WithLoader, WithEmptyInfo } from 'hoc';
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

  static propTypes = {
    actions: PropTypes.shape({
      createComment: PropTypes.func.isRequired,
      deleteComment: PropTypes.func.isRequired,
      likeComment: PropTypes.func.isRequired,
      dislikeComment: PropTypes.func.isRequired
    }).isRequired,
    comments: PropTypes.arrayOf(commentType),
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string
    }),
    match: ReactRouterPropTypes.match.isRequired
  };

  static defaultProps = {
    comments: null,
    user: null
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
    const { actions, match } = this.props;
    const quotationID = match.params.id;
    event.preventDefault();
    actions.createComment(quotationID, this.state);
    this.setState({
      content: ''
    });
  };

  deleteCommentHandler = commentId => {
    const { match, actions } = this.props;
    actions.deleteComment(match.params.id, commentId);
  };

  likeOrDislikeCommentHandler = commentId => {
    const { user, comments, actions, match } = this.props;
    const comment = comments.find(comment => comment.id === commentId);
    if (!(user.id in comment.likes)) {
      actions.likeComment(match.params.id, commentId);
    }
    if (user.id in comment.likes) {
      actions.dislikeComment(match.params.id, commentId);
    }
  };

  render() {
    const { comments, user } = this.props;
    const { content } = this.state;
    return (
      <section>
        <Title>Komentarze</Title>
        <WithLoader isLoading={!comments}>
          <WithEmptyInfo
            isEmpty={!comments || !comments.length}
            info={<H5 center>Jeszcze nikt nie dodał komentarza</H5>}
          >
            <CommmentsList
              comments={comments}
              user={user}
              deleteClick={this.deleteCommentHandler}
              likeClick={this.likeOrDislikeCommentHandler}
            />
          </WithEmptyInfo>
        </WithLoader>
        <CreateComment
          commentValue={content}
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
    user: {
      id: state.firebase.auth.uid
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        createComment,
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

// let commentsBox;
// if (!comments) {
//   commentsBox = <Spinner />;
// }
// if (comments && !comments.length) {
//   commentsBox = <H5 center>Jeszcze nikt nie dodał komentarza</H5>;
// }
// if (comments && comments.length) {
// commentsBox = (
//   <WithLoader isLoading={!comments}>
//     <WithEmptyInfo
//       isEmpty={!comments || !comments.length}
//       info={<H5 center>Jeszcze nikt nie dodał komentarza</H5>}
//     >
//       <CommmentsList
//         comments={comments}
//         userId={authId}
//         deleteClick={this.deleteCommentHandler}
//         likeClick={this.likeOrDislikeCommentHandler}
//       />
//     </WithEmptyInfo>
//   </WithLoader>
// );
// }
