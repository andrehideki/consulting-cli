import { useAuth } from "../../providers/auth";
import { MdExitToApp } from "react-icons/md";
import styled from "styled-components";

const Logout = () => {
  const { logout } = useAuth();

  return (
    <LogoutWrapper onClick={ logout }>
      <MdExitToApp />
    </LogoutWrapper>
  );
}

const LogoutWrapper = styled.button`
  font-size: 1.5rem;
  display: flex;
  color: #4d94ff;
  background: none;
  cursor: pointer;
  border: none;
`;

export default Logout;