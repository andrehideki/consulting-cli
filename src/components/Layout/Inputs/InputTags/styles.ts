import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';

export const PossibleTags = styled.div`
  position: absolute;
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

export const SelectedTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: .5rem;
  margin-bottom: .25rem;

`;

export const SelectedTag = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;
  font-size: 1rem;
  color: var(--color-white);
  background: var(--color-primary);
  padding: .5rem;
  border-radius: 6px;
`;

export const CloseIcon = styled(VscClose)`
  cursor: pointer;
  font-size: 1rem;
`;