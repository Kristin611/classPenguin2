import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1>Your Catchy Headline</h1>
          <p>A brief description or call-to-action subheadline goes here.</p>
          <a href="#learn-more" className="btn">Learn More</a>
        </div>
      </header>

      <section id="learn-more" className="main-content">
        <h2>About Us</h2>
        <p>Write more details about your product or service here.</p>
        {/* Add more sections as needed */}
      </section>

      <footer>
        <p>&copy; 2024 Your Company Name</p>
      </footer>
    </div>
  );
}



export default App
