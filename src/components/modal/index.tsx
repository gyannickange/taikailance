import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import * as Style from './styles';
import { Button } from '../';

export interface ModalProps {
  isShowing: boolean;
  footer?: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  zIndex?: number;
  size?: string;
}

const Modal = (props: ModalProps) => {
  const {
    isShowing = false,
    footer = true,
    onClose,
    title,
    children,
    zIndex = 10,
    size = 'medium',
  } = props;

  return ReactDOM.createPortal(
    <CSSTransition
      in={isShowing}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <Style.Modal 
        onClick={onClose}
        zIndex={zIndex}
      >
        <Style.ModalContent
          onClick={e => e.stopPropagation()}
          size={size}
        >
          {title && (
            <Style.ModalHeader>
              <Style.ModalTitle>{title}</Style.ModalTitle>
            </Style.ModalHeader>
          )}

          <Style.ModalBody>{children}</Style.ModalBody>

          {footer && (
            <Style.ModalFooter>
              <Button
                value="View results"
                variant="outline"
                color="dark"
                action={onClose}
              />
            </Style.ModalFooter>
          )}
          
        </Style.ModalContent>
      </Style.Modal>
    </CSSTransition>,
    document.body
  );
};

export default Modal;
