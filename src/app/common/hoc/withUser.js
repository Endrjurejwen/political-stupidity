/* eslint react/destructuring-assignment: 0 */

import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { getUserInfoState } from 'app/auth/selectors';

const withUser = WrappedComponent => {
  const withUserComponent = props => (
    <WrappedComponent {...props} user={props.user} />
  );

  withUserComponent.propTypes = {
    user: string
  };

  withUserComponent.defaultProps = {
    user: null
  };

  const mapStateToProps = state => ({
    user: getUserInfoState(state)
  });

  return connect(mapStateToProps)(withUserComponent);
};

export default withUser;
