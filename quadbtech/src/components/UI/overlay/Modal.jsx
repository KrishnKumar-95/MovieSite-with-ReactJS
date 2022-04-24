import { Fragment } from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div>
      <div className={classes.modal}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

export const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
