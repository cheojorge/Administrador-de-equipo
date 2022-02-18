const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    
    },
    price: {type: Number},
    descrip:{type: String},
},{timestamps:true});

module.exports.Team = mongoose.model("Team",ProductSchema)