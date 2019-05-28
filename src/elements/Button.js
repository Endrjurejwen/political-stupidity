import styled, { css } from 'styled-components';
import { color, spacing, margins } from 'utils';

export default styled.button`
  ${margins};
  font-family: inherit;
  font-weight: bold;
  display: block;
  padding: ${spacing[1]} ${spacing[4]};
  border-radius: 20px;
  border: 2px solid ${color.action};
  background-color: ${color.action};
  color: ${color.textLight};
  cursor: pointer;
  text-transform: uppercase;
  background-image: linear-gradient(
    90deg,
    transparent 0%,
    transparent 50%,
    ${color.textLight} 50%
  );
  background-size: 260%;
  transition: background-position 0.15s ease-in-out,
    background-color 0.25s ease-in-out, color 0.15s ease-in-out,
    border 0.15s ease-in-out, transform 0.15s ease-in-out;

  ${props =>
    props.secondary &&
    css`
      background-color: transparent;
      color: ${color.action};
      background-image: linear-gradient(
        90deg,
        transparent 0%,
        transparent 50%,
        ${color.action} 50%
      );
    `}

  &:hover {
    background-position: -80%;
    color: ${props => (props.secondary ? color.textLight : color.action)};
  }
`;

// export default styled.button`
//   /* ${elevation[1]}; */
//   font-family: inherit;
//   font-weight: bold;

//   padding: ${spacing[1]} ${spacing[4]};
//   border-radius: 20px;
//   border: 2px solid ${color.action};
//   background-color: ${props =>
//     props.secondary ? 'transparent' : color.action};
//   color: ${props => (props.secondary ? color.action : color.textLight)};
//   cursor: pointer;
//   text-transform: uppercase;
//   background-image: linear-gradient(90deg, transparent 0%, transparent 50%, ${
//     color.action
//   } 50%);
//   background-size: 250%;
// 	transition: background-position .2s ease-in-out;

//   ${props =>
//     props.secondary &&
//     css`
//       border-color: red;
//     `}

//   &:hover {
//     /* ${elevation[2]}; */
//     background-position: -80%;
//   }
// `;
