import styled from 'styled-components/macro';
import { lighten } from 'polished';
import { colors } from '../../utils/variables';

const { info, primary } = colors;

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  -webkit-backdrop-filter: saturate(200%) blur(30px);
  backdrop-filter: saturate(200%) blur(30px);
  background-color: rgba(255, 255, 255, 0.54);
  box-shadow: 11px 0 38px 0 rgba(0, 0, 0, 0.10);
  border-radius: 10px;
  position: sticky;
  z-index: 2;
  top: 0;
  margin-top: -98px;
  left: 10px;
  right: 10px;

  .select__control {
    background-color: transparent;
  }
`;
  
export const SearchTop = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBottom = styled.div`
  border-top: 1px solid;
  border-color: ${lighten(0.4, info)};
  display: flex;
  justify-content: center;

  &:hover {
    border-color: ${primary};
  }

  button {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 1rem;

    &:hover {
      background-color: ${lighten(0.3, primary)};
    }
  }
`;
