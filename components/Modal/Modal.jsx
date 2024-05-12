
import React from "react";
import { StyledModalContainer } from "./styles";

const Modal = ({ isOpen, onClose ,children}) => {

  const handleClose = () => {
    onClose();

  };

  if (!isOpen) return null;

  return (
    <StyledModalContainer>
      <div>
        <span onClick={handleClose}>X</span>
        {children}
      </div>
    </StyledModalContainer>
  );
};

export default Modal;
