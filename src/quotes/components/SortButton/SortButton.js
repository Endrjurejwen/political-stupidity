import React from 'react';
import { func } from 'prop-types';
import { sortPropTypes } from 'quotes/propTypes';

import * as S from './style';

const sortButton = ({
  sortType: { active, order, name, label },
  onSortClick
}) => (
  <S.SortButton
    isActive={active}
    asc={active && order === 'asc'}
    data-sortby={name}
    onClick={onSortClick}
  >
    {label}
  </S.SortButton>
);

sortButton.propTypes = {
  onSortClick: func,
  sortType: sortPropTypes
};

sortButton.defaultProps = {
  onSortClick: () => null,
  sortType: null
};

export default sortButton;
