import styled from 'styled-components';

import { Input, Label } from 'elements';
import { spacing, media } from 'utils';

const InputBox = styled.div`
  margin-bottom: ${spacing[3]};
  width: 100%;

  ${media.phone`
    width: 75%;
  `}
`;

export { Input, Label, InputBox };
