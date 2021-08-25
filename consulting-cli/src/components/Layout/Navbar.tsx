import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import Logout from "../Logout/Logout";

const NavBar = () => {
  const { auth } = useAuth();
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/atividades">Atividades</Link>
      <div>
        { auth.email }
      </div>
      <Logout />
    </nav>
  );
}

export default NavBar;