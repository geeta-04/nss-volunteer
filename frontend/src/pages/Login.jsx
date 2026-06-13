import { useState } from "react";
import API from "../services/api";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = async() => {

    try {

      const res = await API.post(
        "/auth/login",
        {
          email,
          password
        }
      );
      
      console.log("LOGIN RESPONSE:", res.data);

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Success");

     if(
     res.data.user.role === "ngo"
    ){

     window.location.href =
     "/ngo-dashboard";

      } else{

      window.location.href =
      "/dashboard";

    }

      console.log(res.data);

    } catch(error) {

      console.log(error);

      alert("Login Failed");

    }

  };

  return(
    <div>

      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={(e)=>
          setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>
          setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;