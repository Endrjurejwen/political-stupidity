import styled from 'styled-components';
import { color, margins } from 'utils';

export default styled.p`
  color: ${props => (props.secondary ? color.textLight : color.textDark)};
  ${margins}
`;