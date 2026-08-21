import { useState } from "react"
import "./App.css"
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

  function handleSubmit(e) {
  e.preventDefault();

  console.log(data);

  localStorage.setItem("Data", JSON.stringify(data));

}

  
  return(
    <>
    <form onSubmit={handleSubmit}>

  <h2>Register</h2>

  <div className="input-group">
    <label>Name</label>
    <input
      type="text"
      placeholder="Enter your Name"
      name="name"
      value={data.name}
      onChange={handleChange}
      required
    />
  </div>

  <div className="input-group">
    <label>Email</label>
    <input
      type="email"
      placeholder="Enter your Email"
      name="email"
      value={data.email}
      onChange={handleChange}
      required
    />
  </div>

  <div className="input-group">
    <label>Password</label>
    <input
      type="password"
      placeholder="Enter your Password"
      name="password"
      value={data.password}
      onChange={handleChange}
      required
      minLength="6"
    />
  </div>

  <input type="submit" value="Register" />

</form>
    </>
  )
}

export default App