import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VscNewFile } from 'react-icons/vsc';


export const RegisterActivityLink = styled(Link)`

`;

export const RegisterIcon = styled(VscNewFile)`
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  margin: 1rem;
  height: 4rem;
  width: 4rem;
  padding: .8rem;

  background: var(--color-primary);
  border-radius: 50%;
  fill: var(--color-white);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: .2s;

  &:hover {
    background-color: var(--color-primary-accent);
    transform: translateY(-4px);
  }
`;