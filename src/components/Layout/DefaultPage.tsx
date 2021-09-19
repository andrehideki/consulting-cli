import NavBar from './Navbar';
import { PageContent, Title } from './styles';

const DefaultPage = (props: any) => {
  return (
    <>
      <NavBar />
      <PageContent>
        <Title>{ props.title }</Title>
        { props.children }
      </PageContent>
    </>
  );
}

export default DefaultPage;