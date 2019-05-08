import React, { useRef } from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { spacing } from 'utils';
import { InputBox, TextareaBox, useAutoFocus, CheckButtonBox } from 'common';
import { Button, H6 } from 'elements';

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
    <Form onSubmit={onQuotationSubmit}>
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
      <H6 marginBottom={spacing[3]}>Zaznacz temat (opcjonalnie)</H6>
      <InputsList>
        {RADIO_BUTTONS_CONFIG.map(({ name, id, label }) => (
          <CheckButtonBox
            id={id}
            label={label}
            onChange={event => onInputChange(event)}
            type="checkbox"
            name={name}
            value={newQuotation}
            checked={newQuotation[name]}
          />
        ))}
      </InputsList>
      <Button type="submit">{buttonLabel}</Button>
    </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${spacing[4]} auto 0;
`;

const InputsList = styled.ul`
  margin-bottom: ${spacing[3]};
  display: flex;
  flex-wrap: wrap;
`;

// return (
//   <Form onSubmit={onQuotationSubmit}>
//     <TextareaBox
//       marginBottom={spacing[3]}
//       ref={autoFocusRef}
//       onChange={event => onInputChange(event)}
//       placeholder="Tutaj wpisz cytat"
//       cols="30"
//       id="content"
//       value={newQuotation.content}
//       required
//     />
//     <InputBox
//       onChange={event => onInputChange(event)}
//       placeholder="Autor cytatu"
//       id="politician"
//       value={newQuotation.politician}
//       required
//     />
//     <input
//       onChange={event => onInputChange(event)}
//       type="checkbox"
//       id="history"
//       name="historia"
//       // value={newQuotation.historia}
//       checked={newQuotation.historia} />
//     <label htmlFor="history">Historia</label>
//     <input
//       onChange={event => onInputChange(event)}
//       type="checkbox"
//       id="biology"
//       name="przyroda"
//       // value={newQuotation.przyroda}
//       checked={newQuotation.przyroda} />
//     <label htmlFor="biology">Przyroda</label>
//     <Button type="submit">{buttonLabel}</Button>
//   </Form>
// );
// };
