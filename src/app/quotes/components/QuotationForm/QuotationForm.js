import React, { useRef } from 'react';
import { func, string, objectOf, oneOfType, bool } from 'prop-types';
import { spacing } from 'utils';
import {
  InputBox,
  TextareaBox,
  useAutoFocus,
  CheckButtonBox
} from 'app/common';

import * as S from './style';

const RADIO_BUTTONS_CONFIG = [
  { name: 'historia', id: 'history', label: 'Historia' },
  { name: 'przyroda', id: 'biology', label: 'Przyroda' },
  { name: 'geografia', id: 'geography', label: 'Geografia' },
  { name: 'matematyka', id: 'mathematics', label: 'Matematyka' },
  { name: 'fizyka', id: 'physics', label: 'Fizyka' },
  { name: 'chemia', id: 'chemistry', label: 'Chemia' },
  { name: 'język polski', id: 'polish', label: 'Język polski' },
  { name: 'języki obce', id: 'foreign', label: 'Języki obce' },
  { name: 'wiedza o społeczeństwie', id: 'wos', label: 'Wiedza o społeczneństwie' },
];

const quotationForm = ({
  onQuotationSubmit,
  onInputChange,
  buttonLabel,
  newQuotation
}) => {
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  const handleSubmit = event => {
    event.preventDefault();
    onQuotationSubmit();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
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
        placeholder="Kto to powiedział?"
        id="politician"
        value={newQuotation.politician}
        required
      />
      <S.H6 marginBottom={spacing[3]}>Wybierz temat - możesz zaznaczyć kilka</S.H6>
      <S.InputsList>
        {RADIO_BUTTONS_CONFIG.map(({ name, id, label }) => (
          <CheckButtonBox
            key={id}
            id={id}
            label={label}
            onChange={event => onInputChange(event)}
            type="checkbox"
            name={name}
            value={name}
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
  newQuotation: objectOf(oneOfType([string, bool])),
  onInputChange: func.isRequired,
  onQuotationSubmit: func.isRequired
};

quotationForm.defaultProps = {
  buttonLabel: 'Opublikuj',
  newQuotation: null
};

export default quotationForm;
