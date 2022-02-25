const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { createNote, editNote, deleteNote } = require("../mutation/notesMutations");
const { getNotes } = require("../queries/notesQueries");


const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The root query type",
    fields: {
        getNotes
    }   
});


const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "The root mutation type",
    fields: {
        createNote,
        editNote,
        deleteNote
    }
});


const NotesSchema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});


module.exports = NotesSchema;