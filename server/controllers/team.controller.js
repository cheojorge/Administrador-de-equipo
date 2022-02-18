
const {Team} = require("../models/team.model")

module.exports.createTeam = (req, res) => {
    const { title,price, descrip} = req.body;
    Team.create({
        title,
        price,
        descrip
    })
    .then(team =>res.json(team))
    .catch(err => res.json(err))
}

module.exports.getAllPlayers = (req, res) => {
    Team.find({})
        .then(team => res.json(team))
        .catch(err => res.json(err))
}

module.exports.getPlayer = (req, res) =>{
    Product.findOne({ _id: req.params.id })
        .then(team => res.json(team))
        .catch(err => res.json(err))
}

module.exports.updateTeam = (req,res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body,{new:true})
        .then(team => res.json(team))
        .catch(err => res.json(err))
}

module.exports.deleteTeam = (req,res) =>{
    Product.deleteOne({_id: req.params.id})
        .then(team => res.json(team))
        .catch(eer => res.json(err))
}