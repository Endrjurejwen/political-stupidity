import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Icon } from 'elements';
import { flexCenter, spacing, media, color } from 'utils';

const panel = ({
  onSortClick,
  timeSortOrder,
  commentsSortOrder,
  likesSortOrder
}) => (
  <Wrapper>
    <Button
      className="btn--margin-bottom"
      data-sortby="time"
      onClick={onSortClick}
    >
      {timeSortOrder === 'asc' ? 'Najnowsze' : 'Najstarsze'}
      {/* <Icon name="arrow" width="1.2rem" height="1rem" color="#fff" /> */}
    </Button>
    <Button
      className="btn--margin-bottom"
      data-sortby="comments"
      onClick={onSortClick}
    >
      {commentsSortOrder === 'asc'
        ? 'Najwięcej komentarzy'
        : 'Najmnniej komentarzy'}
    </Button>
    <Button
      className="btn--margin-bottom"
      data-sortby="likes"
      onClick={onSortClick}
    >
      {likesSortOrder === 'asc' ? 'Najwięcej polubień' : 'Najmnniej polubień'}
    </Button>
  </Wrapper>
);

panel.propTypes = {
  onSortClick: PropTypes.func
};

panel.defaultProps = {
  onSortClick: () => null
};

export default panel;

const Wrapper = styled.div`
  padding: ${spacing[4]} ${spacing[1]};
  ${flexCenter({ justifyContent: 'space-evenly' })};
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: ${spacing[5]};

  ${media.tablet`
    flex-direction: row;
  `}

  .btn--margin-bottom:not(:last-child) {
    margin-bottom: ${spacing[3]};

    ${media.tablet`
      margin-bottom: 0;
  `}
  }
`;

// const SortButton = styled(Button)`
//   display: flex;
//   align-items: center;

//   svg {
//     margin-left: .2rem;
//   }
// `;
