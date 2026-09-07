import { useEffect, useState } from 'react'
// import './App.css'


const App = () => {

  const [users,setUsers] = useState([]);

  const [EditId,setEditId] = useState(null)

  const [formData,setFormData] = useState({

    name : "",
    email : "",
    phone : ""
    
  })

  useEffect(()=>{

    fetch("http://localhost:3000/users")

    .then((res)=>res.json())

    .then((data)=>{

      setUsers(data);

    });

  },[])


  function handleChange(e){

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {

  e.preventDefault();

  if(EditId === null){

  fetch("http://localhost:3000/users", {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(formData)
  })

  .then((res)=>res.json())
  .then((data)=> {
    setUsers([...users,data]);

    setFormData({
      name : "",
      email : "",
      phone : ""
    })
  })


}

  else{
    fetch(`http://localhost:3000/users/${EditId}`,{
      method : "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(formData)
  })

    .then((res)=>res.json())
    .then((data)=>{
      setUsers(
        users.map((user)=> user.id === EditId ? data : user)
      )
    })

    setFormData({
      name : "",
      email : "",
      phone : ""
    })

    setEditId(null)

  }


}


function DeleteUser(id){
  fetch(`http://localhost:3000/users/${id}`,{
    method : "DELETE",

  })
  .then(()=>{

    setUsers(users.filter((user)=> user.id !== id))

  })

  
}

function EditUser(user){
    setEditId(user.id);

    setFormData({
      name : user.name,
      email : user.email,
      phone : user.phone
    })
  }

  return (
    <div>

  
      
    <h1>Users</h1>

    {users.map((user)=>(
      <div key={user.id}>

        <h3>{user.name}</h3>

        <p>{user.email}</p>

        <button onClick={()=>EditUser(user)}>Edit</button>

        <button onClick={()=>DeleteUser(user.id)}>Delete</button>

      </div>
    )
    )}

    <form action="" onSubmit={handleSubmit}>
      <input type="text"
      name="name"
      placeholder='Enter name'
      value={formData.name}
      onChange={handleChange} />

      <input type="email"
      name='email'
      placeholder='Enter Email'
      value={formData.email}
      onChange={handleChange} />

      <input type="text"
      name='phone'
      placeholder='Enter phone'
      value={formData.phone}
      onChange={handleChange} />

      <button type='submit'>
        {EditId === null ? "Add User" : "Update User"}
      </button>
    </form>


    </div>
  )
}

export default App
