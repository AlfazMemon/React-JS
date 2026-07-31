import { useState } from "react"

function App()
{

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


function Display(e){

  e.preventDefault()

  const Data = {
    name,
    email,
    password
  }

  localStorage.setItem("studentData",JSON.stringify(Data))
  
} 

  return(
    <form action="" onSubmit={Display}>
      <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/>
      <input type="submit" name="" id="" />
    </form>
  )
}

export default App