import styled from 'styled-components/macro';
import { colors } from '../../utils/variables';

const { info } = colors;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.5rem 0 3rem;

  div:first-child {
    max-width: 600px;
  }
`;

export const HeaderImg = styled.img`
  width: 450px;
  max-width: 100%;
  margin: 0 auto;
`

export const HeaderTitle = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`

export const HeaderSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${info};
`
