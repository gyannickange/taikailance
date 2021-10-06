import styled from 'styled-components/macro';
import { lighten } from 'polished';
import { colors } from '../../../utils/variables';

interface InputStyleProps {
  minimal?: boolean;
  icon?: string;
  error?: string;
}

const { info, danger, purple } = colors;

export const TextFieldInputStyle = styled.input<InputStyleProps>`
  border-width: ${props => (props.minimal ? '0 0 1px 0' : '1px')};
  border-style: solid;
  border-color: ${props => (props.error ? danger : info)};
  border-radius: ${props => (props.minimal ? 0 : '6px')};
  height: ${props => (props.minimal ? '40px' : '50px')};
  padding: ${props => (props.minimal ? 0 : '10px')};
  font-family: inherit;
  font-size: 1rem;
  transition-duration: 0.3s;

  &:focus {
    border-color: ${purple};
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
