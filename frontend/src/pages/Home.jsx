import { Link } from "react-router-dom";
import "../Dashboard.css";

function Home() {

  return (

    <div className="dashboard">

      <h1>
        🤝 NSS Volunteer Connect
      </h1>

      <h3>
        Connecting Students with NGOs
      </h3>

      <p>
        Find meaningful volunteer opportunities
        and create social impact.
      </p>

      <div className="cards">

        <div className="card">

          <h3>Student</h3>

          <p>
            Create profile, discover opportunities,
            and volunteer.
          </p>

          <Link to="/">
            <button>
              Login
            </button>
          </Link>

        </div>

        <div className="card">

          <h3>NGO</h3>

          <p>
            Create opportunities and manage
            volunteers.
          </p>

          <Link to="/">
            <button>
              Login
            </button>
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Home;