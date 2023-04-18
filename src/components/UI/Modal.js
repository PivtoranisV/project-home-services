import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { showCartAction } from '../../store/cart-ui-slice';

const Backdrop = (props) => {
  const dispatch = useDispatch();

  const hideCartHandler = () => {
    dispatch(showCartAction.hideCart());
  };

  return <div className={styles.backdrop} onClick={hideCartHandler} />;
};

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
