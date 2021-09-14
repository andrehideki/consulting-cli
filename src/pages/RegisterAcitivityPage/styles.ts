import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2.5rem 4rem;
  background: var(--color-white);
  width: 100%;
  height: 85%;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

export const SaveButton = styled.button`
  padding: .75rem 1.75rem;
  color: var(--color-white);
  font-weight: bold;
  background: var(--color-primary);
`

export const CancelButton = styled.button`
  padding: .75rem 1.75rem;
`