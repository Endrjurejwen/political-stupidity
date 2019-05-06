import React from 'react';
import { Modal } from 'common';
import { ConfirmationError } from 'common/confirmation';

const withErrorHandler = ({ actionName }) => WrappedComponent => {
  return props => {
    const handleClick = () => {
      props[actionName]();
    };
    return (
      <>
        <WrappedComponent {...props} />
        {props.error && (
          <Modal close={handleClick}>
            <ConfirmationError
              onConfirmClick={handleClick}
              text={props.error}
            />
          </Modal>
        )}
      </>
    );
  };
};

export default withErrorHandler;
