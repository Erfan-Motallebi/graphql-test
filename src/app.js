const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./graphql");
const cors = require("cors");

// Graphql-JS approaches + graphql-tools

// Express-graphql Approaches
// const { schema } = require("./graphql/expressGql");

const app = express();
app.use(cors())
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;
