import styled, { css } from 'styled-components/macro';
import { ButtonColor, ButtonVariant } from './types';
import { colors } from '../../../utils/variables';
import { rem, lighten, darken } from 'polished';

interface ButtonProps {
  variant?: ButtonVariant;
  circle?: boolean;
  color?: ButtonColor;
  value?: String;
  iconPosition?: 'left' | 'right';
}

const { normal, light, info, primary, danger } = colors;

export const ButtonWrapper = styled.button<ButtonProps>`
  --button: ${primary};
  --txt: ${light};
  --hover: ${darken(0.15, primary)};

  ${props =>
    props.color === 'primary' &&
    css`
      --button: ${primary};
      --hover: ${darken(0.19, primary)};
    `}

  ${props =>
    props.color === 'danger' &&
    css`
      --button: ${danger};
      --hover: ${darken(0.19, danger)};
    `}

  ${props =>
    props.color === 'white' &&
    css`
      --button: ${light};
      --txt: ${normal};
      --hover: ${lighten(0.4, info)};
    `}

  ${props =>
    props.color === 'dark' &&
    css`
      --button: ${normal};
      --hover: ${darken(1, normal)};
    `}

  display: flex;
  justify-content: center;
  align-items: center;
  border-width: ${props => (props.variant === 'outline' ? '1px' : 0)};
  border-style: solid;
  border-color: var(--button);
  border-radius: ${props => (props.variant === 'text' ? 0 : '50px')};
  background-color: ${props =>
    props.variant === 'solid' ? 'var(--button)' : 'transparent'};
  padding: 0.5rem 1.7rem;
  white-space: nowrap;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    border-color: ${props => (props.variant === 'solid' ? '' : 'var(--hover)')};
    background-color: ${props =>
      props.variant === 'solid' ? 'var(--hover)' : 'transparent'};

    span {
      color: ${props => (props.variant === 'solid' ? '' : 'var(--hover)')};
    }

    svg {
      fill: ${props => (props.variant === 'solid' ? '' : 'var(--hover)')};
    }
  }

  &:disabled {
    cursor: inherit;
    opacity: 0.5;

    &:hover {
      pointer-events: none;
    }
  }

  > *:not(:last-child) {
    margin-left: ${props => (props.iconPosition === 'right' ? '5px' : 0)};
    margin-right: ${props => (props.iconPosition === 'left' ? '5px' : 0)};
  }

  .spinner {
    border-top-color: ${props =>
      props.variant === 'solid' ? '' : 'var(--button)'};
  }

  span {
    position: relative;
    font-size: 0.875rem;
    color: ${props =>
      props.variant === 'solid' ? 'var(--txt)' : 'var(--button)'};
    pointer-events: none;
    transition-duration: 0.3s;
    order: ${props => (props.iconPosition === 'left' ? 2 : 1)};
  }

  svg {
    order: ${props => (props.iconPosition === 'left' ? 1 : 2)};
    width: auto;
    min-width: ${rem('20px')};
    height: ${rem('20px')};
    fill: ${props =>
      props.variant === 'solid' ? 'var(--txt)' : 'var(--button)'};
    transition: 0.3s;
  }
`;
