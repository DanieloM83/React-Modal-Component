import ModalLayout from "./ModalLayout";
import ModalHeader from "./ModalHeader";
import { createPortal } from "react-dom";

const Modal = ({ children, ...layoutProps }) => {
  return createPortal(
    <ModalLayout {...layoutProps}>{children}</ModalLayout>,
    document.querySelector("#root-modals")
  );
};

Modal.Header = ModalHeader;

export default Modal;
