import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=15;
  
let [counter,setCounter]=useState(15)


  const addValue = () =>{
    //counter = counter +1;
    console.log("clicked",counter)
    if(counter<20){
      setCounter(counter + 1)

    }
    else{
      setCounter(counter)
    }
  }

  
  
  const removeValue=()=>{
  console.log("clicked",counter);
  if(counter > 0){
    setCounter(counter-1);

  }
  else{
    setCounter(counter)
  }

  }
  return (
    <>
      <h1>
        Chai Aur React
      </h1>
      <h2>Counter Value :{counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value {counter} </button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
