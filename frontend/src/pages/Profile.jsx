import { useState }
from "react";

import API
from "../services/api";

function Profile(){

const user =
JSON.parse(
localStorage.getItem("user")
);

const [skills,setSkills]
=
useState("");

const [interests,setInterests]
=
useState("");

const [location,setLocation]
=
useState("");

const [availability,
setAvailability]
=
useState("");

const saveProfile = async() => {

  console.log("USER:", user);

  try {

    const res = await API.post(
      "/student/create",
      {
        user: user._id,
        skills: skills.split(","),
        interests: interests.split(","),
        location,
        availability
      }
    );

    console.log(res.data);

    alert("Profile Saved");

  } catch(error) {

    console.log(error);

    alert("Error Saving Profile");

  }

};

return(

<div>

<h1>
Student Profile
</h1>

<input
placeholder="Skills"
onChange={(e)=>
setSkills(
e.target.value
)}
/>

<input
placeholder="Interests"
onChange={(e)=>
setInterests(
e.target.value
)}
/>

<input
placeholder="Location"
onChange={(e)=>
setLocation(
e.target.value
)}
/>

<input
placeholder="Availability"
onChange={(e)=>
setAvailability(
e.target.value
)}
/>

<button
onClick={
saveProfile
}
>
Save Profile
</button>

</div>

);

}

export default Profile;