import React from 'react';
import { string, func, shape } from 'prop-types';
import styled from 'styled-components';
import { TextareaBox } from 'common';
import { Button } from 'elements';
import { spacing, media } from 'utils';

const commentForm = ({
  onCommentSubmit,
  onCommentChange,
  SubmitButtonLabel,
  autoFocusRef,
  formRef,
  content
}) => {
  return (
    <Form ref={formRef} onSubmit={onCommentSubmit}>
      <TextareaBox
        fullWidth
        ref={autoFocusRef}
        required
        id="comment"
        value={content}
        onChange={event => onCommentChange(event.target.value)}
      />
      <SubmitButton type="submit" className="textarea-button">
        {SubmitButtonLabel}
      </SubmitButton>
    </Form>
  );
};

commentForm.propTypes = {
  autoFocusRef: shape(),
  content: string,
  formRef: shape(),
  onCommentChange: func.isRequired,
  onCommentSubmit: func.isRequired,
  SubmitButtonLabel: string
};

commentForm.defaultProps = {
  autoFocusRef: null,
  content: '',
  formRef: null,
  SubmitButtonLabel: null
};

export default commentForm;

const Form = styled.form`
  max-width: 30rem;
  display: flex;
  flex-direction: column;

  padding: 0 ${spacing[3]} ${spacing[2]};
  /* margin-bottom: ${spacing[3]}; */
  /* margin: ${spacing[2]} auto ${spacing[5]}; */
  margin: 0 auto ${spacing[0]};

  .text-area {
    padding: 0;
    margin: 0;
    padding-bottom: ${spacing[0]};
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
  transition: transform 0.1s ease-out;

  ${media.tablet`
    align-self: flex-end;
  `}
`;

// import React, { forwardRef } from 'react';
// import { string, func, instanceOf } from 'prop-types';
// import styled from 'styled-components';
// import { TextareaBox } from 'common';
// import { Button } from 'elements';
// import { spacing, media } from 'utils';

// const commentForm = forwardRef(
//   (
//     {
//       onCommentSubmit,
//       onCommentChange,
//       SubmitButtonLabel,
//       autoFocusRef,
//       formRef,
//       content
//     },
//     ref
//   ) => {
//     return (
//       <Form ref={formRef} onSubmit={onCommentSubmit}>
//         <TextareaBox
//           fullWidth
//           ref={autoFocusRef}
//           required
//           id="comment"
//           value={content}
//           onChange={event => onCommentChange(event.target.value)}
//         />
//         <SubmitButton type="submit" className="textarea-button">
//           {SubmitButtonLabel}
//         </SubmitButton>
//       </Form>
//     );
//   }
// );

// commentForm.propTypes = {
//   autoFocusRef: instanceOf(Element),
//   content: string,
//   formRef: instanceOf(Element),
//   onCommentChange: func.isRequired,
//   onCommentSubmit: func.isRequired,
//   SubmitButtonLabel: string
// };

// commentForm.defaultProps = {
//   autoFocusRef: null,
//   content: '',
//   formRef: null,
//   SubmitButtonLabel: null
// };

// export default commentForm;

// const Form = styled.form`
//   max-width: 30rem;
//   display: flex;
//   flex-direction: column;

//   padding: 0 ${spacing[3]} ${spacing[2]};
//   /* margin-bottom: ${spacing[3]}; */
//   /* margin: ${spacing[2]} auto ${spacing[5]}; */
//   margin: 0 auto ${spacing[0]};

//   .text-area {
//     padding: 0;
//     margin: 0;
//     padding-bottom: ${spacing[0]};
//   }

//   &:focus-within .textarea-button {
//     position: relative;
//     visibility: visible;
//     margin-top: ${spacing[3]};
//     transform: translateY(0);
//   }
// `;

// const SubmitButton = styled(Button)`
//   position: absolute;
//   margin-top: 0;
//   visibility: hidden;
//   transform: translateY(-45px);
//   transition: transform 0.1s ease-out;

//   ${media.tablet`
//     align-self: flex-end;
//   `}
// `;
