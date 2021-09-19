import NavBar from '../Navbar';
import Sidebar from '../Sidebar';
import { PageContent, Title, Container, Content } from './styles';

const DefaultPage = (props: any) => {
  return (
    <Container>
      <Sidebar />
      <PageContent>
        <NavBar />
        <Content>
          <Title>{ props.title }</Title>
          { props.children }
        </Content>
      </PageContent>
    </Container>
  );
}

export default DefaultPage;