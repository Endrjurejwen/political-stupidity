import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.uid ? <Redirect to="/home" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
