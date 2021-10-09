import styled from 'styled-components/macro';
import { rem } from 'polished';

export const Navigation = styled.div`
  position: relative;
  padding: ${rem('24px')} ${rem('16px')};

  img {
    max-width: 160px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
