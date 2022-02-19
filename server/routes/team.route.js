const TeamController = require("../controllers/team.controller");

module.exports = function(app){
    app.post("/api/player", TeamController.createTeam);
    app.get("/api/player/:id", TeamController.getPlayer);
    app.get("/api/player", TeamController.getAllPlayers);
    app.put("/api/player/:id", TeamController.updateTeam);
    app.delete("/api/player/:id",TeamController.deleteTeam)

}