import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import StudentForm from "./components/StudentForm";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* Protected Application */}

        <Route
          path="/*"
          element={
            <PrivateRoute>

              <>
                <Navbar />

                <Routes>

                  <Route
                    path="/"
                    element={<Home />}
                  />

                  <Route
                    path="/add"
                    element={<StudentForm />}
                  />

                  <Route
                    path="/edit/:id"
                    element={<StudentForm />}
                  />

                  <Route
                    path="/profile"
                    element={<Profile />}
                  />

                </Routes>

              </>

            </PrivateRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;