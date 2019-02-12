import styled, { css } from 'styled-components';

import { fluidTypography, textDark, headingsFont } from 'utils';

const headings = css`
  text-transform: uppercase;
  color: ${textDark};
  font-family: sans-serif;
`;

export const H1 = styled.h1`
  ${fluidTypography({ minFontSize: 22.13, maxFontSize: 39.81 })};
  ${headings};
`;

export const H2 = styled.h2`
  ${fluidTypography({ minFontSize: 20.74, maxFontSize: 33.18 })};
  ${headings};
`;

export const H3 = styled.h3`
  ${fluidTypography({ minFontSize: 19.44, maxFontSize: 27.65 })};
  ${headings};
`;

export const H4 = styled.h4`
  ${fluidTypography({ minFontSize: 18.22, maxFontSize: 23.04 })};
  ${headings};
`;

export const H5 = styled.h5`
  ${fluidTypography({ minFontSize: 17.07, maxFontSize: 19.2 })};
  ${headings};
`;
