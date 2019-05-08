import React, { useState } from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import { filterQuotes } from 'quotes/actions';
import { getFilterNameState } from 'quotes/selectors';
import { CheckButtonBox } from 'common';
import { Button, H3 } from 'elements';
import { spacing } from 'utils';

const RADIO_BUTTONS_CONFIG = [
  { value: 'all', id: 'all', label: 'Wszystkie' },
  { value: 'historia', id: 'history', label: 'Historia' },
  { value: 'przyroda', id: 'biology', label: 'Przyroda' }
];

const filterQuotesContainer = ({
  closeModal,
  filterQuotes,
  currentFilterName
}) => {
  const [filter, setFilter] = useState(currentFilterName);

  const handleSubmit = event => {
    event.preventDefault();
    filterQuotes(filter);
    closeModal();
  };

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <div>
      <H3 center marginBottom={spacing[4]}>
        Wybierz Temat
      </H3>
      <Form onSubmit={handleSubmit}>
        <InputsWrapper>
          {RADIO_BUTTONS_CONFIG.map(({ value, id, label }) => (
            <CheckButtonBox
              id={id}
              label={label}
              onChange={handleChange}
              checked={filter === value}
              type="radio"
              name="filters"
              value={value}
            />
          ))}
        </InputsWrapper>
        <Button type="submit">Filtruj</Button>
      </Form>
    </div>
  );
};

filterQuotesContainer.propTypes = {
  closeModal: func,
  currentFilterName: string,
  filterQuotes: func.isRequired
};

filterQuotesContainer.defaultProps = {
  closeModal: () => null,
  currentFilterName: 'all'
};

const mapStateToProps = state => ({
  currentFilterName: getFilterNameState(state)
});

export default connect(
  mapStateToProps,
  { filterQuotes }
)(filterQuotesContainer);

const InputsWrapper = styled.div`
  margin-bottom: ${spacing[3]};
  display: flex;
  flex-wrap: wrap;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

/* <Form onSubmit={handleSubmit}>
<InputsWrapper>
  <InputBox>
    <Input
      onChange={handleChange}
      checked={filter === 'all'}
      type="radio"
      id="all"
      name="filters"
      value="all"
    />
    <label htmlFor="all">
      <RadioButton>Wszystkie</RadioButton>
    </label>
  </InputBox>
  <InputBox>
    <Input
      onChange={handleChange}
      checked={filter === 'historia'}
      type="radio"
      id="history"
      name="filters"
      value="historia"
    />
    <label htmlFor="history">
      <RadioButton>Historia</RadioButton>
    </label>
  </InputBox>
  <InputBox>
    <Input
      onChange={handleChange}
      checked={filter === 'przyroda'}
      type="radio"
      id="biology"
      name="filters"
      value="przyroda"
    />
    <label htmlFor="biology">
      <RadioButton>Przyroda</RadioButton>
    </label>
  </InputBox>
</InputsWrapper>
<Button type="submit">Filtruj</Button>
</Form> */
