import React, { useState, useEffect } from 'react';
import { func, bool, number } from 'prop-types';
import { color } from 'utils';

import * as S from './style';

const likeButton = ({ likes, onClick, isLiked }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const handleClick = () => {
    onClick();
    setIsAnimated(true);
  };

  useEffect(() => {
    setTimeout(() => setIsAnimated(false), 500);
  }, [isAnimated]);

  return (
    <S.LikeButton
      data-testid="button-likes"
      isLiked={isLiked}
      isAnimated={isAnimated}
      onClick={handleClick}
    >
      <S.Icon name="fullLove" color={color.action} />
      <span>
        <strong>{likes}</strong>
      </span>
      <S.HiddenLabel>Polub lub przestań lubić</S.HiddenLabel>
    </S.LikeButton>
  );
};

likeButton.propTypes = {
  isLiked: bool,
  likes: number,
  onClick: func
};

likeButton.defaultProps = {
  isLiked: false,
  likes: 0,
  onClick: () => null
};

export default likeButton;
