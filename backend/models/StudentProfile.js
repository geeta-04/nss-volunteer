const mongoose = require("mongoose");

const StudentProfileSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    skills:[String],

    interests:[String],

    location:String,

    availability:Number,

    volunteerHours:{
        type:Number,
        default:0
    },

    reliabilityScore:{
        type:Number,
        default:100
    }

},{timestamps:true});

module.exports =
mongoose.model(
"StudentProfile",
StudentProfileSchema
);