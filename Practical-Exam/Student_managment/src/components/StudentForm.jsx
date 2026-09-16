import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  addStudent,
  updateStudent
} from "../redux/actions/studentActions";

const StudentForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    class: "",
    grade: ""
  });

  const [error, setError] = useState("");


  useEffect(() => {

    if (isEdit) {

      fetch(`http://localhost:3000/students/${id}`)
        .then((response) => response.json())
        .then((data) => {

          setFormData({
            name: data.name || "",
            phone: data.phone || "",
            email: data.email || "",
            age: data.age || "",
            class: data.class || "",
            grade: data.grade || ""
          });

        })
        .catch(() => {
          setError("Failed to load student");
        });

    }

  }, [id, isEdit]);


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.age ||
      !formData.class.trim() ||
      !formData.grade
    ) {

      setError("Please fill all fields");

      return;

    }

    setError("");

    let success;

    if (isEdit) {

      success = await dispatch(
        updateStudent({
          ...formData,
          id: id
        })
      );

    } else {

      success = await dispatch(
        addStudent(formData)
      );

    }


    if (success) {

      alert(
        isEdit
          ? "Student updated successfully!"
          : "Student added successfully!"
      );

      navigate("/");

    }

  };


  return (
    <div className="container mt-4 mb-5">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header bg-dark text-white">

              <h4 className="mb-0">
                {isEdit
                  ? "Update Student"
                  : "Add New Student"}
              </h4>

            </div>


            <div className="card-body">

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}


              <form onSubmit={handleSubmit}>

                <div className="row">


                  {/* Name */}

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter student name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                  </div>


                  {/* Phone */}

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                  </div>


                  {/* Email */}

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                  </div>


                  {/* Age */}

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Age
                    </label>

                    <input
                      type="number"
                      name="age"
                      className="form-control"
                      placeholder="Enter age"
                      value={formData.age}
                      onChange={handleChange}
                    />

                  </div>


                  {/* Class */}

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Class
                    </label>

                    <input
                      type="text"
                      name="class"
                      className="form-control"
                      placeholder="Enter class"
                      value={formData.class}
                      onChange={handleChange}
                    />

                  </div>


                  {/* Grade */}

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Grade
                    </label>

                    <select
                      name="grade"
                      className="form-select"
                      value={formData.grade}
                      onChange={handleChange}
                    >

                      <option value="">
                        Select Grade
                      </option>

                      <option value="A+">
                        A+
                      </option>

                      <option value="A">
                        A
                      </option>

                      <option value="B+">
                        B+
                      </option>

                      <option value="B">
                        B
                      </option>

                      <option value="C">
                        C
                      </option>

                    </select>

                  </div>

                </div>


                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-dark"
                  >
                    {isEdit
                      ? "Update Student"
                      : "Add Student"}
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default StudentForm;