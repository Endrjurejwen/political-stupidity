import React from 'react';
import PropTypes from 'prop-types';
import Header from 'header/components/Header';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getCountersState } from 'header/selectors';

const headerContainer = ({ counters }) => <Header counters={counters} />;

headerContainer.propTypes = {
  counters: PropTypes.shape({
    quotes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    comments: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
