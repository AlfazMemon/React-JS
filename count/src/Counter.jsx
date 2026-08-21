import { useState } from "react"
import './Counter.css'

function Counter()
{
    const [value,setValue] =useState(100)
   
    function handleClick(){
        setValue(value+1)
    }
    function decrement()
    {
        setValue(value-1)
    }
    let a = 100, b=20
    return(

        <>
            <h1 className="abc"> {value} </h1>
            <button onClick={handleClick}>+</button>
            <button onClick={decrement}>-</button>

            {
                (a>b) ? "A is max" : "B is max"
            }
            
        </>

    )
}
export default Counter