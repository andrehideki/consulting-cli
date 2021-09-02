import React from 'react';
import NavBar from './Navbar';
import { PageContent } from './styles';

const DefaultPage = (props: any) => {
  return (
    <>
      <NavBar />
      <PageContent>
        <h2>{ props.title }</h2>
        { props.children }
      </PageContent>
    </>
  );
}

export default DefaultPage;