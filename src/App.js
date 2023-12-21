
import React, { useState } from 'react'


import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import {
//   BrowserRouter,
//   Routes,
//   Route,

// } from "react-router-dom";


function App() {
const [mode , setMode] = useState('light')





const toggleMode = () =>{
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = '#042743'
    document.title = 'TextUtils - Dark Mode'
   
  }
  else{
    setMode ( 'light'
) 
document.body.style.backgroundColor = 'white';
document.title = 'TextUtils - Light Mode'

}
}



  return (
    <>
{/* <BrowserRouter> */}
<Navbar title ="Navbar" mode = {mode} toggleMode = {toggleMode}/>

<div className="container my-3">
{/* <Routes> */}
          {/* <Route exact path="/about" element = {  <About />}> </Route> */}
          
          
        
          {/* <Route exact path="/" element = {<Textform heading = "Enter the text to analyze below" mode = {mode}/>}></Route> */}
          
          <Textform heading = "Enter the text to analyze below" mode = {mode}/>
  {/* </Routes> */}
  
 
</div>
{/* </BrowserRouter> */}
    </>
    
  );
}

export default App;
