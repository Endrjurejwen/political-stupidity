import React, { useEffect } from 'react';
import { arrayOf, func } from 'prop-types';
import CommmentsList from 'app/comments/components/CommentsList';
import CreateComment from 'app/comments/containers/CreateComment';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from 'redux-firestore';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import { getCommentsState } from 'app/comments/selectors';
import { makeGetQuotationState } from 'app/quotes/selectors';
import { commentType } from 'app/comments/propTypes';
import { WithLoader, WithEmptyInfo, withErrorHandler } from 'app/common';
import { H5 } from 'elements';
import { resetCommentsError } from 'app/comments/actions';

export const commentsApp = ({ comments, dispatch }) => {
  useEffect(() => {
    return () => {
      dispatch({ type: actionTypes.CLEAR_DATA });
    };
  }, []);

  return (
    <>
      <CreateComment />
      <WithLoader isLoading={!comments}>
        <WithEmptyInfo
          isEmpty={!comments || !comments.length}
          info={<H5 center>Jeszcze nikt nie dodał komentarza</H5>}
        >
          <CommmentsList comments={comments} />
          {comments && comments.length > 5 && <CreateComment />}
        </WithEmptyInfo>
      </WithLoader>
    </>
  );
};

commentsApp.propTypes = {
  comments: arrayOf(commentType),
  dispatch: func.isRequired
};

commentsApp.defaultProps = {
  comments: null
};

const makeMapStateToProps = () => {
  const getQuotationState = makeGetQuotationState();
  const mapStateToProps = (state, ownProps) => {
    return {
      quotation: getQuotationState(state, ownProps),
      comments: getCommentsState(state),
      error: state.comments.error
    };
  };
  return mapStateToProps;
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
    { resetCommentsError }
  ),
  withErrorHandler({ actionName: 'resetCommentsError' })
)(commentsApp);
