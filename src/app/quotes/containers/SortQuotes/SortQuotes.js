import React from 'react';
import { func, arrayOf } from 'prop-types';
import { sortPropTypes } from 'app/quotes/propTypes';
import { connect } from 'react-redux';
import SortButton from 'app/quotes/components/SortButton';
import { sortQuotes } from 'app/quotes/actions';
import { getSortTypesState } from 'app/quotes/selectors';

import * as S from './style';

export const sortQuotesContainer = ({ sortQuotes, sortTypes }) => {
  const handleSortClick = event => {
    const sortBy = event.target.dataset.sortby;
    sortQuotes(sortBy);
  };
  return (
    <S.SortButtonsList>
      {sortTypes.map(sortType => (
        <S.SortButtonListItem key={sortType.label}>
          <SortButton sortType={sortType} onSortClick={handleSortClick} />
        </S.SortButtonListItem>
      ))}
    </S.SortButtonsList>
  );
};

sortQuotesContainer.propTypes = {
  sortQuotes: func.isRequired,
  sortTypes: arrayOf(sortPropTypes)
};

sortQuotesContainer.defaultProps = {
  sortTypes: null
};

const mapStateToProps = state => ({
  sortTypes: getSortTypesState(state)
});

export default connect(
  mapStateToProps,
  { sortQuotes }
)(sortQuotesContainer);
