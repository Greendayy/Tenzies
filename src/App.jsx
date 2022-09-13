import './App.css'
import Die from './Die';
import React from 'react';
import { nanoid } from "nanoid"
import Confetti from 'react-confetti';

function App() {
const [dice, setDice] = React.useState(allNewDice())
const [tenzies,setTenzies]=React.useState(false)

React.useEffect(()=>{
  const allHold=dice.every(die=>die.isHeld)
  const firstValue=dice[0].value
  const allValueSame=dice.every(die=>die.value===firstValue)
  if(allHold&&allValueSame){
    setTenzies(true)
    console.log("You won!")}
},[dice])
  function generatorNewDie(){
    return{
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generatorNewDie())
    }
    return newDice
  }
  console.log(allNewDice())

  function rollDice() {
    if(!tenzies){ setDice(oldDice=>oldDice.map(die=>{
      return die.isHeld?
      die:
      generatorNewDie()
}))}else{
  setTenzies(false)
  setDice(allNewDice())
}
  
  }

  function diceHold(id) {
    setDice(oldDice=>oldDice.map(die=>
      {return die.id===id?
        {...die,isHeld:!die.isHeld}:
        die
      }
    ))
  }
  const diceElements = dice.map(die =>
    <Die 
    key={die.id} 
    value={die.value} 
    isHeld={die.isHeld} 
    id={die.id} 
    diceHold={() => diceHold(die.id)} />)

  return (
    <div className="App">
    
      <div className='tenzies'>
      {tenzies&&<Confetti/>}
        <div className='tenzies-h1'><h1>Tenzies</h1></div>
        <div className='tenzies-h3'><h3>
          Roll until all dice are the same.Click each die to freeze it at its current value between rolls.
        </h3></div>
        <div className='tenzies-dice'>
          {diceElements}
          {/* <Die value="1"/>
       <Die value="2"/>
       <Die value="3"/>
       <Die value="4"/>
       <Die value="5"/>
       <Die value="6"/>
       <Die value="1"/>
       <Die value="1"/>
       <Die value="1"/>
       <Die value="1"/> */}
        </div>

        <button className='tenzies-roll' 
                onClick={rollDice}>
          {tenzies?"NEW GAME":"ROLL"}
          </button>

      </div>
    </div>
  )
}

export default App
