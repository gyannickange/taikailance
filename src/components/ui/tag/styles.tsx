import styled, { css } from 'styled-components/macro';
import { rem } from 'polished';
import { TagVariant, TagColor } from './types';
import { colors } from '../../../utils/variables';

interface TagWrapperProps {
  variant?: TagVariant;
  color?: TagColor;
}

const { light, info, primary, warning, danger } = colors;

export const TagWrapper = styled.span<TagWrapperProps>`
  ${props =>
    props.color === 'primary' &&
    css`
      --tag: ${primary};
    `}

  ${props =>
    props.color === 'warning' &&
    css`
      --tag: ${warning};
    `}

  ${props =>
    props.color === 'danger' &&
    css`
      --tag: ${danger};
    `}

  ${props =>
    props.color === 'info' &&
    css`
      --tag: ${info};
    `}

  ${props =>
    props.variant === 'outline' &&
    css`
      background-color: transparent !important;
    `}
    
  display: inline-block;
  border: 1px solid var(--tag);
  background-color: var(--tag);
  color: ${props => (props.variant === 'solid' ? light : 'var(--tag)')};
  border-radius: 50px;
  max-width: ${rem('150px')};
  padding: ${rem('2px')} ${rem('10px')};
  font-size: 0.85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:first-child) {
    margin-left: 5px;
  }
`;
