const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./graphql");

// Graphql-JS approaches + graphql-tools

// Express-graphql Approaches
// const { schema } = require("./graphql/expressGql");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;
