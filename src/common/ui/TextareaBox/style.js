import styled from 'styled-components';

import { Textarea, Label } from 'elements';
import { margins, media } from 'utils';

const TextareaBox = styled.div`
  ${margins};
  width: 100%;

  ${media.phone`
    width: ${props => (props.fullWidth ? '100%' : '75%')};
  `}
`;

export { Textarea, Label, TextareaBox };
