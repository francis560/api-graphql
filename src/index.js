const express = require("express");
const morgan = require("morgan");
const { graphqlHTTP } = require("express-graphql");
const notesSchema = require("./api/schemas/notesSchema");
const app = express();


app.use(express());
app.use(express.json());
app.use(morgan("dev"));


app.set("PORT", process.env.PORT || 3000);


require("./database");


app.get("/graphql", graphqlHTTP({
    schema: notesSchema,
    graphiql: true
}));


app.listen( app.get("PORT"), () => {
    console.log("Server on port", app.get("PORT"));
});