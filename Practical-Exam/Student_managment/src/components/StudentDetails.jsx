import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../redux/actions/studentActions";

const StudentDetails = ({ student }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );

    if (!confirmDelete) return;

    const success = await dispatch(deleteStudent(student.id));

    if (success) {
      alert("Student deleted successfully!");
    }
  };

  return (
    <div className="card shadow-sm mb-2">
      <div className="card-body py-2">

        <div className="row align-items-center">

          <div className="col-md-1">
            <strong>#{student.id}</strong>
          </div>

          <div className="col-md-2">
            {student.name}
          </div>

          <div className="col-md-2">
            {student.phone}
          </div>

          <div className="col-md-3">
            {student.email}
          </div>

          <div className="col-md-1">
            {student.age}
          </div>

          <div className="col-md-1">
            {student.class}
          </div>

          <div className="col-md-1">
            <span className="badge bg-primary">
              {student.grade}
            </span>
          </div>

          <div className="col-md-1 d-flex gap-1">

            <button
              className="btn btn-warning btn-sm"
              onClick={() =>
                navigate(`/edit/${student.id}`)
              }
            >
              Edit
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={handleDelete}
            >
              Delete
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentDetails;