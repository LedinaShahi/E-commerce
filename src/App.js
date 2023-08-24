import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
 <Navbar></Navbar>
 <Home></Home> 
 </div>
    );
}

export default App;
