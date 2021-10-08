import styled from 'styled-components';
import { rem, lighten } from 'polished';
import { colors } from '../../../utils/variables';

const { normal, light, info, primary } = colors;

export const SelectWrapper = styled.div`
  .select {
    &-interactive {
      z-index: 3;
    }

    &__control {
      border-color: ${lighten(0.4, info)};
      min-height: ${rem('40px')};
      transition-duration: 0.3s;

      &:hover {
        border-color: ${primary};
      }

      &--is-focused {
        border-color: ${primary};
        box-shadow: none;
      }
    }

    &__value-container {
      align-items: center;
      padding: 0 ${rem('15px')};
    }

    &__placeholder {
      color: ${lighten(0.2, info)};
    }

    &__input {
      color: ${normal};
    }

    &__single-value {
      color: ${normal};
    }
    &__indicator {
      padding: 0 ${rem('15px')};
      
      &:hover {
        color: inherit;
      }
      
      svg {
        width: ${rem('22px')};
        height: ${rem('22px')};
        
        path {
          fill: hsl(0, 0%, 85%);
        }
      }
      
      &-separator {
        background-color: ${info};
      }
    }
    
    &__option {
      transition-duration: 0.3s;
      
      &:hover {
        background-color: ${primary};
        color: ${light};
      }
      
      &--is-focused {
        background-color: ${primary};
        color: ${light};
      }
      
      &--is-selected {
        background-color: ${lighten(0.4, primary)};
        color: ${normal};
      }
    }
  }

  .select__indicator-separator {
    background-color: ${lighten(0.4, info)}
  }

  .select__indicator {
    padding: ${rem('8px')};
  }

  .select__value-container > div,
  .select__option {
    display: flex;
    align-items: center;
  }

  .select__value-container.select__value-container--is-multi > div {
    align-items: stretch;
  }

  .select__value-container,
  .select__option {
    svg,
    img {
      margin: 0px ${rem('5px')} 0 0;
      width: ${rem('20px')};
      height: auto;
      transition-duration: 0.3s;
    }
  }

  .select__option--is-selected {
    svg {
      fill: ${normal};
      transition-duration: 0.3s;
    }
  }

  .select__option--is-focused {
    svg {
      fill: ${light};
      transition-duration: 0.3s;
    }
  }

  .select__value-container > div, .select__option {
    grid-area: 1 / 1 / 2 / 3;
    margin-left: 2px;
    margin-right: 2px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
  }
`;
