const TeamController = require("../controllers/team.controller");

module.exports = function(app){
    app.post("/api/product", TeamController.createTeam);
    app.get("/api/product/:id", TeamController.getAllPlayers);
    app.get("/api/product", TeamController.getPlayer);
    app.put("/api/product/:id", TeamController.updateTeam);
    app.delete("/api/product/:id",TeamController.deleteTeam)

}