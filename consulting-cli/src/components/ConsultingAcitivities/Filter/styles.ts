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

      select {
        font-size: 1rem;
        padding: .5rem;
      }
    }

    button {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.5rem;
    }
  }
`

export const SearchIcon = styled(MdSearch)`
  font-size: 1.25rem;
  margin-right: .25rem;
`;

export const Button = styled.button`

`