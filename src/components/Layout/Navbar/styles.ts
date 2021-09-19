import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  background: var(--color-white);
`;

export const User = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 1rem;
  cursor: default;
`;