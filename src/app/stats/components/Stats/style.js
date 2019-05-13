import styled, { css } from 'styled-components';
import { spacing, color, elevation, media } from 'utils';

const StatsWrapper = styled.aside`
  ${elevation[1]};
  display: flex;
  justify-content: center;
  padding: ${spacing[2]} ${spacing[4]};
  margin-right: -${spacing[1]};
  margin-left: -${spacing[1]};
  background-color: #fff;
  border-bottom: 2px solid ${color.action};

  & > *:not(:last-child) {
    margin-right: ${spacing[5]};
  }

  ${media.phone`
    margin-right: -${spacing[4]};
    margin-left: -${spacing[4]};
    border: 2px solid ${color.action};
    border-top: none;
  `}
`;

const figure = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuotesContainer = styled.figure`
  ${figure};
`;

const CommentsContainer = styled.figure`
  ${figure};
`;

const Number = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1;
`;

const Caption = styled.figcaption`
  font-size: 1rem;
`;

export { StatsWrapper, QuotesContainer, CommentsContainer, Number, Caption };
