import {
useEffect,
useState
}
from "react";

import API
from "../services/api";

function Opportunities(){

const [
opportunities,
setOpportunities
]
=
useState([]);

const user =
JSON.parse(
localStorage.getItem("user")
);

useEffect(()=>{

fetchData();

},[]);

const fetchData =
async()=>{

const res =
await API.get(
"/opportunity/all"
);

setOpportunities(
res.data
);

};

const apply =
async(id)=>{

await API.post(

"/application/apply",

{
studentId:user._id,
opportunityId:id
}

);

alert(
"Applied Successfully"
);

};

return(

<div>

<h1>
Available Opportunities
</h1>

{
opportunities.map(
(op)=>(
<div
key={op._id}
>

<h2>
{op.title}
</h2>

<p>
{op.description}
</p>

<p>
{op.location}
</p>

<button
onClick={()=>
apply(op._id)
}
>
Apply
</button>

</div>
))
}

</div>

);

}

export default Opportunities;