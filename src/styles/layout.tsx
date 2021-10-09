import styled from 'styled-components';
import { device } from '../utils/breakpoints';
import { rem } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding-right: ${rem('16px')};
  padding-left: ${rem('16px')};
  margin-right: auto;
  margin-left: auto;

  @media ${device.s} {
    max-width: 540px;
  }

  @media ${device.m} {
    max-width: 720px;
  }

  @media ${device.l} {
    max-width: 960px;
  }

  @media ${device.xl} {
    max-width: 1140px;
  }
`;
