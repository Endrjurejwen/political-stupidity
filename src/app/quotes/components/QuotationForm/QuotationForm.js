import React, { useRef } from 'react';
import { func, string } from 'prop-types';
import { spacing } from 'utils';
import { InputBox, TextareaBox, useAutoFocus, CheckButtonBox } from 'app/common';

import * as S from './style';

const RADIO_BUTTONS_CONFIG = [
  { name: 'historia', id: 'history', label: 'Historia' },
  { name: 'przyroda', id: 'biology', label: 'Przyroda' }
];

const quotationForm = ({
  onQuotationSubmit,
  onInputChange,
  buttonLabel,
  newQuotation
}) => {
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  return (
    <S.Form onSubmit={onQuotationSubmit}>
      <TextareaBox
        marginBottom={spacing[3]}
        ref={autoFocusRef}
        onChange={event => onInputChange(event)}
        placeholder="Tutaj wpisz cytat"
        cols="30"
        id="content"
        value={newQuotation.content}
        required
      />
      <InputBox
        onChange={event => onInputChange(event)}
        placeholder="Autor cytatu"
        id="politician"
        value={newQuotation.politician}
        required
      />
      <S.H6 marginBottom={spacing[3]}>Zaznacz temat (opcjonalnie)</S.H6>
      <S.InputsList>
        {RADIO_BUTTONS_CONFIG.map(({ name, id, label }) => (
          <CheckButtonBox
            key={id}
            id={id}
            label={label}
            onChange={event => onInputChange(event)}
            type="checkbox"
            name={name}
            value={newQuotation}
            checked={newQuotation[name]}
          />
        ))}
      </S.InputsList>
      <S.Button type="submit">{buttonLabel}</S.Button>
    </S.Form>
  );
};

quotationForm.propTypes = {
  buttonLabel: string,
  onInputChange: func.isRequired,
  onQuotationSubmit: func.isRequired
};

quotationForm.defaultProps = {
  buttonLabel: 'Opublikuj'
};

export default quotationForm;
