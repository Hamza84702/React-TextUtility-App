import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase Button is Clicked" + text);
        let newText = text.toLocaleUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopyText = (event) =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const handleClearText = (event) =>{
        setText("");
    }

    const handleRemoveExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder='Enter text here..'></textarea>
            </div>
        <button className="btn btn-light mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-light mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-light mx-1" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-light mx-1" onClick={handleRemoveExtraSpace}>Remove extra space</button>
        <button className="btn btn-light mx-1" onClick={handleClearText}>Clear</button>
        

    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p><span style={{color: "#70c1b3", fontWeight: "bold"}}>{wordCount}</span> <i>Words</i> and <span style={{color: "#247ba0", fontWeight: "bold"}}>{text.length}</span> <i>Characters</i></p>
        <p><span style={{color: "#e63946", fontWeight: "bold"}}>{0.008 * text.split(" ").length}</span> avg minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
