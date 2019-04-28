import React, { useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import { Textarea, Label } from 'elements';
import { spacing, margins, media } from 'utils';

const textareaBox = forwardRef(({ type, placeholder, id, fullWidth, marginBottom, ...rest }, ref) => {
  const resize = element => {
    element.style.height = 'inherit';

    const height = element.scrollHeight;

    element.style.height = `${height}px`;
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.resizeTextArea');
    elements.forEach(element => {
      element.addEventListener('input', () => {
        resize(element);
      });
    });

    return () => {
      elements.forEach(element => {
        element.addEventListener('input', () => {
          resize(element);
        });
      });
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.resizeTextArea');
    elements.forEach(element => {
      element.addEventListener('focus', () => {
        resize(element);
      });
    });

    return () => {
      elements.forEach(element => {
        element.addEventListener('focus', () => {
          resize(element);
        });
      });
    };
  }, []);

  return (
    <Wrapper marginBottom={marginBottom} fullWidth={fullWidth}>
      <Textarea
        ref={ref}
        rows="1"
        className="resizeTextArea text-area"
        placeholder={placeholder}
        id={id}
        {...rest}
      />
      <Label htmlFor={id}>{placeholder}</Label>
    </Wrapper>
  );
});

textareaBox.propTypes = {
  id: string.isRequired,
  placeholder: string
};

textareaBox.defaultProps = {
  placeholder: 'Tutaj wpisz swój komentarz'
};

export default textareaBox;

const Wrapper = styled.div`
  ${margins};
  width: 100%;

  ${media.phone`
    width: ${props => (props.fullWidth ? '100%' : '75%')};
  `}
`;

// useEffect(() => {
//   const element = document.querySelector('.resizeTextArea');
//   element.addEventListener('input', () => {
//     resize(element);
//   });

//   return () => {
//     element.removeEventListener('input', () => {
//       resize(element);
//     });
//   };
// }, []);

// useEffect(() => {
//   const element = document.querySelector('.resizeTextArea');

//   element.addEventListener('focus', () => {
//     resize(element);
//   });

//   return () => {
//     element.removeEventListener('focus', () => {
//       resize(element);
//     });
//   };
// }, []);