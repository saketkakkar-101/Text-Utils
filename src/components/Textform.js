import React , {useState}from 'react'



export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
 
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log("onchange");
        setText(event.target.value);
    }




const handleExtraSpaces =() =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}

    const [ text , setText] = useState('Enter text here');
    // setText("new text")
  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white' : '#042743'}}>
   <h1 className='mb-2'>{props.heading}</h1>
<div className="mb-3">

<textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor : props.
  mode === 'dark'?'grey' : 'white' , color : props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
</div>
<button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

<button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces </button>

    </div>
    <div className="container my-3"  style={{color : props.mode === 'dark'?'white' : '#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{
        return element.length!==0}).length} words and {text.length} Characters </p>
      
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
