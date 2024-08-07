import React, { useEffect } from 'react';
import Layoutcheck from '../components/layoutcheck';

export default function Layout({ children }) {
  

  return (
    <>
    <Layoutcheck/>
      <main>{children}</main>
    </>
  );
}
