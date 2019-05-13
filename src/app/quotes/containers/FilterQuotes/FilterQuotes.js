import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import { filterQuotes } from 'app/quotes/actions';
import { getFilterNameState } from 'app/quotes/selectors';
import { CheckButtonBox } from 'app/common';
import { spacing } from 'utils';

import * as S from './style';

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
