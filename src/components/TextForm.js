import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase Button is Clicked" + text);
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase","success");
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase","success");

    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopyText = (event) =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Your text is coppied to clipboared","success");


    }

    const handleClearText = (event) =>{
        setText("");
    }

    const handleRemoveExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed from yor text","success");
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className="container mb-2" style={{color: props.mode==='light' ? 'black':'white'}}>
        <div className="container">
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light' ? 'white':'#212529', color: props.mode==='light' ? 'black':'white'}} placeholder='Enter text here..'></textarea>
                </div>
            <button disabled={text.length===0} className="btn btn-light mx-1 my-1" onClick={handleUpClick}>To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-light mx-1 my-1" onClick={handleLoClick}>To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-light mx-1 my-1" onClick={handleCopyText}>Copy</button>
            <button disabled={text.length===0} className="btn btn-light mx-1 my-1" onClick={handleRemoveExtraSpace}>Remove extra space</button>
            <button disabled={text.length===0} className="btn btn-light mx-1 my-1" onClick={handleClearText}>Clear</button>
            

        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p><span style={{color: "#70c1b3", fontWeight: "bold"}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</span> <i>Words</i> and <span style={{color: "#247ba0", fontWeight: "bold"}}>{text.length}</span> <i>Characters</i></p>
            <p><span style={{color: "#e63946", fontWeight: "bold"}}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</span> avg minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "There is no text to Prevew!"}</p>
        </div>
    </div>
    </>
  );
}
