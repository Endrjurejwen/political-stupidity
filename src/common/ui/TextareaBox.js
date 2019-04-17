import React, { useEffect } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import { Textarea, Label } from 'elements';
import { spacing } from 'utils';

const textareaBox = ({ type, placeholder, id, ...rest }) => {
  const resize = element => {
    element.style.height = "inherit";

    const height = element.scrollHeight;

    element.style.height = height + "px";
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
      <Textarea className="resizeTextArea" placeholder={placeholder} id={id} {...rest} />
      <Label htmlFor={id}>{placeholder}</Label>
    </Wrapper>
  );
};

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
