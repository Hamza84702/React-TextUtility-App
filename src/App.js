import './App.css';
// import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/navbar';

function App() {
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    <Navbar title="TextUtils"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
