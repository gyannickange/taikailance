import React, { CSSProperties } from 'react';
import * as Styles from './styles';

interface Props {
  name?: string;
  value: string;
  label?: string | React.ReactNode;
  checked?: boolean | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
  required?: boolean;
}

const Checkbox = (props: Props) => {
  const {
    label,
    name,
    value,
    checked = false,
    onChange = () => {},
    error = false,
    disabled = false,
    className = 'checkbox',
    style,
    dataTestId,
    required = false,
  } = props;

  return (
    <Styles.CheckboxWrapper
      style={style}
      className={className}
      error={error}
      disabled={disabled}
    >
      <Styles.CheckboxLabel>{label}</Styles.CheckboxLabel>
      <Styles.CheckboxInput
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={checked}
        aria-checked={checked}
        onChange={onChange}
        error={error}
        disabled={disabled}
        data-testid={dataTestId}
        required={required}
      />
      <Styles.Checkmark />
    </Styles.CheckboxWrapper>
  );
};

export default Checkbox;
