import styled from 'styled-components';

export const PossibleTags = styled.div`
  position: absolute;
  margin-top: 1.5rem;
  left: 0;
  right: 0;
  width: auto;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  z-index: 99;
  transition: .2s;
`;

export const PossibleTag = styled.div`
  font-size: 1rem;
  padding: .25rem;
  background: var(--color-white);
  border-top: 1px solid var(--color-border);
  cursor: pointer;
  transition: .3s;
  
  &:hover, &.selected {
    font-weight: bold;
    background: var(--color-white-blue);
  }
`;