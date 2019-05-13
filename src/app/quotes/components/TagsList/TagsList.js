import React from 'react';
import { arrayOf, string } from 'prop-types';

import * as S from './style';

const tagsList = ({ topics }) => (
  <S.TagsWrapper>
    <S.Title>Temat:</S.Title>
    {topics.map(topic => (
      <S.Tag key={topic}>{topic}</S.Tag>
    ))}
  </S.TagsWrapper>
);

tagsList.propTypes = {
  topics: arrayOf(string)
};

tagsList.defaultProps = {
  topics: null
};

export default tagsList;
