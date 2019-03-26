import React from 'react';
import styled, { keyframes } from 'styled-components';
import { color } from 'utils';

const spinner = () => <Spinner data-testid="spinner">Loading...</Spinner>;

export default spinner;

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  color: ${color.action};
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  border-radius: 50%;
  transform: translateZ(0);

  &:before {
    position: absolute;
    content: '';
    width: 5.2em;
    height: 10.2em;
    background: #eee;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.2em 5.1em;
    animation: ${loading} 2s infinite ease 1.5s;
  }

  &:after {
    position: absolute;
    content: '';
    width: 5.2em;
    height: 10.2em;
    background: #eee;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    transform-origin: 0px 5.1em;
    animation: ${loading} 2s infinite ease;
  }
`;
