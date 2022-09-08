import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
 

  return (
    <div className="App">
      <div className='tenzies'>
        <div className='tenzies-h1'><h1>Tenzies</h1></div>
        <div className='tenzies-h3'><h3>
          Roll until all dice are the same.Click each die to freeze it at its current value between rolls.
          </h3></div>
        <div className='tenzies-dice'>     
        <div className='tenzies-die'></div>
        <div className='tenzies-die'></div>
        <div className='tenzies-die'></div>
        <div className='tenzies-die'></div>
        <div className='tenzies-die'></div>
        <div className='tenzies-die'></div>
        <div className='tenzies-die'></div>
        <div className='tenzies-die'></div>
        <div className='tenzies-die'></div>
        <div className='tenzies-die'></div>
        </div>
      <div className='tenzies-roll'><button>ROLL</button></div>
       </div> 
    </div>
  )
}

export default App
