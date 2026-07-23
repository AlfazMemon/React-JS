import { useState } from "react"


function App()
{
  const [data,setdata] = useState(1);

  

  function increment(){

    setdata(data + 1);

  }

  function decrement(){
    setdata(data - 1);
  }

  return(
    // <div>

    // <h1>Counter : {data} </h1>

    // <button onClick={()=>setdata(data+1)}>+</button>
    // <button onClick={()=>setdata(data-1)}>-</button>

    // </div>

    <div>
      
      <h1>counter : {data} </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App