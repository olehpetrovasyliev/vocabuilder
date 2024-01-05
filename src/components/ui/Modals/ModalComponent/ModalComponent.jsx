import React, { useEffect } from "react";
import css from "./ModalComponent.module.scss";
import { useDispatch } from "react-redux";
import { closeModalAddWord } from "../../../../helpers/redux/modal/modalSlice";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModalAddWord());
  };
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleClose);

    return () => {
      document.removeEventListener("keydown", handleClose);
    };
  }, []);
  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button
          className="modalclose"
          type="button"
          onClick={handleClose}
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
