const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/notes-api").then(res => {
    console.log("Database is conected");
}).catch(err => console.error(err));