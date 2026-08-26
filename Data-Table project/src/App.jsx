import { useEffect, useState } from "react"
import "./App.css"

function App() {

  const InitialState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    hobbies: [],
    city: ""
  }

  const [data, setData] = useState(InitialState)
  const [users, setUsers] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [errors, setErrors] = useState({})


  // GET DATA FROM LOCAL STORAGE
  useEffect(() => {

    const savedData = JSON.parse(localStorage.getItem("Data")) || []

    setUsers(savedData)

  }, [])

  function validate() {

  const newErrors = {}

  if (!data.name.trim()) {
    newErrors.name = "Name is required"
  } else if (data.name.length < 3) {
    newErrors.name = "Name must be at least 3 characters"
  }

  if (!data.email.trim()) {
    newErrors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    newErrors.email = "Enter a valid email"
  }

  if (!data.password) {
    newErrors.password = "Password is required"
  } else if (data.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters"
  }

  if (!data.phone.trim()) {
    newErrors.phone = "Phone is required"
  } else if (!/^[0-9]{10}$/.test(data.phone)) {
    newErrors.phone = "Phone must contain exactly 10 digits"
  }

  if (!data.gender) {
    newErrors.gender = "Please select gender"
  }

  if (data.hobbies.length === 0) {
    newErrors.hobbies = "Select at least one hobby"
  }

  if (!data.city) {
    newErrors.city = "Please select a city"
  }

  setErrors(newErrors)

  return Object.keys(newErrors).length === 0
}

  // HANDLE INPUT
  function handleChange(e) {

    const { name, value, type, checked } = e.target


    // CHECKBOX
    if (type === "checkbox") {

      if (checked) {

        setData({
          ...data,
          hobbies: [...data.hobbies, value]
        })

      } else {

        setData({
          ...data,
          hobbies: data.hobbies.filter(
            (hobby) => hobby !== value
          )
        })

      }

    } else {

      // NORMAL INPUT / RADIO / SELECT

      setData({
        ...data,
        [name]: value
      })

    }

  }

function handleSubmit(e) {

  e.preventDefault()

  if (!validate()) {
    return
  }

  let newData

  if (editIndex === null) {

    newData = [...users, data]

  } else {

    newData = [...users]

    newData[editIndex] = data

    setEditIndex(null)
  }

  localStorage.setItem(
    "Data",
    JSON.stringify(newData)
  )

  setUsers(newData)

  setData(InitialState)

  setErrors({})
}


  // DELETE
  function handleDelete(index) {

    const newData = users.filter(
      (_, i) => i !== index
    )

    localStorage.setItem(
      "Data",
      JSON.stringify(newData)
    )

    setUsers(newData)

  }


  // EDIT
  function handleEdit(index) {

    setData(users[index])

    setEditIndex(index)

  }


  // CANCEL
  function handleCancel() {

    setData(InitialState)

    setEditIndex(null)

  }


  return (
    <>

      {/* FORM */}

      <form onSubmit={handleSubmit}>

        <h2>
          {editIndex === null
            ? "Register"
            : "Update User"}
        </h2>


        {/* NAME */}

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


        {/* PHONE */}

        <div className="input-group">

          <label>Phone</label>

          <input
            type="tel"
            placeholder="Enter your Phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            required
          />

        </div>


        {/* GENDER */}

        <div className="input-group">

          <label>Gender</label>

          <div className="gender-options">

            <label>

              <input
                type="radio"
                name="gender"
                value="Male"
                checked={data.gender === "Male"}
                onChange={handleChange}
                required
              />

              Male

            </label>


            <label>

              <input
                type="radio"
                name="gender"
                value="Female"
                checked={data.gender === "Female"}
                onChange={handleChange}
              />

              Female

            </label>

          </div>

        </div>


        {/* HOBBIES */}

        <div className="input-group">

          <label>Hobbies</label>

          <div className="hobbies-options">

            <label>

              <input
                type="checkbox"
                name="hobbies"
                value="Coding"
                checked={data.hobbies.includes("Coding")}
                onChange={handleChange}
              />

              Coding

            </label>


            <label>

              <input
                type="checkbox"
                name="hobbies"
                value="Gaming"
                checked={data.hobbies.includes("Gaming")}
                onChange={handleChange}
              />

              Gaming

            </label>


            <label>

              <input
                type="checkbox"
                name="hobbies"
                value="Reading"
                checked={data.hobbies.includes("Reading")}
                onChange={handleChange}
              />

              Reading

            </label>


            <label>

              <input
                type="checkbox"
                name="hobbies"
                value="Traveling"
                checked={data.hobbies.includes("Traveling")}
                onChange={handleChange}
              />

              Traveling

            </label>

          </div>

        </div>


        {/* CITY */}

        <div className="input-group">

          <label>City</label>

          <select
            name="city"
            value={data.city}
            onChange={handleChange}
            required
          >

            <option value="">
              Select City
            </option>

            <option value="Ahmedabad">
              Ahmedabad
            </option>

            <option value="Mumbai">
              Mumbai
            </option>

            <option value="Delhi">
              Delhi
            </option>

            <option value="Kalol">
              Kalol
            </option>

            <option value="Bangalore">
              Bangalore
            </option>

          </select>

        </div>


        {/* EMAIL */}

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


        {/* PASSWORD */}

        <div className="input-group">

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
            minLength={6}
          />

        </div>


        {/* SUBMIT */}

        <input
          type="submit"
          value={
            editIndex === null
              ? "Register"
              : "Update"
          }
        />


        {/* CANCEL */}

        {editIndex !== null && (

          <button
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>

        )}

      </form>


      {/* TABLE */}

      <div className="table-container">

        <h2>Registered Users</h2>

        <table>

          <thead>

            <tr>

              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Hobbies</th>
              <th>City</th>
              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {users.map((user, index) => (

              <tr key={index}>

                <td>
                  {index + 1}
                </td>

                <td>
                  {user.name}
                </td>

                <td>
                  {user.email}
                </td>

                <td>
                  {user.password}
                </td>

                <td>
                  {user.phone}
                </td>

                <td>
                  {user.gender}
                </td>

                <td>
                  {user.hobbies.join(", ")}
                </td>

                <td>
                  {user.city}
                </td>

                <td>

                  <button
                    type="button"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>
  )
}

export default App