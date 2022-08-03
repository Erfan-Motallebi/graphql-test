const { default: gql } = require("graphql-tag");
const { bookz } = require("../data/db");

const typeDefs = gql``;

const resolvers = {
  Query: {},
};

module.exports = {
  typeDefs,
  resolvers,
};
