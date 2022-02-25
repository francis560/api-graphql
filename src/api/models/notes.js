const { Schema, model } = require("mongoose");


const notesModel = new Schema({
    title: {required: true, type: String},
    description: {required: true, type: String}
}, {
    timestamps: true
});


module.exports = model("Note", notesModel);