import React from 'react';
import { func, arrayOf } from 'prop-types';
import { sortPropTypes } from 'quotes/propTypes';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SortButton from 'quotes/components/SortButton';
import { flexCenter, spacing, media, color } from 'utils';
import { sortQuotes } from 'quotes/actions';
import { getSortTypesState } from 'quotes/selectors';

const sortQuotesContainer = ({ sortQuotes, sortTypes }) => {
  const handleSortClick = event => {
    const sortBy = event.target.dataset.sortby;
    sortQuotes(sortBy);
  };
  return (
    <SortButtonsList>
      {sortTypes.map(sortType => (
        <SortButtonListItem key={sortType.label}>
          <SortButton sortType={sortType} onSortClick={handleSortClick} />
        </SortButtonListItem>
      ))}
    </SortButtonsList>
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

const SortButtonsList = styled.ul`
  list-style: none;
  ${flexCenter({ justifyContent: 'center', alignItems: 'start' })};
  flex-wrap: wrap;
  margin-bottom: ${spacing[2]};

  ${media.phone`
    margin-bottom: 0;
    /* border-right: 2px solid ${color.action}; */
  `}
`;

const SortButtonListItem = styled.li`
  display: block;

  ${media.phone`
    margin-right: ${spacing[1]};
  `}
`;

// import React from 'react';
// import { func, arrayOf } from 'prop-types';
// import { sortPropTypes } from 'quotes/propTypes';
// import styled from 'styled-components';
// import { connect } from 'react-redux';
// import SortButton from 'quotes/components/SortButton';
// import { flexCenter, spacing, media, color, elevation } from 'utils';
// import { sortQuotes } from 'quotes/actions';
// import { getSortTypesState } from 'quotes/selectors';

// const sortQuotesContainer = ({ sortQuotes, sortTypes }) => {
//   const handleSortClick = event => {
//     const sortBy = event.target.dataset.sortby;
//     sortQuotes(sortBy);
//   };
//   return (
//     <Wrapper>
//       <SortButtonsList>
//         {sortTypes.map(sortType => (
//           <SortButtonListItem key={sortType.label}>
//             <SortButton sortType={sortType} onSortClick={handleSortClick} />
//           </SortButtonListItem>
//         ))}
//       </SortButtonsList>
//     </Wrapper>
//   );
// };

// sortQuotesContainer.propTypes = {
//   sortQuotes: func.isRequired,
//   sortTypes: arrayOf(sortPropTypes)
// };

// sortQuotesContainer.defaultProps = {
//   sortTypes: null
// };

// const mapStateToProps = state => ({
//   sortTypes: getSortTypesState(state)
// });

// export default connect(
//   mapStateToProps,
//   { sortQuotes }
// )(sortQuotesContainer);

// const Wrapper = styled.div`
//   ${flexCenter()};
//   margin-bottom: ${spacing[3]};
// `;

// const SortButtonsList = styled.ul`
//   list-style: none;
//   ${flexCenter({ justifyContent: 'center', alignItems: 'start' })};
//   flex-wrap: wrap;

//   ${media.phone`
//     background-color: ${color.backgroundLight};
//     ${elevation[1]};
//     border: 2px solid ${color.action};
//     border-radius: 100px;
//     padding: ${spacing[1]} ${spacing[4]};
//   `}
// `;

// const SortButtonListItem = styled.li`
//   display: block;

//   ${media.phone`
//     margin-right: ${spacing[1]};
//   `}
// `;
