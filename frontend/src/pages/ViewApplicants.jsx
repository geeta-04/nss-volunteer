import { useEffect,useState }
from "react";

import API
from "../services/api";

function ViewApplicants(){

const [
applications,
setApplications
]
=
useState([]);

useEffect(()=>{

loadApplications();

},[]);

const loadApplications =
async()=>{

const res =
await API.get(
"/application/all"
);

setApplications(
res.data
);

};

const updateStatus =
async(id,status)=>{

await API.put(

"/application/status",

{
applicationId:id,
status
}

);

loadApplications();

};

return(

<div>

<h1>
Applicants
</h1>

{
applications.map(
(app)=>(
<div
key={app._id}
>

<h3>
Student:
{
app.student?.name
}
</h3>

<p>
Opportunity:
{
app.opportunity?.title
}
</p>

<p>
Status:
{
app.status
}
</p>

<button
onClick={()=>
updateStatus(
app._id,
"accepted"
)
}
>
Accept
</button>

<button
onClick={()=>
updateStatus(
app._id,
"rejected"
)
}
>
Reject
</button>

<hr/>

</div>
))
}

</div>

);

}

export default ViewApplicants;