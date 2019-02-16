import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Comment from 'comments/components/Comment';

const quotesList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </div>
);

quotesList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

// quotation.defaultProps = {

// };

export default quotesList;
