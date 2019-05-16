import React, { useEffect, forwardRef } from 'react';
import { string, bool } from 'prop-types';

import * as S from './style';

const textareaBox = forwardRef(
  ({ placeholder, id, isFullWidth, marginBottom, ...rest }, ref) => {
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
      <S.TextareaBox marginBottom={marginBottom} isFullWidth={isFullWidth}>
        <S.Textarea
          ref={ref}
          rows="1"
          className="resizeTextArea text-area"
          placeholder={placeholder}
          id={id}
          name={id}
          {...rest}
        />
        <S.Label htmlFor={id}>{placeholder}</S.Label>
      </S.TextareaBox>
    );
  }
);

textareaBox.propTypes = {
  id: string.isRequired,
  isFullWidth: bool,
  marginBottom: string,
  placeholder: string
};

textareaBox.defaultProps = {
  isFullWidth: false,
  marginBottom: '',
  placeholder: 'Tutaj wpisz swój komentarz'
};

export default textareaBox;
