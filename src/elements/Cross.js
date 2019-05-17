import styled from 'styled-components';
import { color } from 'utils';

export default styled.div`
  background-color: ${props => props.color || color.textLight};
  height: ${props => props.height || '15px'};
  position: relative;
  width: ${props => props.width || '3px'};

  &:after {
    background-color: inherit;
    content: '';
    height: ${props => props.width || '3px'};
    left: -6px;
    position: absolute;
    top: 6px;
    width: ${props => props.height || '15px'};
  }
`;

// export default styled.div`
//   background-color: red;
//   height: 100px;
//   position: relative;
//   width: 20px;

//   &:after {
//     background-color: red;
//     content: "";
//     height: 20px;
//     left: -40px;
//     position: absolute;
//     top: 40px;
//     width: 100px;
//   }
// `;
