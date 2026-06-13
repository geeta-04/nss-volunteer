import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav
      style={{
        background:"#1e293b",
        padding:"15px",
        display:"flex",
        justifyContent:"space-between"
      }}
    >

      <h2>
        🤝 NSS Volunteer Connect
      </h2>

      <div>

        <Link
          to="/dashboard"
          style={{
            marginRight:"20px",
            color:"white"
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/opportunities"
          style={{
            color:"white"
          }}
        >
          Opportunities
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;