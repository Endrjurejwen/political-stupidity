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

export const hidden = () => css`
  clip-path: inset(100%);
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
