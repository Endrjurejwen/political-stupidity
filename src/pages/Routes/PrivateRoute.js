import React from 'react';
import { string, func } from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const privateRoute = ({ authId, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authId ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

privateRoute.propTypes = {
  authId: string,
  component: func.isRequired
};

privateRoute.defaultProps = {
  authId: null
};

const mapStateToProps = state => ({
  authId: state.firebase.auth.uid
});

export default withRouter(connect(mapStateToProps)(privateRoute));
