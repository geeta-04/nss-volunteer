import { Link } from "react-router-dom";
import "../Dashboard.css";

function StudentDashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {

    localStorage.clear();

    window.location.href = "/";

  };

  return (

    <div className="dashboard">

      <h1>
        Welcome, {user.name}
      </h1>

      <h3>
        Student Dashboard
      </h3>

      <div className="cards">

        <div className="card">

          <h3>👤 Profile</h3>

          <p>
            Complete your volunteer profile
          </p>

          <Link to="/profile">
            <button>
              Complete Profile
            </button>
          </Link>

        </div>

        <div className="card">

          <h3>🎯 Recommendations</h3>

          <p>
            View opportunities matched for you
          </p>

          <Link to="/recommendations">
            <button>
              View Matches
            </button>
          </Link>

        </div>

        <div className="card">

          <h3>📋 Opportunities</h3>

          <p>
            Browse all available opportunities
          </p>

          <Link to="/opportunities">
            <button>
              View Opportunities
            </button>
          </Link>

        </div>

        <div className="card">

          <h3>📨 Applications</h3>

          <p>
            Track your application status
          </p>

          <Link to="/my-applications">
            <button>
              My Applications
            </button>
          </Link>

        </div>

      </div>
            <div className="cards">

            <div className="card">
                <h2>5</h2>
                <p>Applications</p>
            </div>

            <div className="card">
                <h2>2</h2>
                <p>Accepted</p>
            </div>

            <div className="card">
                <h2>2</h2>
                <p>Pending</p>
            </div>

            <div className="card">
                <h2>1</h2>
                <p>Rejected</p>
            </div>

            </div>

      <button
        className="logout"
        onClick={logout}
      >
        Logout
      </button>

    </div>

  );

}

export default StudentDashboard;