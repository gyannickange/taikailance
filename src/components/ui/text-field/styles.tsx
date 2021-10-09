import styled from 'styled-components/macro';
import { lighten, rem } from 'polished';
import { colors } from '../../../utils/variables';

interface InputStyleProps {
  minimal?: boolean;
  icon?: string;
  error?: string;
}

const { normal, info, danger, primary } = colors;

export const TextFieldInputStyle = styled.input<InputStyleProps>`
  display: block;
  width: 100%;
  padding: ${rem('6px')} ${rem('12px')};
  font-size: ${rem('16px')};
  font-weight: 400;
  line-height: 1.5;
  color: ${normal};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${lighten(0.4, info)};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: ${rem('4px')};
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:focus {
    border-color: ${primary};
    outline: none;
  }

  &:disabled {
    background-color: ${lighten(0.45, info)};
    color: ${info};
  }

  &:invalid {
    border-color: ${danger};
    outline: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }

  &:required {
    border-color: ${props => (props.error ? danger : info)};
  }

  &::placeholder {
    color: ${info};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${info};
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: ${info};
    opacity: 1;
  }
`;
