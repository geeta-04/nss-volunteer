import { useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import "../Dashboard.css";

function NGODashboard() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    requiredSkills: "",
    causeArea: "",
    location: "",
    hoursRequired: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const createOpportunity = async () => {

    try {

      const data = {
        title: form.title,
        description: form.description,
        requiredSkills: form.requiredSkills
          .split(",")
          .map(skill => skill.trim()),
        causeArea: form.causeArea,
        location: form.location,
        hoursRequired: Number(form.hoursRequired)
      };

      await API.post(
        "/opportunity/create",
        data
      );

      alert("Opportunity Created Successfully");

      setForm({
        title: "",
        description: "",
        requiredSkills: "",
        causeArea: "",
        location: "",
        hoursRequired: ""
      });

    } catch (error) {

      console.log(error);

      alert("Error Creating Opportunity");

    }
  };

  return (

    <div className="dashboard">

      <h1>NGO Dashboard</h1>

      <div className="card">

        <h2>Create Opportunity</h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="requiredSkills"
          placeholder="Skills (JavaScript, React)"
          value={form.requiredSkills}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="causeArea"
          placeholder="Cause Area"
          value={form.causeArea}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="hoursRequired"
          placeholder="Hours Required"
          value={form.hoursRequired}
          onChange={handleChange}
        />

        <br /><br />

        <button onClick={createOpportunity}>
          Create Opportunity
        </button>

      </div>

      <div className="cards">

        <div className="card">

          <h3>Applicants</h3>

          <Link to="/applicants">
            <button>
              View Applicants
            </button>
          </Link>

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

export default NGODashboard;