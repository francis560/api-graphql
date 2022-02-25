const { GraphQLList } = require("graphql");
const { NotesType } = require("../types");
const Note = require("../models/notes");


const getNotes = {
    type: new GraphQLList(NotesType),
    description: "Get notes",
    async resolve () {
        const notes = await Note.find();

        return notes;
    }
}


module.exports = { getNotes };