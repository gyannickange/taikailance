import styled from 'styled-components/macro';
import { lighten } from 'polished';
import { colors } from '../../utils/variables';

const { info, primary, light } = colors;

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  left: 10px;
  right: 10px;

  .select__control {
    background-color: transparent;
  }
`;
  
export const SearchTop = styled.div`
  background-color: ${light};
  box-shadow: 0px -8px 18px 0 rgba(0, 0, 0, 0.08);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: -98px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBottom = styled.div`
  -webkit-backdrop-filter: saturate(200%) blur(13px);
  backdrop-filter: saturate(200%) blur(13px);
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 9px 20px 0 rgba(0, 0, 0, 0.08);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
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
