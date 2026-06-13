const StudentProfile = require("../models/StudentProfile");

exports.createProfile =
async(req,res)=>{

try{

const profile = await StudentProfile.create(
req.body
);

res.json(profile);

}catch(err){

res.status(500).json(err);

}

};

exports.getProfile = async(req,res)=>{

try{

const profile = await StudentProfile.findOne({
user:req.params.id
});

res.json(profile);

}catch(err){

res.status(500).json(err);

}

};