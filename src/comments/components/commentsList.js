import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import Comment from 'comments/components/Comment';
import { commentType } from 'comments/propTypes';
import { LikeButton, DeleteButton, EditButton, Toggle, Modal } from 'common';
import Confirmation from 'quotes/components/Confirmation';

const commentsList = ({
  comments,
  deleteClick,
  onLikeClick,
  onDislikeClick,
  user
}) => (
  <>
    {comments.map(comment => (
      <Comment
        comment={comment}
        key={comment.id}
        isEditButtonsDisplay={comment.author.id === user.id}
        likeButton={
          <LikeButton
            likes={comment.likesCount}
            full={user.id in comment.likes}
            click={
              user.id in comment.likes
                ? () => onDislikeClick(comment.id)
                : () => onLikeClick(comment.id)
            }
          />
        }
        deleteButton={
          <Toggle
            open={show => <DeleteButton click={show} />}
            content={hide => (
              <Modal close={hide}>
                <Confirmation
                  onCloseClick={hide}
                  onConfirmClick={() => deleteClick(comment.id)}
                />
              </Modal>
            )}
          />
        }
        editButton={<EditButton />}
      />
    ))}
  </>
);

commentsList.propTypes = {
  comments: arrayOf(commentType),
  deleteClick: func.isRequired,
  onDislikeClick: func.isRequired,
  onLikeClick: func.isRequired,
  user: shape({
    id: string.isRequired
  }).isRequired
};

commentsList.defaultProps = {
  comments: null
};

export default commentsList;
