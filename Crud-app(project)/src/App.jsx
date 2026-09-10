import { useEffect, useState } from 'react'
import './App.css'


const App = () => {

  const [users, setUsers] = useState([]);

  const [EditId, setEditId] = useState(null)

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    password: ""

  })

  useEffect(() => {

    fetch("http://localhost:3000/users")

      .then((res) => res.json())

      .then((data) => {

        setUsers(data);

      });

  }, [])


  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {

    e.preventDefault();

    if (formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.gender === "" ||
      formData.dob === "" ||
      formData.password === "") {
      alert("Please Fill all Fields")
      return;
    }

    if (EditId === null) {

      fetch("http://localhost:3000/users", {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)
      })

        .then((res) => res.json())
        .then((data) => {
          setUsers([...users, data]);

          setFormData({
            name: "",
            email: "",
            phone: "",
            gender: "",
            password: "",
            dob: ""
          })
        })


    }

    else {
      fetch(`http://localhost:3000/users/${EditId}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)
      })

        .then((res) => res.json())
        .then((data) => {
          setUsers(
            users.map((user) => user.id === EditId ? data : user)
          )
        })

      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        dob: ""
      })

      setEditId(null)

    }


  }


  function DeleteUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",

    })
      .then(() => {

        setUsers(users.filter((user) => user.id !== id))

      })


  }

  function EditUser(user) {
    setEditId(user.id);

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      dob: user.dob,
      password: user.password
    })
  }

  return (
    <div className="container">






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

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input type="text"
          name='phone'
          placeholder='Enter phone'
          value={formData.phone}
          onChange={handleChange} />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

         <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

        <button type='submit'>
          {EditId === null ? "Add User" : "Update User"}
        </button>
      </form>


      <div className="users">
        {users.map((user) => (
          <div className='user-card' key={user.id}>

            <h3>Name :{user.name}</h3>

            <p>Email :{user.email}</p>

            <p>Phone :{user.phone}</p>

            <p>Gender: {user.gender}</p>

            <p>Date of Birth: {user.dob}</p>

            <button className='edit-btn' onClick={() => EditUser(user)}>Edit</button>

            <button className='delete-btn' onClick={() => DeleteUser(user.id)}>Delete</button>

          </div>
        )
        )}
      </div>


    </div>
  )
}

export default App
