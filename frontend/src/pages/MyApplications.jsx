import {
useEffect,
useState
}
from "react";

import API
from "../services/api";

function MyApplications(){

const [applications, setApplications ] = useState([]);

useEffect(()=>{

loadApplications();

},[]);

const loadApplications = async()=>{

const res =
await API.get(
"/application/all"
);

setApplications(
res.data
);

};

return(

<div>

<h1>
My Applications
</h1>

{
applications.map(
(app)=>(
<div
key={app._id}
>

<h2>
{
app.opportunity?.title
}
</h2>

<p>
{
app.status
}
</p>

</div>
))
}

</div>

);

}

export default MyApplications;