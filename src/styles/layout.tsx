import styled from 'styled-components';
import { device } from '../utils/breakpoints';

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
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
