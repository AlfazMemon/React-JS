import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3000/users"
      );

      if (!response.ok) {
        throw new Error("Unable to connect to server");
      }

      const users = await response.json();

      const user = users.find(
        (item) =>
          item.email === email.trim() &&
          item.password === password
      );

      if (!user) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      navigate("/");
    } catch (error) {
      console.error(error);
      setError("JSON Server is not running");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-header bg-dark text-white">
              <h4 className="mb-0">
                Student Management Login
              </h4>
            </div>

            <div className="card-body">

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>

                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

              </form>

              <hr />

              <div className="text-center text-muted">
                <small>
                  Demo Login
                  <br />
                  admin@gmail.com
                  <br />
                  123456
                </small>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;