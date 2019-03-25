import React from 'react';
import PropTypes from 'prop-types';
import Header from 'dashboard/components/Header';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const headerContainer = ({ counters }) => <Header counters={counters} />;

headerContainer.propTypes = {
  counters: PropTypes.shape({
    quotes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    comments: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired
};

const mapStateToProps = state => {
  const { counters } = state.firestore.data;
  const comments = counters ? counters.comments.number : '--';
  const quotes = counters ? counters.quotes.number : '--';

  return {
    counters: {
      comments,
      quotes
    }
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'counters'
    }
  ])
)(headerContainer);
