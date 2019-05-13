import React from 'react';
import { func, bool, number } from 'prop-types';
import { color } from 'utils';

import * as S from './style';

const likeButton = ({ likes, onClick, full }) => (
  <S.LikeButton data-testid="button-likes" full={full} onClick={onClick}>
    <S.Icon name="fullLove" color={color.action} />
    <span>
      <strong>{likes}</strong>
    </span>
  </S.LikeButton>
);

likeButton.propTypes = {
  onClick: func,
  full: bool,
  likes: number
};

likeButton.defaultProps = {
  onClick: () => null,
  full: false,
  likes: 0
};

export default likeButton;
