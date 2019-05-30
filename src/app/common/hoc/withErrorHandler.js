/* eslint react/destructuring-assignment: 0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import { Modal } from 'app/common';
import { ConfirmationError } from 'app/common/info';

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
