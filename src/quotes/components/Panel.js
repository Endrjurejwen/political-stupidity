import React from 'react';
import { shape, bool, string, func } from 'prop-types';
import styled from 'styled-components';
// import { withUser } from 'common';
import { Button, H3, H5 } from 'elements';
import { flexCenter, absolute, spacing, media, color, elevation } from 'utils';

const panel = ({ onSortClick, sortOrder }) => (
  <Wrapper>
    <aside>
      <SortButtonsList>
        <SortButtonListItem>
          <SortButton
            isActive={sortOrder.time.active}
            asc={sortOrder.time.active && sortOrder.time.order === 'asc'}
            data-sortby="time"
            onClick={onSortClick}
          >
            Najnowsze
          </SortButton>
        </SortButtonListItem>
        <SortButtonListItem>
          <SortButton
            isActive={sortOrder.comments.active}
            asc={
              sortOrder.comments.active && sortOrder.comments.order === 'asc'
            }
            data-sortby="comments"
            onClick={onSortClick}
          >
            Komentarze
          </SortButton>
        </SortButtonListItem>
        <SortButtonListItem>
          <SortButton
            isActive={sortOrder.likes.active}
            asc={sortOrder.likes.active && sortOrder.likes.order === 'asc'}
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
  }).isRequired
};

panel.defaultProps = {
  onSortClick: () => null
};

export default panel;

const Wrapper = styled.section`
  margin: ${spacing[4]} 0;
`;

const SortButtonsList = styled.ul`
  list-style: none;
  ${flexCenter({ justifyContent: 'center', alignItems: 'start' })};
  flex-wrap: wrap;
`;

const SortButtonListItem = styled.li`
  display: block;

  ${media.phone`
    margin-right: ${spacing[1]};
  `}
`;

const SortButton = styled.button`
  font-family: inherit;
  font-weight: bold;
  font-size: 0.6rem;
  position: relative;
  padding: ${spacing[1]} ${spacing[5]} ${spacing[1]} ${spacing[1]};
  border: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${props =>
    props.isActive ? color.action : 'transparent'};
  background-color: transparent;
  color: ${color.textDark};
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
      props.isActive
        ? `${color.textDark} transparent transparent`
        : `${color.textDark} transparent transparent`};
    transform: ${props => (props.asc ? 'rotate(180deg)' : 'rotate(0deg)')};
    transform-origin: center 25%;
    transition: 0.1s transform ease-in;
  }
`;

// import React from 'react';
// import { shape, bool, string, func } from 'prop-types';
// import styled from 'styled-components';
// import { Button, H3, H5 } from 'elements';
// import { flexCenter, absolute, spacing, media, color, elevation } from 'utils';

// const panel = ({ onSortClick, sortOrder }) => (
//   <Wrapper>
//     <aside>
//       <SortButtonsList>
//         <SortButtonListItem>
//           <SortButton
//             secondary={!sortOrder.time.active}
//             asc={sortOrder.time.active && sortOrder.time.order === 'asc'}
//             data-sortby="time"
//             onClick={onSortClick}
//           >
//             Najnowsze
//           </SortButton>
//         </SortButtonListItem>
//         <SortButtonListItem>
//           <SortButton
//             secondary={!sortOrder.comments.active}
//             asc={
//               sortOrder.comments.active && sortOrder.comments.order === 'asc'
//             }
//             data-sortby="comments"
//             onClick={onSortClick}
//           >
//             Komentarze
//           </SortButton>
//         </SortButtonListItem>
//         <SortButtonListItem>
//           <SortButton
//             secondary={!sortOrder.likes.active}
//             asc={sortOrder.likes.active && sortOrder.likes.order === 'asc'}
//             data-sortby="likes"
//             onClick={onSortClick}
//           >
//             Polubienia
//           </SortButton>
//         </SortButtonListItem>
//       </SortButtonsList>
//     </aside>
//   </Wrapper>
// );

// panel.propTypes = {
//   onSortClick: func,
//   sortOrder: shape({
//     comments: shape({
//       active: bool,
//       oder: string
//     }).isRequired,
//     likes: shape({
//       active: bool,
//       oder: string
//     }).isRequired,
//     time: shape({
//       active: bool,
//       oder: string
//     }).isRequired
//   }).isRequired,
// };

// panel.defaultProps = {
//   onSortClick: () => null
// };

// export default panel;

// const Wrapper = styled.section`
//   margin: ${spacing[4]} 0;
// `;

// const SortButtonsList = styled.ul`
//   list-style: none;
//   ${flexCenter({ justifyContent: 'start', alignItems: 'start' })};
//   flex-wrap: wrap;
// `;

// const SortButtonListItem = styled.li`
//   display: block;

//   ${media.phone`
//     margin-right: ${spacing[1]};
//   `}
// `;

// const SortButton = styled.button`
//   font-weight: bold;
//   font-size: 0.6rem;
//   position: relative;
//   padding: ${spacing[1]} ${spacing[5]} ${spacing[1]} ${spacing[1]};
//   border: 2px solid ${color.action};
//   background-color: ${props =>
//     props.secondary ? 'transparent' : color.action};
//   color: ${props => (props.secondary ? color.action : color.textLight)};
//   cursor: pointer;
//   text-transform: uppercase;
//   transition: 0.1s background-color ease-in;
//   transition: 0.1s color ease-in;

//   &::after {
//     content: '';
//     position: absolute;
//     /* bottom: ${props => (props.asc ? '-0.35rem' : '0.20rem')}; */
//     bottom: 0.20rem;
//     right: 0.6rem;
//     width: 0px;
//     height: 0px;
//     border: 0.5rem solid;
//     border-color: ${props =>
//       props.secondary
//         ? `${color.action} transparent transparent`
//         : `#fff transparent transparent`};
//     transform: ${props => (props.asc ? 'rotate(180deg)' : 'rotate(0deg)')};
//     transform-origin: center 25%;
//     transition: 0.1s transform ease-in;
//   }
// `;
