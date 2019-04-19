import React, { useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import { Textarea, Label } from 'elements';
import { spacing } from 'utils';

const textareaBox = forwardRef(({ type, placeholder, id, ...rest }, ref) => {
  const resize = element => {
    element.style.height = "inherit";

    const height = element.scrollHeight;

    element.style.height = `${height}px`;
  };

  useEffect(() => {
    const element = document.querySelector(".resizeTextArea");

    element.addEventListener("input", () => {
      resize(element);
      console.log(element);
    });

    return () => {
      element.removeEventListener("input", () => {
        resize(element);
      });
    };
  }, []);

  return (
    <Wrapper>
      <Textarea ref={ref} className="resizeTextArea" placeholder={placeholder} id={id} {...rest} />
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
  margin-bottom: ${spacing[3]};
`;
