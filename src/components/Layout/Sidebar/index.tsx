import { Link } from "react-router-dom";
import { Container, Logo, Links, HomeIcon, ActivityIcon } from "./styles";

const Sidebar = () => {

  return (
    <Container>
      <Links>
        <Logo>
          <Link to="/">
            Consulting
          </Link>
        </Logo>
        <Link to="/">
          <HomeIcon />
          Home
        </Link>
        <Link to="/activities">
          <ActivityIcon />
          Atividades
        </Link>
      </Links>
    </Container>
  );
}

export default Sidebar;