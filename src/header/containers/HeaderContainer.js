import React from 'react';
import { number, string, shape, oneOfType } from 'prop-types';
import Header from 'header/components/Header';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, withFirestore } from 'react-redux-firebase';
import { getCountersState } from 'header/selectors';

const headerContainer = ({ counters, firestore, location }) => {
  // useEffect(() => {
  //   console.log('useEffect from header');
  //   firestore.setListener({
  //     collection: 'counters'
  //   });

  //   return function cleanup() {
  //     firestore.unsetListener('quotes');
  //   };
  // }, [location.pathname]);

  return <Header counters={counters} />;
};

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
  withFirestore,
  withRouter,
  firestoreConnect([
    {
      collection: 'counters'
    }
  ]),
  connect(mapStateToProps)
)(headerContainer);
