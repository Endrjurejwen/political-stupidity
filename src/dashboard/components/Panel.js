import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'elements';
import { flexCenter, spacing, media, color } from 'utils';

const panel = ({ click }) => (
  <Wrapper>
    <Button className="btn--margin-bottom" onClick={click}>
      Najnowsze
    </Button>
    <Button className="btn--margin-bottom" onClick={click}>
      Najwięcej komentarzy
    </Button>
    <Button className="btn--margin-bottom" onClick={click}>
      Najwięcej polubień
    </Button>
  </Wrapper>
);

panel.propTypes = {
  click: PropTypes.func
};

panel.defaultProps = {
  click: () => null
};

export default panel;

const Wrapper = styled.div`
  padding: ${spacing[4]} ${spacing[1]};
  ${flexCenter({ justifyContent: 'space-evenly' })};
  flex-direction: column;
  flex-wrap: wrap;
  /* border-bottom: 1px solid ${color.textDark}; */
  margin-bottom: ${spacing[5]};

  ${media.tablet`
    flex-direction: row;
  `}

  .btn--margin-bottom:not(:last-child) {
    margin-bottom: ${spacing[3]};

    ${media.tablet`
      margin-bottom: 0;
  `}
  }
`;
