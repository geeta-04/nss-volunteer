const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({

    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    opportunity:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Opportunity"
    },

    status:{
        type:String,
        enum:[
            "pending",
            "accepted",
            "rejected",
            "completed"
        ],
        default:"pending"
    }

},{timestamps:true});

module.exports =
mongoose.model(
"Application",
ApplicationSchema
);