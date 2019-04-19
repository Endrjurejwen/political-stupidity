import React from 'react';
import { number, string, shape, oneOfType } from 'prop-types';
import Stats from 'stats/components/Stats';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, withFirestore } from 'react-redux-firebase';
import { getCountersState } from 'stats/selectors';

const statsContainer = ({ counters, firestore, location }) => {
  // useEffect(() => {
  //   console.log('useEffect from header');
  //   firestore.setListener({
  //     collection: 'counters'
  //   });

  //   return function cleanup() {
  //     firestore.unsetListener('quotes');
  //   };
  // }, [location.pathname]);

  return <Stats counters={counters} />;
};

statsContainer.propTypes = {
  counters: shape({
    comments: oneOfType([string, number]),
    quotes: oneOfType([string, number])
  }).isRequired
};

const mapStateToProps = state => ({
  counters: getCountersState(state)
});

export default compose(
  withFirestore,
  withRouter,
  firestoreConnect([
    {
      collection: 'counters'
    }
  ]),
  connect(mapStateToProps)
)(statsContainer);