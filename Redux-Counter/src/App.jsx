import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from '../Actiontype'

const App = () => {

  const count = useSelector((state)=>state.count)

  const Dispatch = useDispatch()

  return (
    <div>
      <h1>Counter :{count}</h1>
      <button onClick={()=>Dispatch({type : Increment,payload : 1})}>+</button>
      <button onClick={()=>Dispatch({type : Decrement,payload : 1})}>-</button>
    </div>
  )
}

export default App
