import { useState } from "react"

function App(){

  const InitialState = {
    name : "",
    email : "",
    password : ""

  }

  const [data,setData] = useState(InitialState)

  function handleChange(e){

    setData({...data,[e.target.name]:e.target.value})

  }

  function handleSubmit(e){

    e.preventDefault()

    console.log(data)

    localStorage.setItem("Data",JSON.stringify(data))
  }

  
  return(
    <>
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your Name" name="name" onChange={(e)=>handleChange(e)}/> <br /> <br />
      <input type="email" placeholder="Enter Your Email" name="email" onChange={(e)=>handleChange(e)}/> <br /> <br />
      <input type="password" placeholder="Enter Your Password" name="password" onChange={(e)=>handleChange(e)}/> <br /> <br />
      <input type="submit" />
    </form>
    </>
  )
}

export default App