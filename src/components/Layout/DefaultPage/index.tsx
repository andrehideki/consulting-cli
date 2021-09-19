import NavBar from '../Navbar';
import { PageContent, Title, Container, Content } from './styles';

const DefaultPage = (props: any) => {
  return (
    <Container>
      <NavBar />
      <PageContent>
        <Title>{ props.title }</Title>
        <Content>
          { props.children }
        </Content>
      </PageContent>
    </Container>
  );
}

export default DefaultPage;