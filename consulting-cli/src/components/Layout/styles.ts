import styled from 'styled-components';

const NavBarContent = styled.nav`
  width: 100%;
  padding: 1rem;

  border-bottom: 1px solid #e1e4e8;

  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
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

const UserContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  

  span {
    color: #4d94ff;
  }
`;



export { NavBarContent, Links, UserContent };