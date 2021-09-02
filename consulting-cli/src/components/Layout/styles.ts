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


const PageContent = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #f2f2f2;
  padding: 1rem;

  h2 {
    margin-bottom: .5rem;
  }
`;


export { NavBarContent, Links, UserContent, PageContent };