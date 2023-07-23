import React, { useState } from "react";
// hooks syntext

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = ('');
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
 
  //   both option are required
  const [text, setText] = useState("Enter the text");
  //   const [text, setText] = useState(" ");
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Traslate Text</h2>
        <div className="mb-3">
          {/* for = htmlFor & class = className */}
          {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Textarea
          </label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Upper Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLoClick}
        >
        Lower Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleClearClick}
        >
            Clear Text
        </button>
        </div> 
        <div className="my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h4>Text Summary</h4>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}





// import React, {useState} from 'react'
// export default function TextForm(props) {
//     const handleUpClick = ()=>{
//         let newText = text.toUpperCase();
//         setText(newText)
//         props.showAlert("Converted to uppercase!", "success");
//     }
//     const handleLoClick = ()=>{ 
//         let newText = text.toLowerCase();
//         setText(newText)
//         props.showAlert("Converted to lowercase!", "success");
//     }
//     const handleClearClick = ()=>{ 
//         let newText = '';
//         setText(newText);
//         props.showAlert("Text Cleared!", "success");
//     }
//     const handleOnChange = (event)=>{
//         setText(event.target.value) 
//     }
//     const [text, setText] = useState(''); 
//     // text = "new text"; // Wrong way to change the state
//     // setText("new text"); // Correct way to change the state
//     return (
//         <>
//         <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
//             <h1 className='mb-4'>{props.heading}</h1>
//             <div className="mb-3"> 
//             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
//             </div>
//             <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
//             <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
//             <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            
//         </div>
//         <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
//             <h2>Your text summary</h2>
//             <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
//             <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
           
//         </div>
//         </>
//     )
// }