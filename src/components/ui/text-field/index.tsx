import React, { CSSProperties } from 'react';
import { ErrorField } from '../..';
import * as Styles from './styles';
import { TextFieldType } from './types';

interface TextFieldProps {
  type?: TextFieldType;
  minimal?: boolean;
  error?: string;
  icon?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  dataTestId?: string;
  className?: string;
  style?: CSSProperties;
  min?: number;
  max?: number;
  pattern?: string;
  required?: boolean;
}

const TextField = (props: TextFieldProps) => {
  const {
    type = 'text',
    minimal = true,
    value,
    icon,
    name,
    defaultValue,
    placeholder = '',
    onChange = () => {},
    disabled = false,
    error,
    dataTestId,
    className = 'text-field',
    style,
    pattern,
    required = false,
    min,
    max,
  } = props;

  return (
    <>
      <Styles.TextFieldInputStyle
        icon={icon}
        name={name}
        minimal={minimal}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        error={error}
        data-testid={dataTestId}
        style={style}
        pattern={pattern}
        required={required}
        min={min}
        max={max}
      />
      {error ? <ErrorField error={error} /> : null}
    </>
  );
};

export default TextField;
