import React from 'react';
import { number, string, shape, oneOfType } from 'prop-types';
import Header from 'header/components/Header';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getCountersState } from 'header/selectors';

const headerContainer = ({ counters }) => <Header counters={counters} />;

headerContainer.propTypes = {
  counters: shape({
    comments: oneOfType([string, number]),
    quotes: oneOfType([string, number])
  }).isRequired
};

const mapStateToProps = state => ({
  counters: getCountersState(state)
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'counters'
    }
  ])
)(headerContainer);
