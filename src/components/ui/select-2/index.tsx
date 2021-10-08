import React from 'react';
import Select, { components } from 'react-select';

import { ErrorField, Icon } from '../..';
import * as Styles from './styles';

interface OptionProps {
  data: {
    value: string;
    label: string;
    customImage: React.ReactNode;
    icon: string;
  };
}

const Select2 = (props: any) => {
  const {
    name,
    multi = false,
    disabled = false,
    search = true,
    options,
    placeholder,
    clear = true,
    value,
    onChange = () => {},
    onInputChange = () => {},
    dataTestId,
    error,
  } = props;

  const { Option } = components;

  const CustomSelectOption = (props: OptionProps, commonProps: any) => (
    <Option {...props} {...commonProps}>
      {props.data.icon ? (
        <Icon icon={props.data.icon} />
      ) : props.data.customImage ? (
        props.data.customImage
      ) : null}
      {props.data.label}
    </Option>
  );

  const CustomSelectValue = (props: OptionProps) => (
    <div>
      {props.data.icon ? (
        <Icon icon={props.data.icon} />
      ) : props.data.customImage ? (
        props.data.customImage
      ) : null}
      {props.data.label}
    </div>
  );

  return (
    <Styles.SelectWrapper data-testid={dataTestId}>
      <Select
        className="select-interactive"
        classNamePrefix="select"
        name={name}
        isMulti={multi}
        isDisabled={disabled}
        isSearchable={search}
        options={options}
        placeholder={placeholder}
        isClearable={clear}
        value={value}
        onChange={onChange}
        onInputChange={onInputChange}
        defaultMenuIsOpen={false}
        components={{
          SingleValue: CustomSelectValue,
          Option: CustomSelectOption,
        }}
      />
      {error ? <ErrorField error={error} /> : null}
    </Styles.SelectWrapper>
  );
};

export default Select2;
