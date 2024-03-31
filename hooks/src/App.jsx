import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 let [counter,setcounter] = useState(0);

 const addvalue= ()=>{
  // console.log('value added',Math.random()*10);
  if (counter<20) 
  setcounter(counter+1)
  // console.log('counter value',counter);
  
 }
 const removevalue = ()=>{
  if (counter>=1) 
  setcounter(counter-1)
  // console.log('counter value',counter);

    
  

 }
 
  return (
    <>
     <h1>this particulat web browser is for hooks</h1>
     <p>let do something fun</p>
     <h1>counter value:{counter}</h1>
     <button
     onClick={addvalue}
     >
      
     add value
     </button>
     
     <button
     onClick={removevalue}

     >
remove value
     </button>
     
    </>
  )
}

export default App
