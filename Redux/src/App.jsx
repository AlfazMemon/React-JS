import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './actiontype'

const App = () => {
  const count = useSelector(((state)=>state.count))

  const dispatch = useDispatch()

  return (
    <div>
      <h1>COUNTER : {count}</h1>
      <button onClick={()=>dispatch({type : Increment,payload : 1})}>+</button>
      <button onClick={()=>dispatch({type : Decrement,payload : 1})}>-</button>

      
    </div>
  )
}

export default App
