
import React from "react";
import "./App.css";
import { Outlet } from 'react-router-dom';
import LoginButton from "./Components/LoginButton";
import CreatePostButton from "./Components/createPost";
import Preview from "./Components/preview";
import Hero from "./Components/Hero";
import Navbar from './components/Navbar';
// import BootstrapCard from './Components/BootstrapCard';

import {  ApolloClient,  InMemoryCache,  ApolloProvider,  createHttpLink,} from '@apollo/client';
const httpLink = createHttpLink({
  uri: '/graphql',
});
import { setContext } from '@apollo/client/link/context';



const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
 
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {
  return (
    <>
      <ApolloProvider client={client}>
      <Navbar />
      {/* <Hero /> */}
      <main>
        <Outlet />
      </main>
      
      {/* <LoginButton />
      
      <Preview /> */}
      {/* <Navbar /> */}
      </ApolloProvider>
    </>
    )
}

  export default App

