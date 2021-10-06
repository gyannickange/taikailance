import React, { CSSProperties } from 'react';
import { Spinner, Icon } from '../..';
import * as Styles from './styles';
import { ButtonColor, ButtonVariant } from './types';

export interface ButtonProps {
  variant?: ButtonVariant;
  circle?: boolean;
  color?: ButtonColor;
  value?: string;
  className?: string;
  ariaLabel?: string;
  action?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  loading?: boolean;
  dataTestId?: string;
  eventId?: string;
  style?: CSSProperties;
  type?: 'submit' | 'reset' | 'button';
  icon?: string;
  iconPosition?: 'left' | 'right';
}

const Button = (props: ButtonProps) => {
  const {
    variant = 'solid',
    circle = false,
    color = 'primary',
    value = '',
    className = 'button',
    ariaLabel,
    action = () => {},
    disabled = false,
    loading = false,
    dataTestId,
    eventId,
    style,
    type,
    icon = '',
    iconPosition = 'left',
  } = props;

  return (
    <Styles.ButtonWrapper
      variant={variant}
      color={color}
      circle={circle}
      className={className}
      value={value}
      aria-label={ariaLabel}
      onClick={action}
      disabled={disabled || loading}
      data-testid={dataTestId}
      data-event={eventId}
      style={style}
      type={type}
      iconPosition={iconPosition}
    >
      {loading ? <Spinner /> : icon ? <Icon icon={icon} /> : null}
      {value && <span>{value}</span>}
    </Styles.ButtonWrapper>
  );
};

export default Button;
