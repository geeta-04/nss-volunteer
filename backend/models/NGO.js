const mongoose = require("mongoose");

const NGOSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    ngoName:String,

    description:String,

    darpanId:String,

    verified:{
        type:Boolean,
        default:false
    }

},{timestamps:true});

module.exports =
mongoose.model("NGO",NGOSchema);