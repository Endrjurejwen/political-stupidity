import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 700,
  phone: 580
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
