import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
  height: 100%;
`;

export const SaveButton = styled.button`
  padding: .75rem 1.75rem;
  color: var(--color-white);
  font-weight: bold;
  background: var(--color-primary);
`;

export const CancelButton = styled.button`
  padding: .75rem 1.75rem;
`;