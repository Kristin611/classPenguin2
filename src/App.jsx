
import "./App.css";
import LoginButton from "./Components/loginButton";
import CreatePostButton from "./Components/createPost";
import Preview from "./Components/preview";
import Hero from "./Components/Hero";
import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <>

      <Hero />
      <LoginButton />
      <CreatePostButton />
      <Preview />

      <Navbar />
    </>
    )
}

  export default App

