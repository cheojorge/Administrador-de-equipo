const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is requered'],
        minlength: [2, 'Name must be at least 2 characters in length']
    
    },
    position:{type: String},
},{timestamps:true});

module.exports.Team = mongoose.model("Team",TeamSchema)