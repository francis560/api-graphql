const { GraphQLSchema, GraphQLObjectType } = require("graphql");


const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The root query type",
    fields: {

    }
});


const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "The root mutation type",
    fields: {

    }
});


const NotesSchema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});


module.exports = NotesSchema;