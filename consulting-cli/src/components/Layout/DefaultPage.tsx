import React from 'react';
import NavBar from './Navbar';

const DefaultPage = (props: any) => {
  return (
    <>
      <NavBar />
      { props.children }
    </>
  );
}

export default DefaultPage;