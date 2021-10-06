import styled from 'styled-components/macro';
import { colors, fontWeigth } from '../../../utils/variables';

const { info } = colors;
const { bold } = fontWeigth;

export const LabelStyle = styled.label`
  color: ${info};
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: ${bold};
  text-transform: uppercase;
`;
