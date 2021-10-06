import styled, { keyframes } from 'styled-components/macro';
import { colors } from '../../utils/variables';
import { rem } from 'polished';

const { info } = colors;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const wind = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

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

export const HeaderImg = styled.div`
  svg {
    width: 450px;
    max-width: 100%;
    margin: 0 auto;
    
    .sharp-1 {
      transform-origin: top left;
      transform-box: fill-box;
      animation: ${rotation} 3s linear infinite;
    }

    .sharp-2 {
      transform-origin: top right;
      transform-box: fill-box;
      animation: ${rotation} 5s linear infinite;
    }

    .wind {
      transform-origin: bottom;
      transform-box: fill-box;
      animation: ${wind} 3s ease infinite;
    }
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${info};
`;
