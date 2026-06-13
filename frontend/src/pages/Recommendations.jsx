import {
useEffect,
useState
}
from "react";

import API
from "../services/api";

function Recommendations(){

const [
matches,
setMatches
]
=
useState([]);

const user =
JSON.parse(
localStorage.getItem("user")
);

useEffect(()=>{

loadMatches();

},[]);

const loadMatches =
async()=>{

const res =
await API.get(
`/matching/${user._id}`
);

setMatches(
res.data
);

};

return(

<div>

<h1>
Recommended Opportunities
</h1>

{
matches.map(
(item)=>(
<div
key={
item.opportunity._id
}
>

<h2>
{
item.opportunity.title
}
</h2>

<p>
Match Score:
{item.score}%
</p>

</div>
))
}

</div>

);

}

export default Recommendations;