import React from 'react';
import { shape, bool, string, func } from 'prop-types';
import styled from 'styled-components';
import { Button, H3, H5 } from 'elements';
import { flexCenter, absolute, spacing, media, color, elevation } from 'utils';

const panel = ({ onSortClick, sortOrder }) => (
  <Wrapper>
    <aside>
      <H5 marginBottom={spacing[2]}>Sortuj według:</H5>
      <SortButtonsList>
        <SortButtonListItem>
          <SortButton
            secondary={!sortOrder.time.active}
            asc={sortOrder.time.active && sortOrder.time.order === 'asc'}
            className="btn--margin-bottom"
            data-sortby="time"
            onClick={onSortClick}
          >
            Najnowsze
          </SortButton>
        </SortButtonListItem>
        <SortButtonListItem>
          <SortButton
            secondary={!sortOrder.comments.active}
            asc={
              sortOrder.comments.active && sortOrder.comments.order === 'asc'
            }
            className="btn--margin-bottom"
            data-sortby="comments"
            onClick={onSortClick}
          >
            Komentarze
          </SortButton>
        </SortButtonListItem>
        <SortButtonListItem>
          <SortButton
            secondary={!sortOrder.likes.active}
            asc={sortOrder.likes.active && sortOrder.likes.order === 'asc'}
            className="btn--margin-bottom"
            data-sortby="likes"
            onClick={onSortClick}
          >
            Polubienia
          </SortButton>
        </SortButtonListItem>
      </SortButtonsList>
    </aside>
  </Wrapper>
);

panel.propTypes = {
  onSortClick: func,
  sortOrder: shape({
    comments: shape({
      active: bool,
      oder: string
    }).isRequired,
    likes: shape({
      active: bool,
      oder: string
    }).isRequired,
    time: shape({
      active: bool,
      oder: string
    }).isRequired
  }).isRequired,
};

panel.defaultProps = {
  onSortClick: () => null
};

export default panel;

const Wrapper = styled.section`
  padding: ${spacing[5]} 0;
  /* border-bottom: 1px solid ${color.textDark}; */
  margin-bottom: ${spacing[2]};
  /* margin-left: -${spacing[4]};
  margin-right: -${spacing[4]};
  background-color: rgba(255, 199, 137, 0.4); */

  .btn--margin-bottom:not(:last-child) {
    margin-bottom: ${spacing[3]};

    ${media.tablet`
      margin-bottom: 0;
  `}
  }
`;

const SortButtonsList = styled.ul`
  list-style: none;
  ${flexCenter({ justifyContent: 'start', alignItems: 'start' })};
  /* flex-direction: column; */
  flex-wrap: wrap;

  ${media.phone`
    flex-direction: row;
  `}
`;

const SortButtonListItem = styled.li`
  display: block;
  /* margin-right: ${spacing[1]}; */
`;

const SortButton = styled.button`
  font-weight: bold;
  font-size: 0.6rem;
  position: relative;
  padding: ${spacing[1]} ${spacing[5]} ${spacing[1]} ${spacing[1]};
  border: 2px solid ${color.action};
  background-color: ${props =>
    props.secondary ? 'transparent' : color.action};
  color: ${props => (props.secondary ? color.action : color.textLight)};
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.1s background-color ease-in;
  transition: 0.1s color ease-in;

  &::after {
    content: '';
    position: absolute;
    /* bottom: ${props => (props.asc ? '-0.35rem' : '0.20rem')}; */
    bottom: 0.20rem;
    right: 0.6rem;
    width: 0px;
    height: 0px;
    border: 0.5rem solid;
    border-color: ${props =>
      props.secondary
        ? `${color.action} transparent transparent`
        : `#fff transparent transparent`};
    transform: ${props => (props.asc ? 'rotate(180deg)' : 'rotate(0deg)')};
    transform-origin: center 25%;
    transition: 0.1s transform ease-in;
  }
`;

// const Arrow = styled.div`
//   width: 0px;
//   height: 0px;
//   border: 10px solid red;
//   border-color: #fff transparent transparent;
// `;

// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Button, H3 } from 'elements';
// import { flexCenter, spacing, media } from 'utils';

// const panel = ({ onSortClick, sortOrder }) => (
//   <Wrapper>
//     <Button
//       className="btn--margin-bottom"
//       data-sortby="time"
//       onClick={onSortClick}
//     >
//       {sortOrder.time === 'asc' ? 'Najnowsze' : 'Najstarsze'}
//       {/* <Icon name="arrow" width="1.2rem" height="1rem" color="#fff" /> */}
//     </Button>
//     <Button
//       className="btn--margin-bottom"
//       data-sortby="comments"
//       onClick={onSortClick}
//     >
//       {sortOrder.comments === 'asc'
//         ? 'Najwięcej komentarzy'
//         : 'Najmnniej komentarzy'}
//     </Button>
//     <Button
//       className="btn--margin-bottom"
//       data-sortby="likes"
//       onClick={onSortClick}
//     >
//       {sortOrder.likes === 'asc' ? 'Najwięcej polubień' : 'Najmnniej polubień'}
//     </Button>
//   </Wrapper>
// );

// panel.propTypes = {
//   onSortClick: PropTypes.func,
//   sortOrder: PropTypes.shape({
//     time: PropTypes.string.isRequired,
//     comments: PropTypes.string.isRequired,
//     likes: PropTypes.string.isRequired
//   }).isRequired
// };

// panel.defaultProps = {
//   onSortClick: () => null
// };

// export default panel;

// const Wrapper = styled.section`
//   padding: ${spacing[4]} ${spacing[1]};
//   ${flexCenter({ justifyContent: 'space-evenly' })};
//   flex-direction: column;
//   flex-wrap: wrap;
//   margin-bottom: ${spacing[5]};

//   ${media.tablet`
//     flex-direction: row;
//   `}

//   .btn--margin-bottom:not(:last-child) {
//     margin-bottom: ${spacing[3]};

//     ${media.tablet`
//       margin-bottom: 0;
//   `}
//   }
// `;
