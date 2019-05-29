import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import { filterQuotes } from 'app/quotes/operations';
import { getFilterNameState } from 'app/quotes/selectors';
import { CheckButtonBox } from 'app/common';
import { spacing } from 'utils';

import * as S from './style';

const RADIO_BUTTONS_CONFIG = [
  { value: 'all', id: 'all', label: 'Wszystkie' },
  { value: 'historia', id: 'history', label: 'Historia' },
  { value: 'przyroda', id: 'biology', label: 'Przyroda' },
  { value: 'geografia', id: 'geography', label: 'Geografia' },
  { value: 'matematyka', id: 'matemathics', label: 'Matematyka' },
  { value: 'fizyka', id: 'physics', label: 'Fizyka' },
  { value: 'chemia', id: 'chemistry', label: 'Chemia' },
  { value: 'język polski', id: 'polish', label: 'Język polski' },
  { value: 'języki obce', id: 'foreign', label: 'Języki obce' },
  { value: 'wiedza o społeczeństwie', id: 'wos', label: 'Wiedza o społeczeństwie' }
];

// { name: 'geografia', id: 'geography', label: 'Geografia' },
// { name: 'wiedza o społeczeństwie', id: 'wos', label: 'Wiedza o społeczneństwie' },
// { name: 'język polski', id: 'polish', label: 'Język Polski' },

export const filterQuotesContainer = ({
  onCloseModal,
  filterQuotes,
  currentFilterName
}) => {
  const [filter, setFilter] = useState(currentFilterName);

  const handleSubmit = event => {
    event.preventDefault();
    filterQuotes(filter);
    onCloseModal();
  };

  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      <S.H3 center marginBottom={spacing[4]}>
        Wybierz Temat
      </S.H3>
      <S.Form onSubmit={handleSubmit}>
        <S.InputsWrapper>
          {RADIO_BUTTONS_CONFIG.map(({ value, id, label }) => (
            <CheckButtonBox
              key={id}
              id={id}
              label={label}
              onChange={handleChange}
              checked={filter === value}
              type="radio"
              name="filters"
              value={value}
            />
          ))}
        </S.InputsWrapper>
        <S.Button type="submit">Filtruj</S.Button>
      </S.Form>
    </div>
  );
};

filterQuotesContainer.propTypes = {
  currentFilterName: string,
  filterQuotes: func.isRequired,
  onCloseModal: func
};

filterQuotesContainer.defaultProps = {
  currentFilterName: 'all',
  onCloseModal: () => null
};

const mapStateToProps = state => ({
  currentFilterName: getFilterNameState(state)
});

export default connect(
  mapStateToProps,
  { filterQuotes }
)(filterQuotesContainer);
