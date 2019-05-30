import styled from 'styled-components';
import { Button } from 'elements';
import { spacing, media } from 'utils';

const CommentForm = styled.form`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing[3]} ${spacing[2]};
  margin: 0 auto ${spacing[0]};

  .text-area {
    padding: 0;
    margin: 0;
    padding-bottom: ${spacing[0]};
  }

  /* only for Safari */
  @media not all and (min-resolution: 0.001dpcm) {
    .textarea-button {
      position: relative;
      visibility: visible;
      margin-top: ${spacing[3]};
      transform: translateY(0);
    }
  }

  &:focus-within .textarea-button {
    position: relative;
    visibility: visible;
    margin-top: ${spacing[3]};
    transform: translateY(0);
  }
`;

const SubmitButton = styled(Button)`
  position: absolute;
  margin-top: 0;
  visibility: hidden;
  transform: translateY(-45px);

  ${media.tablet`
    align-self: flex-end;
  `}
`;

export { CommentForm, SubmitButton };
