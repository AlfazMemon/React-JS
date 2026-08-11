import React from 'react'
import {Store} from './Store'

const App = () => {
  const DisplayStore = Store
  const data = useSelector((state)=>state)
  
  console.log(data)
  return (
    <div>
      <h1>Hello</h1>


      
    </div>
  )
}

export default App
