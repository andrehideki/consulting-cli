import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const Container = styled.div`
  background: #fafafa;
  padding: 1rem;

  form {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`

export const SearchIcon = styled(MdSearch)`
  font-size: 1.25rem;
  margin-right: .25rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: .8rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;

  color: var(--color-white);
  background: var(--color-primary);

  &:hover {
    transition: .4s;
    background: var(--color-primary-accent);
  }
`