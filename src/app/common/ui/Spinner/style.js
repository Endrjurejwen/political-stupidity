import styled, { keyframes } from 'styled-components';
import { color } from 'utils';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
  display: block;
  margin-top: -20px;
  color: ${color.action};
`;

const Symbol = styled.div`
  color: ${color.action};
  font-size: 11px;
  text-indent: -99999em;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  border-radius: 50%;
  transform: translateZ(0);
  transform: scale(0.5);

  &:before {
    position: absolute;
    content: '';
    width: 5.2em;
    height: 10.2em;
    background-color: ${props => props.bgColor};
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.2em 5.1em;
    animation: ${loading} 1.5s infinite ease 1s;
  }

  &:after {
    position: absolute;
    content: '';
    width: 5.2em;
    height: 10.2em;
    background-color: ${props => props.bgColor};
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    transform-origin: 0px 5.1em;
    animation: ${loading} 1s infinite ease;
  }
`;

export { Spinner, Label, Symbol };
