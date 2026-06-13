import { useState } from "react";
import API from "../services/api";

function Register() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    role:"student"
  });

  const handleChange = (e)=>{

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  };

  const handleSubmit = async()=>{

    try{

      const res =
      await API.post(
        "/auth/register",
        form
      );

      alert("Registered");

      console.log(res.data);

    }catch(err){

      console.log(err);

    }

  };

  return(

    <div>

      <h1>Register</h1>

      <input
      name="name"
      placeholder="Name"
      onChange={handleChange}
      />

      <input
      name="email"
      placeholder="Email"
      onChange={handleChange}
      />

      <input
      name="password"
      placeholder="Password"
      onChange={handleChange}
      />

      <button
      onClick={handleSubmit}
      >
      Register
      </button>

    </div>

  );

}

export default Register;