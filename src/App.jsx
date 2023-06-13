import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';


function App() {

  return (
    <>
      <Header></Header>

      <main className="main">
        <Home />
      </main>
    </>
  )
}

export default App
