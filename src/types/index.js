import PropTypes from 'prop-types';

export const quotationType = PropTypes.shape({
  author: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  createAt: PropTypes.object.isRequired,
  id: PropTypes.string,
  likes: PropTypes.object.isRequired,
  likesCount: PropTypes.number.isRequired,
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string
});

export const commentType = PropTypes.shape({
  authorId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createAt: PropTypes.object.isRequired,
  id: PropTypes.string,
  likes: PropTypes.object.isRequired,
  likesCount: PropTypes.number.isRequired,
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string.isRequired
});

export const firebaseType = PropTypes.objectOf(
  PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ])
);
