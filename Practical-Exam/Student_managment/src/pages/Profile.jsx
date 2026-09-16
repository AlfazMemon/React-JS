const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              <h4 className="mb-0">User Profile</h4>
            </div>

            <div className="card-body">

              <h5>
                {user?.name || "Admin"}
              </h5>

              <p className="text-muted mb-0">
                {user?.email || "admin@gmail.com"}
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;