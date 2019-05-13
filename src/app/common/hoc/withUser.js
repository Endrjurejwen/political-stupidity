import React from 'react';
import { connect } from 'react-redux';
import { getUserInfoState } from 'app/auth/selectors';

const withUser = WrappedComponent => {
  const withUserComponent = props => (
    <WrappedComponent {...props} user={props.user} />
  );

  const mapStateToProps = state => ({
    user: getUserInfoState(state)
  });

  return connect(mapStateToProps)(withUserComponent);
};

export default withUser;
