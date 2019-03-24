import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const publicRoute = ({ authId, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authId ? <Redirect to="/home" /> : <Component {...props} />
    }
  />
);

publicRoute.propTypes = {
  authId: PropTypes.string,
  component: PropTypes.func.isRequired
};

publicRoute.defaultProps = {
  authId: null
};

const mapStateToProps = state => ({
  authId: state.firebase.auth.uid
});

export default withRouter(connect(mapStateToProps)(publicRoute));
