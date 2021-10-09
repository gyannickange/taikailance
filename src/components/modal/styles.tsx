import styled, { css } from 'styled-components/macro';
import { rem } from 'polished';

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
  
  margin: 2rem 0;
  width: var(--width);
  min-height: 300px;
  overflow: auto;
  max-height: 617px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  padding: ${rem('16px')};
  border-bottom: 1px solid #eee;
`;

export const ModalFooter = styled.div`
  padding: ${rem('16px')};
  border-top: 1px solid #eee;
  text-align: right;
`;

export const ModalTitle = styled.div`
  margin: 0;
`;

export const ModalBody = styled.div`
  padding: ${rem('16px')};
`;
