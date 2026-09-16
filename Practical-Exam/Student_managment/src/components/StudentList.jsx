import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../redux/actions/studentActions";
import StudentDetails from "./StudentDetails";

const StudentList = () => {
  const dispatch = useDispatch();

  const { students, loading, error } = useSelector(
    (state) => state
  );

  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  let filteredStudents = students.filter((student) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      student.name.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText);

    const matchesClass =
      classFilter === "" ||
      student.class === classFilter;

    return matchesSearch && matchesClass;
  });

  if (sortBy === "name") {
    filteredStudents.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortBy === "age") {
    filteredStudents.sort(
      (a, b) => Number(a.age) - Number(b.age)
    );
  }

  const classes = [
    ...new Set(students.map((student) => student.class))
  ];

  return (
    <div className="container-fluid mt-4">

      <h2 className="mb-4">
        Student List
      </h2>

      {/* Search / Filter / Sort */}

      <div className="row g-2 mb-4">

        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={classFilter}
            onChange={(e) =>
              setClassFilter(e.target.value)
            }
          >
            <option value="">All Classes</option>

            {classes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
          </select>
        </div>

        <div className="col-md-1">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              setSearch("");
              setClassFilter("");
              setSortBy("");
            }}
          >
            Clear
          </button>
        </div>

      </div>


      {loading && (
        <div className="text-center mt-5">
          <div className="spinner-border" />
          <p>Loading students...</p>
        </div>
      )}


      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}


      {!loading && !error && (
        <>

          {/* Table Header */}

          <div className="card bg-dark text-white mb-2">
            <div className="card-body py-2">

              <div className="row align-items-center fw-bold">

                <div className="col-md-1">
                  ID
                </div>

                <div className="col-md-2">
                  Name
                </div>

                <div className="col-md-2">
                  Phone
                </div>

                <div className="col-md-3">
                  Email
                </div>

                <div className="col-md-1">
                  Age
                </div>

                <div className="col-md-1">
                  Class
                </div>

                <div className="col-md-1">
                  Grade
                </div>

                <div className="col-md-1">
                  Action
                </div>

              </div>

            </div>
          </div>


          {/* Students */}

          {filteredStudents.length > 0 ? (

            filteredStudents.map((student) => (
              <StudentDetails
                key={student.id}
                student={student}
              />
            ))

          ) : (

            <div className="alert alert-info text-center">
              No students found.
            </div>

          )}

        </>
      )}

    </div>
  );
};

export default StudentList;