import React, { memo, Fragment } from "react";

import Backdrop from "../Backdrop/Backdrop";
import cssModal from "./Modal.module.css";

const Modal = props => {

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={cssModal.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );

}
export default memo(Modal, (prevProps, nextProps) => prevProps.show === nextProps.show) 
