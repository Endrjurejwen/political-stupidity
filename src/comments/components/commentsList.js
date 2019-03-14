import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Comment from 'comments/components/Comment';

const commentsList = ({ comments, deleteClick, likeClick, userId }) => (
  <>
    {comments.map(comment => (
      <Comment
        comment={comment}
        key={comment.id}
        deleteClick={() => deleteClick(comment.id)}
        likeClick={() => likeClick(comment.id)}
        userId={userId}
      />
    ))}
  </>
);

commentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

// quotation.defaultProps = {

// };

export default commentsList;
