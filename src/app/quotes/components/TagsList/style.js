import styled from 'styled-components';
import { H6 } from 'elements';
import { spacing, color } from 'utils';

const TagsWrapper = styled.div`
  margin-bottom: ${spacing[3]};
  text-transform: capitalize;
`;

const Tag = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  border: 1px solid ${color.action};
  border-radius: 100px;
  padding: 0 ${spacing[2]};
  margin-right: ${spacing[1]};
  text-transform: capitalize;
`;

const Title = styled(H6)`
  display: inline;
  margin-right: ${spacing[1]};
`;

export { TagsWrapper, Tag, Title, H6 };
