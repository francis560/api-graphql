const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");


const NotesType = new GraphQLObjectType({
    name: "NotesType",
    description: "The notes type",
    fields: {
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    }
});


module.exports = { NotesType };