import { lighten, rem } from 'polished';
import styled from 'styled-components/macro';
import { device } from '../../utils/breakpoints';
import { colors } from '../../utils/variables';

const { normal, info } = colors;

export const Wrapper = styled.div`
  margin-top: ${rem('96px')};
  background-color: #f4f4f4;
  color: ${normal};
  text-align: center;

  a {
    text-decoration: none;
  }
`;
  
export const FooterTop = styled.div`
  padding: ${rem('80px')} 0;
  
  .footer-top-row {
    text-align: left;

    > div {
      padding: 0.5rem;

      &:nth-child(1) {
        width: 100%;
        
        @media ${device.m} {
          width: 30%;
        }
      }

      &:nth-child(2) {
        width: 100%;

        @media ${device.m} {
          width: 20%;
        }
      }

      &:nth-child(3) {
        width: 100%;

        @media ${device.m} {
          width: 20%;
        }
      }

      &:nth-child(4) {
        width: 100%;

        @media ${device.m} {
          width: 30%;
        }
      }
    }
  }
`;

export const FooterBottom = styled.div`
  padding: ${rem('24px')} 0;
  border-top: 1px solid ${lighten(0.4, info)};

  p {
    font-size: ${rem('14px')};
  }
`;
