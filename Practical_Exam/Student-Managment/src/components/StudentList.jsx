import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../redux/actions/studentActions";

const StudentList = () => {

  const dispatch = useDispatch();

  const { students, loading, error } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border"></div>
        <p>Loading students...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-4">
        {error}
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <h2 className="mb-4">
        Student List
      </h2>

      <div className="row">

        {students.map((student) => (

          <div
            className="col-md-6 col-lg-4 mb-4"
            key={student.id}
          >

            <div className="card h-100 shadow-sm">

              <img
                src={student.image}
                className="card-img-top"
                alt={student.name}
                style={{
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body">

                <h5 className="card-title">
                  {student.name}
                </h5>

                <p className="card-text mb-1">
                  <strong>Email:</strong> {student.email}
                </p>

                <p className="card-text mb-1">
                  <strong>Phone:</strong> {student.phone}
                </p>

                <p className="card-text mb-1">
                  <strong>Age:</strong> {student.age}
                </p>

                <p className="card-text mb-1">
                  <strong>Class:</strong> {student.class}
                </p>

                <p className="card-text">
                  <strong>Grade:</strong> {student.grade}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default StudentList;