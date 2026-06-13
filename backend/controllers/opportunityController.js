const Opportunity = require("../models/Opportunity");

exports.createOpportunity =
async(req,res)=>{

try{

const opportunity = await Opportunity.create(req.body);

res.json(opportunity);

}catch(err){

res.status(500).json(err);

}

};

exports.getOpportunities = async(req,res)=>{

try{

const opportunities = await Opportunity.find();

res.json(opportunities);

}catch(err){

res.status(500).json(err);

}

};