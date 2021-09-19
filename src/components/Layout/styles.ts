import styled from 'styled-components';

export const NavBarContent = styled.nav`
  width: 100%;
  padding: 1rem;

  border-bottom: 1px solid #e1e4e8;

  display: flex;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: 600;
    color: #4d94ff;
  }

  button {
    border: none;
  }
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  
  div {
    display: flex;
    flex-direction: column;
  }

  span {
    color: #4d94ff;
  }

  small {
    color: #80b3ff;
    font-size: .75rem;
  }
`;


export const PageContent = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: var(--color-white);
  padding: 2rem 5rem;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
`;