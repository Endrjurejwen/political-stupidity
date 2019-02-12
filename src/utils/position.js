import { css } from 'styled-components';

export const fixed = ({ x = 0, y = 0, side = 'left' } = {}) => css`
  position: fixed;
  top: ${y};
  ${side}: ${x};
`;

export const absolute = ({ x = 0, y = 0, side = 'left' } = {}) => css`
  position: absolute;
  top: ${y};
  ${side}: ${x};
`;

export const flexCenter = ({
  justifyContent = 'center',
  alignItems = 'center'
} = {}) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;
