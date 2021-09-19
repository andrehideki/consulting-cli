import { useAuth } from "../../../providers/auth";
import Logout from "../../Logout";
import { Container, User } from "./styles";

const NavBar = () => {
  const { auth } = useAuth();
  
  return (
    <Container>
      <User>
        <span>{ auth.name }</span>
        <small>{ auth.email }</small>
      </User>
      <Logout />
    </Container>
  );
}

export default NavBar;