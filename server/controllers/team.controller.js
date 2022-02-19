
const {Team} = require("../models/team.model")

module.exports.createTeam = (req, res) => {
    const { name ,position} = req.body;
    Team.create({
        name,
        position,

    })
    .then(team =>res.json(team))
    .catch(err => res.status(400).json(err))
}

module.exports.getAllPlayers = (req, res) => {
    Team.find({})
        .then(team => res.json(team))
        .catch(err => res.json(err))
}

module.exports.getPlayer = (req, res) =>{
    Team.findOne({ _id: req.params.id })
        .then(team => res.json(team))
        .catch(err => res.json(err))
}

module.exports.updateTeam = (req,res) => {
    Team.findOneAndUpdate({_id: req.params.id}, req.body,{new:true})
        .then(team => res.json(team))
        .catch(err => res.json(err))
}

module.exports.deleteTeam = (req,res) =>{
    Team.deleteOne({_id: req.params.id})
        .then(team => res.json(team))
        .catch(err => res.json(err))
}