import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VscNewFile } from 'react-icons/vsc';


export const RegisterActivityLink = styled(Link)`
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  margin: 1rem;
  background: var(--color-primary);
  border-radius: 50%;
  
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: .2s;

  &:hover {
    background-color: var(--color-primary-accent);
    transform: translateY(-4px);
  }
`;

export const RegisterIcon = styled(VscNewFile)`
  fill: var(--color-white);
  padding: .8rem;

  height: 4rem;
  width: 4rem;
`;