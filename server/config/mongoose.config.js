const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/playerdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));