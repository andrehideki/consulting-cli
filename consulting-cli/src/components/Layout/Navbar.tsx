import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import Logout from "../Logout/Logout";
import { NavBarContent, Links, UserContent } from "./styles";

const NavBar = () => {
  const { auth } = useAuth();
  return (
    <NavBarContent>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/atividades">Atividades</Link>
      </Links>
      <UserContent>
        <span>{ auth.email }</span>
        <Logout />
      </UserContent>
    </NavBarContent>
  );
}

export default NavBar;