import styled, { keyframes } from 'styled-components/macro';
import { device } from '../../utils/breakpoints';
import { colors } from '../../utils/variables';

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

const type = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(3deg);
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
`;

export const HeaderContent = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 2rem 0;

  @media ${device.l} {
    width: 60%;
  }
}`

export const HeaderImg = styled.div`
  margin: 2rem 0 5rem;

  @media ${device.l} {
    width: 40%;
    margin: 2rem 0;
  }

  svg {
    width: 450px;
    max-width: 100%;
    
    .sharp-1 {
      transform-origin: top left;
      transform-box: fill-box;
      animation: ${rotation} 11s linear infinite;
    }

    .sharp-2 {
      transform-origin: top right;
      transform-box: fill-box;
      animation: ${rotation} 13s linear infinite;
    }

    .wind {
      transform-origin: bottom;
      transform-box: fill-box;
      animation: ${wind} 3s ease infinite;
    }

    .finger-1 {
      transform-origin: left;
      transform-box: fill-box;
      animation: ${type} 0.3s ease infinite;
    }
    .finger-2 {
      transform-origin: left;
      transform-box: fill-box;
      animation: ${type} 0.5s ease infinite;
    }
    .finger-3 {
      transform-origin: left;
      transform-box: fill-box;
      animation: ${type} 0.6s ease infinite;
    }

    .character-1-hand {
      transform-origin: left;
      transform-box: fill-box;
      animation: ${wind} 7s ease infinite;
    }
    .character-1-head {
      transform-origin: left;
      transform-box: fill-box;
      amimation-dalay: 10s;
      animation: ${wind} 10s ease infinite;
    }
    .character-2-head {
      transform-origin: bottom;
      transform-box: fill-box;
      animation: ${wind} 10s ease infinite;
    }
    .character-3-head {
      transform-origin: bottom;
      transform-box: fill-box;
      animation: ${wind} 5s ease infinite;
    }
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${info};
`;
