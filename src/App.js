import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/navbar';
import React, { useState } from 'react'

function App() {

  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>
    {
      setAlert(null);
    },1500);
  }

  const toggleMode = () =>{
    if (mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor = '#2d2e30';
      showAlert("Dark mode is enabled", "success");
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  }

 

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>

      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
