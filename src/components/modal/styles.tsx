import styled, { css } from 'styled-components/macro';

interface ModalProps {
  zIndex?: number;
  size?: string;
}

export const Modal = styled.div<ModalProps>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  z-index: 10;

  &.enter-done {
    opacity: 1;
    pointer-events: visible;

    .modal-content {
      transform: translateY(0);
    }
  }
  &.exit {
    opacity: 0;

    .modal-content {
      transform: translateY(-200px);
    }
  }
`;

export const ModalContent = styled.div<ModalProps>`
  ${props =>
    props.size === 'big' &&
    css`
      --width: 1200px;
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      --width: 800px;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      --width: 500px;
    `}

  width: var(--width);
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  transform: translateY(-200px);
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  padding: 10px;
`;

export const ModalFooter = styled.div`
  padding: 10px;
`;

export const ModalTitle = styled.div`
  margin: 0;
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
