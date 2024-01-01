import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter , setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
    if (counter ===20){
      return counter
    }
    counter = counter + 1
    setCounter(counter)

  }



  const removeValue = () =>{
    if (counter === 0) {
      return counter
    }
counter = counter - 1
setCounter(counter)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
        
    </>
  )
}

export default App
