import styled from 'styled-components/macro';
import { colors } from '../../utils/variables';

const { primary } = colors;

export const Wrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  box-shadow: 0px 1px 8px 0 rgba(0, 0, 0, 0.10);
  border-radius: 10px;
  transition: .3s all;
  
  &:hover {
    transform: scale(1.01);
  }
  `;
  
export const CollapseButton = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 1.5rem;
`;

export const CollapseContent = styled.div`
  max-width: 900px;
  margin: 2rem auto 0;
  padding 1.5rem;

  &.collapsed {
    display: none;
  }

  &.expanded {
    display: block;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const JobCardCompanyName = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: ${primary};
`;

export const JobCardTitle = styled.div`
  margin: 0 0 0.5rem;
  font-weight: 700;
`;

export const JobCardSubtitle = styled.div`
  font-size: 0.875rem;
`;
