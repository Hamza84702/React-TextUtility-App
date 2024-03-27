import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/navbar';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';function App() {

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
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About />}>
              {/* <About /> */}
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />

      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
