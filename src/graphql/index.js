const { mergeResolvers, mergeTypeDefs } = require("@graphql-tools/merge");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { typeDefs: bookTypeDefs, resolvers: bookResolvers } = require("./book");

// Merging all the Type Definitions

const typeDefs = mergeTypeDefs([bookTypeDefs]);
const resolvers = mergeResolvers([bookResolvers]);

module.exports = {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
};
