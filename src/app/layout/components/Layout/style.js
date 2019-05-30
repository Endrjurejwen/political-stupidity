import styled from 'styled-components';
import { navigationHeight, bodyMaxWidth, spacing, media, color } from 'utils';

const Wrapper = styled.div`
  position: relative;
  padding: ${spacing[4]} ${spacing[1]};
  margin: ${navigationHeight} auto 0;
  background-color: ${color.layout};
  min-height: calc(
    150vh - ${navigationHeight}
  ); // z mniejszą wysokoścją pojawiają się przeskoki przy reload
  max-width: ${bodyMaxWidth};

  ${media.phone`
    padding: ${spacing[4]};
  `}
`;

export { Wrapper };
