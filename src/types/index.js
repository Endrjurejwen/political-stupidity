import PropTypes from 'prop-types';

export const quotationType = PropTypes.shape({
  politician: PropTypes.string.isRequired,
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  commentsCount: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  createAt: PropTypes.object.isRequired,
  id: PropTypes.string,
  likes: PropTypes.object.isRequired,
  likesCount: PropTypes.number.isRequired
});

export const commentType = PropTypes.shape({
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  content: PropTypes.string.isRequired,
  createAt: PropTypes.object.isRequired,
  id: PropTypes.string,
  likes: PropTypes.object.isRequired,
  likesCount: PropTypes.number.isRequired
});

export const firebaseType = PropTypes.objectOf(
  PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ])
);
