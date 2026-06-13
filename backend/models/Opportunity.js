const mongoose = require("mongoose");

const OpportunitySchema = new mongoose.Schema({

    ngo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"NGO"
    },

    title:String,

    description:String,

    requiredSkills:[String],

    causeArea:String,

    location:String,

    hoursRequired:Number

},{timestamps:true});

module.exports =
mongoose.model(
"Opportunity",
OpportunitySchema
);