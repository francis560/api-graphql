const { GraphQLString, GraphQLID } = require("graphql");
const Note = require("../models/notes");


const createNote = {
    type: GraphQLString,
    description: "Create note",
    args: {
        title: {type: GraphQLString},
        description: {type: GraphQLString}
    },
    async resolve (_, args) {
        const newNote = await Note(args);

        await newNote.save();

        return "save";
    }
}

const editNote = {
    type: GraphQLString,
    description: "Edit note",
    args: {
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString}
    },
    async resolve (_, args) {
        const { id, title, description } = args;

        await Note.findByIdAndUpdate(id, {title, description});

        return "uptated";
    }
}

const deleteNote = {
    type: GraphQLString,
    description: "Delete note",
    args: {
        id: {type: GraphQLID}
    },
    async resolve (_, args) {
        const { id } = args;
        await Note.findByIdAndDelete(id);

        return "deleted";
    }
}


module.exports = { createNote, editNote, deleteNote };