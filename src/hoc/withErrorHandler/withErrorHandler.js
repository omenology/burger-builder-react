import React, { Fragment } from "react";
import useHttpErrorHandler from '../../hooks/httpRequestError'

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrapedComponent, axios) => {
  return props => {
    const [error, confirmErrorHandler] = useHttpErrorHandler(axios)

    return (
      <Fragment>
        <Modal show={error} modalClosed={confirmErrorHandler}>
          {error ? error.message : null}
        </Modal>
        <WrapedComponent {...props} />
      </Fragment>
    );
  };
};

export default withErrorHandler;
