import styled from 'styled-components';
import { rem } from 'polished';
import { device } from '../utils/breakpoints';
import { colors } from '../utils/variables';

const { info } = colors;

export const PositionRelative = styled.div`
  position: relative;
`;

export const PositionAbsulote = styled.div`
  position: absolute;
`;

export const PositionStickyTop = styled.div`
  position: sticky;
  top: 0;
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexWrapColumn = styled.div`
  width: 100%;
  padding: ${rem('8px')};

  @media ${device.m} {
    flex: 1;
  }
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const TextRight = styled.div`
  text-align: right;
`;

export const TextLeft = styled.div`
  text-align: left;
`;

export const UnstyledList = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;

  li {
    padding-top: ${rem('8px')};
  }
`;

export const SociauxList = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;

  li {
    display: inline-block;
    margin: ${rem('8px')};

    svg {
      fill: ${info};
    }
  }
`;

export const Newsletter = styled.div`
  position: relative;
  
  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: ${rem('8px')} ${rem('16px')};
    height: 100%;
  }

  input {
    background-color: transparent;
    padding-right:${rem('59.2px')};
  }
`;
