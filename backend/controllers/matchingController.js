const StudentProfile = require("../models/StudentProfile");

const Opportunity = require("../models/Opportunity");

exports.getMatches = async(req,res)=>{

try{

const student = await StudentProfile.findOne({
user:req.params.userId
});

if(!student){

return res.status(404)
.json({
msg:"Profile not found"
});

}

const opportunities = await Opportunity.find();

const matches = opportunities.map(op=>{

let score = 0;

const commonSkills = student.skills.filter(skill =>
op.requiredSkills.includes(skill)
);

score +=
(commonSkills.length /
Math.max(
op.requiredSkills.length,
1
)) * 40;

if(
student.interests.includes(
op.causeArea
)
){
score += 25;
}

if(
student.location ===
op.location
){
score += 20;
}

if(
student.availability >=
op.hoursRequired
){
score += 15;
}

return {
opportunity:op,
score:Math.round(score)
};

});

matches.sort(
(a,b)=>
b.score-a.score
);

res.json(matches);

}catch(error){

console.log(error);

res.status(500)
.json(error);

}

};