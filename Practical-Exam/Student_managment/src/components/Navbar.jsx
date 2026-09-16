import {
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          Student Management
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
              >
                Students
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/add"
              >
                Add Student
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>

            <li className="nav-item">

              <button
                className="btn btn-danger btn-sm mt-1 ms-lg-2"
                onClick={handleLogout}
              >
                Logout
              </button>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;