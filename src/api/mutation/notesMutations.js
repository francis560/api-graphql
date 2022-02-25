const { GraphQLString } = require("graphql");
const Note = require("../models/notes");


const createNote = {
    type: GraphQLString,
    description: "Create note",
    args: {
        title: {type: GraphQLString},
        description: {type: GraphQLString}
    },
    async resolve (_, args) {
        const newNote = Note(args);

        await newNote.save();

        return "save";
    }
}


module.exports = { createNote };