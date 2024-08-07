import React,{useEffect } from 'react'
import  '../app/globals.css'; // Global styles
import Layout from './Layout'

// import Login from '../components/login';
export default function _app({Component,pageProps}) {
 
  return (
    <>
    <Layout>
        <Component {...pageProps}/>
    </Layout>

    </>
  )
}