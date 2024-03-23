import './App.css';
// import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/navbar';
import React, { useState } from 'react'

function App() {

  const [mode, setmode] = useState('light');

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    <Navbar title="TextUtils" mode={mode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
